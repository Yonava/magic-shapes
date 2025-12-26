import type { CrossSchema } from './types';
export declare const CROSS_SCHEMA_DEFAULTS: {
    readonly borderRadius: 0;
    readonly lineWidth: 10;
    readonly fillColor: "black";
    readonly rotation: 0;
};
export declare const resolveCrossDefaults: (schema: CrossSchema) => {
    at: import("../../types/utility").Coordinate;
    fillColor: string;
    borderRadius: number | import("../../types/utility").BorderRadiusArrayValue;
    rotation: number;
    lineWidth: number;
    size: number;
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
export type CrossSchemaWithDefaults = ReturnType<typeof resolveCrossDefaults>;
