export const EASING_PRESETS = {
    linear: (step) => step,
    in: (step) => step * step,
    out: (step) => step * (2 - step),
    'in-out': (step) => step < 0.5 ? 2 * step * step : -1 + (4 - 2 * step) * step,
};
export const easingOptionToFunction = (easing) => {
    return typeof easing === 'function' ? easing : EASING_PRESETS[easing];
};
