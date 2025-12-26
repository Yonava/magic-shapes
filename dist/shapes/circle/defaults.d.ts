export declare const CIRCLE_SCHEMA_DEFAULTS: {
    readonly fillColor: "black";
};
export declare const resolveCircleDefaults: (schema: {
    at: import("../../types/utility").Coordinate;
    fillColor?: string | undefined;
    stroke?: import("../../types/utility").Stroke | undefined;
    textArea?: import("../../text/types").TextArea | undefined;
    radius: number;
}) => {
    at: import("../../types/utility").Coordinate;
    fillColor: string;
    stroke?: import("../../types/utility").Stroke | undefined;
    radius: number;
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
export type CircleSchemaWithDefaults = ReturnType<typeof resolveCircleDefaults>;
