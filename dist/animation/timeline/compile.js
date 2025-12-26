import { isPlainObject } from "magic-utils-yonava";
import { easingOptionToFunction, } from "../../animation/easing";
import { interpolateColor, isColorString, } from "../../animation/interpolation/color";
import { interpolateCoordinate } from "../../animation/interpolation/coordinate";
import { interpolateNumber } from "../../animation/interpolation/number";
import { interpolateTextArea } from "../../animation/interpolation/textArea";
import { resolveTextArea } from "../../text/defaults";
// TODO
// eventually when we get better object/non-primitive runtime validation
// options like zod, we should use that instead of a hardcoded set of strings
// schema property names which handle values that are text areas
const TEXT_AREA_PROPS = new Set(["textArea"]);
// schema property names which handle values that are coordinates
const COORD_PROPS = new Set(["at", "start", "end"]);
const DEFAULT_START = {
    progress: 0,
    value: (val) => val,
};
const DEFAULT_END = {
    progress: 1,
    value: (val) => val,
};
const DEFAULT_EASING = "linear";
const isCustomInputObject = (obj) => {
    const isObj = isPlainObject(obj);
    if (!isObj)
        return false;
    const hasValueProp = "value" in obj;
    const hasEasingProp = "easing" in obj;
    const numOfProps = Object.keys(obj).length;
    return hasValueProp && numOfProps === (hasEasingProp ? 2 : 1);
};
export const compileTimeline = (timeline) => {
    const tl = {
        durationMs: timeline.durationMs,
        delayMs: timeline?.delayMs ?? 0,
        properties: {},
        validShapes: new Set(timeline.forShapes),
    };
    const rawTimelineKeyframes = timeline?.keyframes ?? [];
    const propsInTimeline = [
        ...new Set(rawTimelineKeyframes.map((kf) => Object.keys(kf.properties)).flat()),
    ];
    const propToAnimationKeyframes = propsInTimeline.reduce((acc, prop) => {
        const propInTimeline = rawTimelineKeyframes
            .map((kf) => {
            const propVal = kf.properties[prop];
            const isObj = isCustomInputObject(propVal);
            const value = isObj ? propVal.value : propVal;
            const easing = isObj ? propVal?.easing : undefined;
            return {
                progress: kf.progress,
                value,
                easing: easing !== undefined ? easingOptionToFunction(easing) : easing,
            };
        })
            .filter(({ value }) => value !== undefined);
        if (propInTimeline.at(0)?.progress !== 0) {
            propInTimeline.unshift(DEFAULT_START);
        }
        if (propInTimeline.at(-1)?.progress !== 1) {
            propInTimeline.push(DEFAULT_END);
        }
        acc[prop] = propInTimeline;
        return acc;
    }, {});
    const getDefaultEasing = (prop) => {
        const defaultEasingOption = timeline.easing?.[prop] ?? DEFAULT_EASING;
        return easingOptionToFunction(defaultEasingOption);
    };
    // TODO replace this with real object validation solutions like zod
    const isCoord = (propVal, propName) => COORD_PROPS.has(propName);
    const isTextArea = (propVal, propName) => TEXT_AREA_PROPS.has(propName);
    const interpolationFns = [
        {
            predicate: (propVal) => typeof propVal === "number",
            fn: interpolateNumber,
        },
        {
            predicate: (propVal) => typeof propVal === "string" && isColorString(propVal),
            fn: interpolateColor,
        },
        {
            predicate: isCoord,
            fn: interpolateCoordinate,
        },
        {
            predicate: isTextArea,
            fn: interpolateTextArea,
        },
    ];
    for (const propName of propsInTimeline) {
        tl.properties[propName] = (schemaWithDefaults, progress) => {
            const rawPropVal = schemaWithDefaults[propName];
            // if the prop value on the underlying schema is not set, property cant be animated
            if (rawPropVal === undefined)
                return;
            const interpolation = interpolationFns.find(({ predicate }) => predicate(rawPropVal, propName));
            if (!interpolation)
                throw `cannot interpolate value: ${JSON.stringify(rawPropVal)}`;
            const keyframes = propToAnimationKeyframes[propName].map((kf) => {
                const getValue = () => {
                    if (typeof kf.value === "function") {
                        return kf.value(rawPropVal, schemaWithDefaults);
                    }
                    return kf.value;
                };
                const value = getValue();
                // we do this check because for TS because partial fields do not error when
                // explicity set to undefined by the consumer
                if (value === undefined)
                    throw "keyframe value cannot be undefined!";
                return {
                    ...kf,
                    // allows users to only return partial text areas in the keyframe definition
                    value: isTextArea(rawPropVal, propName)
                        ? resolveTextArea(value).textArea
                        : value,
                };
            });
            return interpolation.fn(keyframes, getDefaultEasing(propName), 
            // @ts-expect-error could make TS happy, but would make this verbose unfortunately
            rawPropVal)(progress);
        };
    }
    const { customInterpolations } = timeline;
    if (customInterpolations) {
        const allCustomInterpolations = Object.entries(customInterpolations);
        for (const [propName, interpolationOptions] of allCustomInterpolations) {
            const { easing: easingRaw, value } = interpolationOptions;
            const easing = easingRaw ?? getDefaultEasing(propName);
            const easingFn = easingOptionToFunction(easing);
            tl.properties[propName] = (schemaWithDefaults, progress) => value(easingFn(progress), schemaWithDefaults);
        }
    }
    return tl;
};
