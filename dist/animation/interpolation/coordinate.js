import { interpolateNumber } from './number';
export const interpolateCoordinate = (keyframes, defaultEasing, fallback) => {
    return (progress) => {
        const xKeyframes = keyframes.map((kf) => ({
            value: kf.value.x,
            progress: kf.progress,
        }));
        const yKeyframes = keyframes.map((kf) => ({
            value: kf.value.y,
            progress: kf.progress,
        }));
        const x = interpolateNumber(xKeyframes, defaultEasing, fallback.x);
        const y = interpolateNumber(yKeyframes, defaultEasing, fallback.y);
        return {
            x: x(progress),
            y: y(progress),
        };
    };
};
