import { compileTimeline } from "./compile";
import { generateId } from "magic-utils-yonava";
export const useDefineTimeline = (controls) => {
    const timelineIdToTimeline = new Map();
    const defineTimeline = (timeline) => {
        const timelineId = generateId();
        const compiledTimeline = compileTimeline(timeline);
        timelineIdToTimeline.set(timelineId, compiledTimeline);
        return {
            play: (opts) => controls.play({
                ...opts,
                timelineId,
                synchronize: timeline.synchronize,
            }),
            pause: (opts) => controls.pause({ ...opts, timelineId }),
            resume: (opts) => controls.resume({ ...opts, timelineId }),
            stop: (opts) => controls.stop({ ...opts, timelineId }),
            dispose: () => timelineIdToTimeline.delete(timelineId),
        };
    };
    return {
        timelineIdToTimeline,
        defineTimeline,
    };
};
