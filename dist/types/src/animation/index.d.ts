import type { SchemaId, ShapeFactory, WithId } from '../types';
import type { ActiveAnimation, LooseSchema } from './types';
type ActiveAnimationsMap = Map<SchemaId, ActiveAnimation[]>;
export type GetAnimatedSchema = (schemaId: SchemaId) => LooseSchema | undefined;
export declare const useAnimatedShapes: () => {
    shapes: {
        arrow: ShapeFactory<WithId<import("../shapes/line/types").LineSchema>>;
        circle: ShapeFactory<WithId<{
            at: import("../types/utility").Coordinate;
            fillColor?: string | undefined;
            stroke?: import("../types/utility").Stroke | undefined;
            textArea?: import("../text/types").TextArea | undefined;
            radius: number;
        }>>;
        cross: ShapeFactory<WithId<import("../shapes/cross/types").CrossSchema>>;
        ellipse: ShapeFactory<WithId<import("../shapes/ellipse/types").EllipseSchema>>;
        image: ShapeFactory<WithId<import("../shapes/image/types").ImageSchema>>;
        line: ShapeFactory<WithId<import("../shapes/line/types").LineSchema>>;
        rect: ShapeFactory<WithId<import("../shapes/rect/types").RectSchema>>;
        scribble: ShapeFactory<WithId<import("../shapes/scribble/types").ScribbleSchema>>;
        square: ShapeFactory<WithId<{
            at: import("../types/utility").Coordinate;
            fillColor?: string | undefined;
            stroke?: import("../types/utility").Stroke | undefined;
            textArea?: import("../text/types").TextArea | undefined;
            borderRadius?: number | import("../types/utility").BorderRadiusArrayValue | undefined;
            rotation?: number | undefined;
            size: number;
        }>>;
        star: ShapeFactory<WithId<import("../shapes/star/types").StarSchema>>;
        triangle: ShapeFactory<WithId<import("../shapes/triangle/types").TriangleSchema>>;
        uturn: ShapeFactory<WithId<import("../shapes/uturn/types").UTurnSchema>>;
    };
    defineTimeline: <T extends keyof import("../types").ShapeNameToSchema>(timeline: {
        readonly forShapes: readonly import("ts-essentials").DeepReadonly<T>[];
        readonly keyframes?: readonly {
            readonly progress: number;
            readonly properties: import("ts-essentials").DeepReadonly<Partial<(import("../defaults/shapes").SchemaWithDefaults[NoInfer<T>] extends infer T_4 ? { [TProp_1 in keyof T_4]: TProp_1 extends "textArea" ? import("../defaults/shapes").SchemaWithDefaults[NoInfer<T>][TProp_1] | ((propValue: import("../text/types").TextArea, schema: import("../defaults/shapes").SchemaWithDefaults[NoInfer<T>]) => import("../text/types").TextArea) : import("../defaults/shapes").SchemaWithDefaults[NoInfer<T>][TProp_1] | ((propValue: import("ts-essentials").DeepRequired<import("../defaults/shapes").SchemaWithDefaults[NoInfer<T>][TProp_1]>, schema: import("../defaults/shapes").SchemaWithDefaults[NoInfer<T>]) => import("../defaults/shapes").SchemaWithDefaults[NoInfer<T>][TProp_1]); } : never) extends infer T_1 ? { [TProp in keyof T_1]: (import("../defaults/shapes").SchemaWithDefaults[NoInfer<T>] extends infer T_2 ? { [TProp_1 in keyof T_2]: TProp_1 extends "textArea" ? import("../defaults/shapes").SchemaWithDefaults[NoInfer<T>][TProp_1] | ((propValue: import("../text/types").TextArea, schema: import("../defaults/shapes").SchemaWithDefaults[NoInfer<T>]) => import("../text/types").TextArea) : import("../defaults/shapes").SchemaWithDefaults[NoInfer<T>][TProp_1] | ((propValue: import("ts-essentials").DeepRequired<import("../defaults/shapes").SchemaWithDefaults[NoInfer<T>][TProp_1]>, schema: import("../defaults/shapes").SchemaWithDefaults[NoInfer<T>]) => import("../defaults/shapes").SchemaWithDefaults[NoInfer<T>][TProp_1]); } : never)[TProp] | {
                value: (import("../defaults/shapes").SchemaWithDefaults[NoInfer<T>] extends infer T_3 ? { [TProp_1 in keyof T_3]: TProp_1 extends "textArea" ? import("../defaults/shapes").SchemaWithDefaults[NoInfer<T>][TProp_1] | ((propValue: import("../text/types").TextArea, schema: import("../defaults/shapes").SchemaWithDefaults[NoInfer<T>]) => import("../text/types").TextArea) : import("../defaults/shapes").SchemaWithDefaults[NoInfer<T>][TProp_1] | ((propValue: import("ts-essentials").DeepRequired<import("../defaults/shapes").SchemaWithDefaults[NoInfer<T>][TProp_1]>, schema: import("../defaults/shapes").SchemaWithDefaults[NoInfer<T>]) => import("../defaults/shapes").SchemaWithDefaults[NoInfer<T>][TProp_1]); } : never)[TProp];
                easing?: import("./easing").EasingOption | undefined;
            }; } : never>>;
        }[] | undefined;
        readonly easing?: import("ts-essentials").DeepReadonly<Partial<Record<keyof import("../defaults/shapes").SchemaWithDefaults[NoInfer<T>], import("./easing").EasingOption>>> | undefined;
        readonly synchronize?: boolean | undefined;
        readonly durationMs: number;
        readonly delayMs?: number | undefined;
        readonly customInterpolations?: import("ts-essentials").DeepReadonly<Partial<import("../defaults/shapes").SchemaWithDefaults[NoInfer<T>] extends infer T_5 ? { [TProp_2 in keyof T_5]: import("./timeline/define").ImperativeTrack<import("../defaults/shapes").SchemaWithDefaults[NoInfer<T>], TProp_2>; } : never>> | undefined;
    }) => {
        play: (options: {
            shapeId: string;
        } & {
            runCount?: number | undefined;
        }) => void;
        pause: (options: {
            shapeId: string;
        }) => void;
        resume: (options: {
            shapeId: string;
        }) => void;
        stop: (options: {
            shapeId: string;
        }) => void;
        dispose: () => void;
    };
    autoAnimate: {
        captureFrame: (flushDraw: () => void) => () => void;
    };
    getAnimatedSchema: GetAnimatedSchema;
    /**
     * Get the animated value of a schema property currently being animated.
     *
     * Intended for use in imperative timelines where resolving one property's animated value
     * depends on the animated value of another property. In these special cases, `getAnimatedSchema`
     * would cause a circular dependency.
     *
     * WARNING: Calling this on a property that the imperative track itself resolves
     * will crash your app!
     */
    getAnimatedProp: <T_6 extends "at" | "width" | "height" | "fillColor" | "stroke" | "textArea" | "borderRadius" | "rotation" | "start" | "end" | "lineWidth" | "textOffsetFromCenter" | "dash" | "fillGradient" | keyof import("../shapes/image/cache").LoadImageOptions | "radiusX" | "radiusY" | "radius" | "size" | "src" | "pointA" | "pointB" | "pointC" | "type" | "points" | "brushWeight" | "innerRadius" | "outerRadius" | "spacing" | "upDistance" | "downDistance">(schemaId: string, inputPropName: T_6) => ({
        width: number;
        height: number;
    } & import("../types/schema").AnchorPoint & import("../types/schema").FillColor & import("../types/schema").Stroke & import("../types/schema").TextArea & import("../types/schema").BorderRadius & import("../types/schema").Rotation & {
        size: number;
    } & import("../types/schema").LineWidth & {
        start: import("../types/utility").Coordinate;
        end: import("../types/utility").Coordinate;
        textOffsetFromCenter?: number | undefined;
        dash?: import("../types/utility").DashPattern | undefined;
    } & import("../types/schema").FillGradient & {
        radiusX: number;
        radiusY: number;
    } & {
        src: string;
    } & Partial<import("../shapes/image/cache").LoadImageOptions> & {
        at: import("../types/utility").Coordinate;
        width: number;
        height: number;
        stroke?: import("../types/utility").Stroke | undefined;
        textArea?: import("../text/types").TextArea | undefined;
        rotation?: number | undefined;
    } & {
        type: "draw" | "erase";
        points: import("../types/utility").Coordinate[];
        brushWeight?: number | undefined;
    } & {
        innerRadius: number;
        outerRadius: number;
        points?: number | undefined;
    } & {
        pointA: import("../types/utility").Coordinate;
        pointB: import("../types/utility").Coordinate;
        pointC: import("../types/utility").Coordinate;
    } & {
        at: import("../types/utility").Coordinate;
        fillColor?: string | undefined;
        stroke?: import("../types/utility").Stroke | undefined;
        textArea?: import("../text/types").TextArea | undefined;
        radius: number;
    } & {
        at: import("../types/utility").Coordinate;
        fillColor?: string | undefined;
        stroke?: import("../types/utility").Stroke | undefined;
        textArea?: import("../text/types").TextArea | undefined;
        borderRadius?: number | import("../types/utility").BorderRadiusArrayValue | undefined;
        rotation?: number | undefined;
        size: number;
    } & {
        spacing: number;
        upDistance: number;
        downDistance: number;
    })[T_6];
    activeAnimations: ActiveAnimationsMap;
};
export type AnimatedShapeControls = ReturnType<typeof useAnimatedShapes>;
export {};
//# sourceMappingURL=index.d.ts.map