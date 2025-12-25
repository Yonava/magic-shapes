export declare const getSchemaWithDefaults: {
    readonly arrow: (schema: import("../shapes/line/types").LineSchema) => {
        fillColor: string;
        start: import("../types/utility").Coordinate;
        end: import("../types/utility").Coordinate;
        lineWidth: number;
        textOffsetFromCenter: number;
        dash?: import("../types/utility").DashPattern | undefined;
        fillGradient?: readonly import("../types/utility").GradientStop[] | undefined;
        textArea: {
            textBlock: {
                content: string;
                fontSize: number;
                fontWeight: import("../text/types").FontWeight;
                color: string;
                fontFamily: string;
            };
            color: string;
            activeColor: string;
        };
    };
    readonly circle: (schema: {
        at: import("../types/utility").Coordinate;
        fillColor?: string | undefined;
        stroke?: import("../types/utility").Stroke | undefined;
        textArea?: import("../text/types").TextArea | undefined;
        radius: number;
    }) => {
        at: import("../types/utility").Coordinate;
        fillColor: string;
        stroke?: import("../types/utility").Stroke | undefined;
        radius: number;
        textArea: {
            textBlock: {
                content: string;
                fontSize: number;
                fontWeight: import("../text/types").FontWeight;
                color: string;
                fontFamily: string;
            };
            color: string;
            activeColor: string;
        };
    };
    readonly cross: (schema: import("../shapes/cross/types").CrossSchema) => {
        at: import("../types/utility").Coordinate;
        fillColor: string;
        borderRadius: number | import("../types/utility").BorderRadiusArrayValue;
        rotation: number;
        lineWidth: number;
        size: number;
        textArea: {
            textBlock: {
                content: string;
                fontSize: number;
                fontWeight: import("../text/types").FontWeight;
                color: string;
                fontFamily: string;
            };
            color: string;
            activeColor: string;
        };
    };
    readonly ellipse: (schema: import("../shapes/ellipse/types").EllipseSchema) => {
        at: import("../types/utility").Coordinate;
        fillColor: string;
        stroke?: import("../types/utility").Stroke | undefined;
        radiusX: number;
        radiusY: number;
        textArea: {
            textBlock: {
                content: string;
                fontSize: number;
                fontWeight: import("../text/types").FontWeight;
                color: string;
                fontFamily: string;
            };
            color: string;
            activeColor: string;
        };
    };
    readonly image: (schema: import("../shapes/image/types").ImageSchema) => {
        at: import("../types/utility").Coordinate;
        width: number;
        height: number;
        stroke?: import("../types/utility").Stroke | undefined;
        rotation: number;
        onLoad?: (() => void) | undefined;
        onLoadError?: (() => void) | undefined;
        src: string;
        textArea: {
            textBlock: {
                content: string;
                fontSize: number;
                fontWeight: import("../text/types").FontWeight;
                color: string;
                fontFamily: string;
            };
            color: string;
            activeColor: string;
        };
    };
    readonly line: (schema: import("../shapes/line/types").LineSchema) => {
        fillColor: string;
        start: import("../types/utility").Coordinate;
        end: import("../types/utility").Coordinate;
        lineWidth: number;
        textOffsetFromCenter: number;
        dash?: import("../types/utility").DashPattern | undefined;
        fillGradient?: readonly import("../types/utility").GradientStop[] | undefined;
        textArea: {
            textBlock: {
                content: string;
                fontSize: number;
                fontWeight: import("../text/types").FontWeight;
                color: string;
                fontFamily: string;
            };
            color: string;
            activeColor: string;
        };
    };
    readonly rect: (schema: import("../shapes/rect/types").RectSchema) => {
        at: import("../types/utility").Coordinate;
        width: number;
        height: number;
        fillColor: string;
        stroke?: import("../types/utility").Stroke | undefined;
        borderRadius: number | import("../types/utility").BorderRadiusArrayValue;
        rotation: number;
        textArea: {
            textBlock: {
                content: string;
                fontSize: number;
                fontWeight: import("../text/types").FontWeight;
                color: string;
                fontFamily: string;
            };
            color: string;
            activeColor: string;
        };
    };
    readonly scribble: (schema: import("../shapes/scribble/types").ScribbleSchema) => {
        fillColor: string;
        type: "draw" | "erase";
        points: import("../types/utility").Coordinate[];
        brushWeight: number;
        textArea: {
            textBlock: {
                content: string;
                fontSize: number;
                fontWeight: import("../text/types").FontWeight;
                color: string;
                fontFamily: string;
            };
            color: string;
            activeColor: string;
        };
    };
    readonly square: (schema: {
        at: import("../types/utility").Coordinate;
        fillColor?: string | undefined;
        stroke?: import("../types/utility").Stroke | undefined;
        textArea?: import("../text/types").TextArea | undefined;
        borderRadius?: number | import("../types/utility").BorderRadiusArrayValue | undefined;
        rotation?: number | undefined;
        size: number;
    }) => {
        at: import("../types/utility").Coordinate;
        fillColor: string;
        stroke?: import("../types/utility").Stroke | undefined;
        borderRadius: number | import("../types/utility").BorderRadiusArrayValue;
        rotation: number;
        size: number;
        textArea: {
            textBlock: {
                content: string;
                fontSize: number;
                fontWeight: import("../text/types").FontWeight;
                color: string;
                fontFamily: string;
            };
            color: string;
            activeColor: string;
        };
    };
    readonly star: (schema: import("../shapes/star/types").StarSchema) => {
        at: import("../types/utility").Coordinate;
        fillColor: string;
        rotation: number;
        points: number;
        innerRadius: number;
        outerRadius: number;
        textArea: {
            textBlock: {
                content: string;
                fontSize: number;
                fontWeight: import("../text/types").FontWeight;
                color: string;
                fontFamily: string;
            };
            color: string;
            activeColor: string;
        };
    };
    readonly triangle: (schema: import("../shapes/triangle/types").TriangleSchema) => {
        fillColor: string;
        stroke?: import("../types/utility").Stroke | undefined;
        fillGradient?: readonly import("../types/utility").GradientStop[] | undefined;
        pointA: import("../types/utility").Coordinate;
        pointB: import("../types/utility").Coordinate;
        pointC: import("../types/utility").Coordinate;
        textArea: {
            textBlock: {
                content: string;
                fontSize: number;
                fontWeight: import("../text/types").FontWeight;
                color: string;
                fontFamily: string;
            };
            color: string;
            activeColor: string;
        };
    };
    readonly uturn: (schema: import("../shapes/uturn/types").UTurnSchema) => {
        at: import("../types/utility").Coordinate;
        fillColor: string;
        rotation: number;
        lineWidth: number;
        fillGradient?: readonly import("../types/utility").GradientStop[] | undefined;
        spacing: number;
        upDistance: number;
        downDistance: number;
        textArea: {
            textBlock: {
                content: string;
                fontSize: number;
                fontWeight: import("../text/types").FontWeight;
                color: string;
                fontFamily: string;
            };
            color: string;
            activeColor: string;
        };
    };
};
export type SchemaWithDefaults = {
    [K in keyof typeof getSchemaWithDefaults]: ReturnType<(typeof getSchemaWithDefaults)[K]>;
};
//# sourceMappingURL=shapes.d.ts.map