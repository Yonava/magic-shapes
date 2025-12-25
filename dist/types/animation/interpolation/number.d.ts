import type { InterpolationFunction } from './types';
/**
 * Interpolates a numeric value based on the provided keyframes and easing function.
 *
 * @param keyframes - An array of keyframes, each defining a progress point (0 to 1) and its corresponding value.
 *                    The keyframes should be ordered by progress in ascending order.
 * @param defaultEasing - A function that modifies the interpolation curve (e.g., linear, ease-in, ease-out).
 * @param fallback - The value to return if no keyframes are provided.
 * @returns A function that takes a progress value (between 0 and 1) and returns the interpolated value.
 *          If the provided progress is outside the range of keyframes, the nearest keyframe's value is returned.
 *
 * @example
 * const interpolated = valueAtProgress(
 *  [{ progress: 0, value: 0 }, { progress: 1, value: 10 }],
 *  t => t,
 *  0
 * );
 *
 * interpolated(0.5); // 5
 */
export declare const interpolateNumber: InterpolationFunction<number>;
//# sourceMappingURL=number.d.ts.map