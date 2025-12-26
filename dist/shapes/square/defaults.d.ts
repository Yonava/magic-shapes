export declare const SQUARE_SCHEMA_DEFAULTS: {
    readonly rotation: 0;
    readonly borderRadius: 0;
    readonly fillColor: "black";
};
export declare const resolveSquareDefaults: (schema: {
    at: import("../../types/utility").Coordinate;
    fillColor?: string | undefined;
    stroke?: import("../../types/utility").Stroke | undefined;
    textArea?: import("../../text/types").TextArea | undefined;
    borderRadius?: (number | import("../../types/utility").BorderRadiusArrayValue) | undefined;
    rotation?: number | undefined;
    size: number;
}) => {
    at: import("../../types/utility").Coordinate;
    fillColor: string;
    stroke?: import("../../types/utility").Stroke | undefined;
    borderRadius: number | import("../../types/utility").BorderRadiusArrayValue;
    rotation: number;
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
export type SquareSchemaWithDefaults = ReturnType<typeof resolveSquareDefaults>;
