export declare const shapes: {
    arrow: import("./types").ShapeFactory<import("./shapes/line/types").LineSchema>;
    circle: import("./types").ShapeFactory<{
        at: import("./types/utility").Coordinate;
        fillColor?: string | undefined;
        stroke?: import("./types/utility").Stroke | undefined;
        textArea?: import("./text/types").TextArea | undefined;
        radius: number;
    }>;
    cross: import("./types").ShapeFactory<import("./shapes/cross/types").CrossSchema>;
    ellipse: import("./types").ShapeFactory<import("./shapes/ellipse/types").EllipseSchema>;
    image: import("./types").ShapeFactory<import("./shapes/image/types").ImageSchema>;
    line: import("./types").ShapeFactory<import("./shapes/line/types").LineSchema>;
    rect: import("./types").ShapeFactory<import("./shapes/rect/types").RectSchema>;
    scribble: import("./types").ShapeFactory<import("./shapes/scribble/types").ScribbleSchema>;
    square: import("./types").ShapeFactory<{
        at: import("./types/utility").Coordinate;
        fillColor?: string | undefined;
        stroke?: import("./types/utility").Stroke | undefined;
        textArea?: import("./text/types").TextArea | undefined;
        borderRadius?: number | import("./types/utility").BorderRadiusArrayValue | undefined;
        rotation?: number | undefined;
        size: number;
    }>;
    star: import("./types").ShapeFactory<import("./shapes/star/types").StarSchema>;
    triangle: import("./types").ShapeFactory<import("./shapes/triangle/types").TriangleSchema>;
    uturn: import("./types").ShapeFactory<import("./shapes/uturn/types").UTurnSchema>;
};
//# sourceMappingURL=index.d.ts.map