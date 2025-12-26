import type { ScribbleSchema } from './types';
export declare const SCRIBBLE_SCHEMA_DEFAULTS: {
    readonly brushWeight: 3;
    readonly fillColor: "black";
};
export declare const resolveScribbleDefaults: (schema: ScribbleSchema) => {
    fillColor: string;
    type: "draw" | "erase";
    points: import("../../types/utility").Coordinate[];
    brushWeight: number;
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
export type ScribbleSchemaWithDefaults = ReturnType<typeof resolveScribbleDefaults>;
