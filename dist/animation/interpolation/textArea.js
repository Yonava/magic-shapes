import { interpolateColor } from './color';
import { interpolateNumber } from './number';
export const interpolateTextArea = (keyframes, defaultEasing, fallback) => {
    return (progress) => {
        const colorKeyframes = keyframes.map((kf) => ({
            ...kf,
            value: kf.value.color,
        }));
        const activeColorKeyframes = keyframes.map((kf) => ({
            ...kf,
            value: kf.value.activeColor,
        }));
        const textColorKeyframes = keyframes.map((kf) => ({
            ...kf,
            value: kf.value.textBlock.color,
        }));
        const textSizeKeyframes = keyframes.map((kf) => ({
            ...kf,
            value: kf.value.textBlock.fontSize,
        }));
        const textAreaColor = interpolateColor(colorKeyframes, defaultEasing, fallback.color);
        const textColor = interpolateColor(textColorKeyframes, defaultEasing, fallback.textBlock.color);
        const textFontSize = interpolateNumber(textSizeKeyframes, defaultEasing, fallback.textBlock.fontSize);
        const textAreaActiveColor = interpolateColor(activeColorKeyframes, defaultEasing, fallback.activeColor);
        const { textBlock } = fallback;
        return {
            textBlock: {
                ...textBlock,
                color: textColor(progress),
                fontSize: textFontSize(progress),
            },
            color: textAreaColor(progress),
            activeColor: textAreaActiveColor(progress),
        };
    };
};
