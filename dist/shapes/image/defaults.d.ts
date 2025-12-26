import type { ImageSchema } from './types';
export declare const IMAGE_SCHEMA_DEFAULTS: {
    readonly rotation: 0;
};
export declare const resolveImageDefaults: (schema: ImageSchema) => {
    at: import("../../types/utility").Coordinate;
    width: number;
    height: number;
    stroke?: import("../../types/utility").Stroke | undefined;
    rotation: number;
    onLoad?: (() => void) | undefined;
    onLoadError?: (() => void) | undefined;
    src: string;
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
export type ImageSchemaWithDefaults = ReturnType<typeof resolveImageDefaults>;
