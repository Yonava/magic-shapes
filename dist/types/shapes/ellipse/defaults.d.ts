import type { EllipseSchema } from './types';
export declare const ELLIPSE_SCHEMA_DEFAULTS: {
    readonly fillColor: "black";
};
export declare const resolveEllipseDefaults: (schema: EllipseSchema) => {
    at: import("../../types/utility").Coordinate;
    fillColor: string;
    stroke?: import("../../types/utility").Stroke | undefined;
    radiusX: number;
    radiusY: number;
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
export type EllipseSchemaWithDefaults = ReturnType<typeof resolveEllipseDefaults>;
//# sourceMappingURL=defaults.d.ts.map