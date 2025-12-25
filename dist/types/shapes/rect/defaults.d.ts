import type { RectSchema } from './types';
export declare const RECT_SCHEMA_DEFAULTS: {
    readonly rotation: 0;
    readonly borderRadius: 0;
    readonly fillColor: "black";
};
export declare const resolveRectDefaults: (schema: RectSchema) => {
    at: import("../../types/utility").Coordinate;
    width: number;
    height: number;
    fillColor: string;
    stroke?: import("../../types/utility").Stroke | undefined;
    borderRadius: number | import("../../types/utility").BorderRadiusArrayValue;
    rotation: number;
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
export type RectSchemaWithDefaults = ReturnType<typeof resolveRectDefaults>;
//# sourceMappingURL=defaults.d.ts.map