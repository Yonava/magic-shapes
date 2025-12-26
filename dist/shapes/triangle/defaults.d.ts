import type { TriangleSchema } from './types';
export declare const TRIANGLE_SCHEMA_DEFAULTS: {
    readonly fillColor: "black";
};
export declare const resolveTriangleDefaults: (schema: TriangleSchema) => {
    fillColor: string;
    stroke?: import("../../types/utility").Stroke | undefined;
    fillGradient?: readonly import("../../types/utility").GradientStop[] | undefined;
    pointA: import("../../types/utility").Coordinate;
    pointB: import("../../types/utility").Coordinate;
    pointC: import("../../types/utility").Coordinate;
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
export type TriangleSchemaWithDefaults = ReturnType<typeof resolveTriangleDefaults>;
