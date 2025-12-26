import type { StarSchema } from './types';
export declare const STAR_SCHEMA_DEFAULTS: {
    readonly points: 5;
    readonly rotation: 0;
    readonly fillColor: "black";
};
export declare const resolveStarDefaults: (schema: StarSchema) => {
    at: import("../../types/utility").Coordinate;
    fillColor: string;
    rotation: number;
    points: number;
    innerRadius: number;
    outerRadius: number;
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
export type StarSchemaWithDefaults = ReturnType<typeof resolveStarDefaults>;
