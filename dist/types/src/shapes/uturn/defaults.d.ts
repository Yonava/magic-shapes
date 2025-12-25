import type { UTurnSchema } from './types';
export declare const UTURN_SCHEMA_DEFAULTS: {
    readonly lineWidth: 10;
    readonly rotation: 0;
    readonly fillColor: "black";
};
export declare const resolveUTurnDefaults: (schema: UTurnSchema) => {
    at: import("../../types/utility").Coordinate;
    fillColor: string;
    rotation: number;
    lineWidth: number;
    fillGradient?: readonly import("../../types/utility").GradientStop[] | undefined;
    spacing: number;
    upDistance: number;
    downDistance: number;
    textArea: {
        textBlock: {
            content: string;
            fontSize: number;
            fontWeight: import("../../text/types").FontWeight;
            color: string;
            fontFamily: string;
        };
        color: string;
        activeColor: string;
    };
};
export type UTurnSchemaWithDefaults = ReturnType<typeof resolveUTurnDefaults>;
//# sourceMappingURL=defaults.d.ts.map