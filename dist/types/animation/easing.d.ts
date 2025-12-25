export type EasingFunction = (step: number) => number;
export declare const EASING_PRESETS: {
    readonly linear: (step: number) => number;
    readonly in: (step: number) => number;
    readonly out: (step: number) => number;
    readonly 'in-out': (step: number) => number;
};
export type EasingPreset = keyof typeof EASING_PRESETS;
export type EasingOption = EasingFunction | EasingPreset;
export declare const easingOptionToFunction: (easing: EasingOption) => EasingFunction;
//# sourceMappingURL=easing.d.ts.map