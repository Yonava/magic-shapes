import { type EasingFunction } from '../../animation/easing';
import type { AnimationKeyframe } from '../../animation/interpolation/types';
import type { EverySchemaPropName, ShapeName } from '../../types';
import type { Timeline, TimelinePlaybackDelay, TimelinePlaybackDuration } from './define';
/**
 * @param schema the non-altered schema of the shape being animated
 * @param progress value between 0 and 1. See {@link NumberKeyframe.progress}
 */
type AnimationFunction = (schema: any, progress: number) => any;
export type CompiledTimeline = {
    /**
     * maps schema properties to their animation functions
     */
    properties: Record<string, AnimationFunction>;
    /**
     * the shapes that this animated timeline is valid for
     */
    validShapes: Set<ShapeName>;
} & TimelinePlaybackDuration & Required<TimelinePlaybackDelay>;
/**
 * property name on schema (radius, rotation, lineWidth etc) to
 * keyframes of either a custom getter function or the value itself
 */
type PropToAnimationKeyframe = Partial<Record<EverySchemaPropName, AnimationKeyframe<any>[]>>;
export type CompileProp = (prop: EverySchemaPropName, propToAnimationKeyframes: PropToAnimationKeyframe, easing: EasingFunction) => AnimationFunction;
export declare const compileTimeline: (timeline: Timeline<any>) => CompiledTimeline;
export {};
//# sourceMappingURL=compile.d.ts.map