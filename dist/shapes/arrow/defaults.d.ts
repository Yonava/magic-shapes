export declare const ARROW_SCHEMA_DEFAULTS: {
    readonly textOffsetFromCenter: 0;
    readonly fillColor: "black";
    readonly lineWidth: 10;
};
export declare const resolveArrowDefaults: (schema: import("../line/types").LineSchema) => {
    fillColor: string;
    start: import("../../types/utility").Coordinate;
    end: import("../../types/utility").Coordinate;
    lineWidth: number;
    textOffsetFromCenter: number;
    dash?: import("../../types/utility").DashPattern | undefined;
    fillGradient?: readonly import("../../types/utility").GradientStop[] | undefined;
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
export type ArrowSchemaWithDefaults = ReturnType<typeof resolveArrowDefaults>;
