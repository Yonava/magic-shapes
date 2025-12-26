import { rect } from "./shapes/rect";
import { square } from "./shapes/square";
import { defineComponent, h, onMounted, watch } from "vue";
import { cross } from "./shapes/cross";
import { generateId, getCtx } from "magic-utils-yonava";
import { getDevicePixelRatio } from "magic-canvas-yonava";
const atMarkerSchema = (at) => ({
    at,
    size: 5,
    fillColor: "red",
    lineWidth: 1,
});
const atMarker = (at) => cross(atMarkerSchema(at));
const centerMarkerSchema = (at) => ({
    at,
    size: 5,
    fillColor: "purple",
    lineWidth: 1,
});
const centerMarker = (at) => cross(centerMarkerSchema(at));
const boundingBoxMarkerSchema = (bb) => ({
    at: bb.at,
    width: bb.width,
    height: bb.height,
    fillColor: "transparent",
    stroke: {
        color: "green",
        lineWidth: 1,
    },
});
const boundingBoxMarker = (bb) => rect(boundingBoxMarkerSchema(bb));
const measuringStickSchema = {
    at: { x: 0, y: 0 },
    size: 1008,
    fillColor: "transparent",
    stroke: {
        color: "black",
        lineWidth: 4,
        dash: [10, 10],
    },
};
const measuringStick = square(measuringStickSchema);
export const DOC_MARKING_DEFAULTS = {
    showAtMarker: false,
    showBoundingBoxMarker: false,
    showMeasuringStick: false,
    showCenterMarker: false,
};
export const DEFAULT_STORIES = {
    basic: {},
    markings: {
        args: {
            showAtMarker: true,
            showBoundingBoxMarker: true,
            showMeasuringStick: true,
            showCenterMarker: false,
        },
    },
    text: {
        args: {
            textArea: {
                textBlock: {
                    content: "Hi!",
                    color: "white",
                },
                color: "blue",
            },
        },
    },
    stroke: {
        args: {
            stroke: {
                color: "blue",
                lineWidth: 10,
            },
        },
    },
    rotation: {
        args: {
            rotation: Math.PI * (1 / 4), // 45deg in radians
        },
    },
    colorGradient: {
        args: {
            fillGradient: [
                {
                    color: "red",
                    offset: 0,
                },
                {
                    color: "red",
                    offset: 0.95,
                },
                {
                    color: "blue",
                    offset: 0.96,
                },
                {
                    color: "blue",
                    offset: 1,
                },
            ],
        },
    },
};
export const createDocComponent = (factory) => defineComponent({
    inheritAttrs: false,
    setup: (_, { attrs }) => {
        const props = attrs;
        const canvasId = generateId();
        const drawPreview = () => {
            const canvas = document.getElementById(canvasId);
            const ctx = getCtx(canvas);
            const dpr = getDevicePixelRatio();
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const { showAtMarker, showCenterMarker, showBoundingBoxMarker, showMeasuringStick, } = props;
            if (showMeasuringStick)
                measuringStick.draw(ctx);
            const shape = factory(props);
            shape.draw(ctx);
            if (showBoundingBoxMarker)
                boundingBoxMarker(shape.getBoundingBox()).draw(ctx);
            if (showAtMarker && "at" in props)
                atMarker(props.at).draw(ctx);
            if (showCenterMarker)
                centerMarker(shape.getCenterPoint()).draw(ctx);
        };
        onMounted(drawPreview);
        watch(() => ({ ...props }), drawPreview);
        return () => h("canvas", {
            id: canvasId,
            width: 400,
            height: 400,
        });
    },
});
