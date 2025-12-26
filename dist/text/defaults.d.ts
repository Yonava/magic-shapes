import type { TextArea as TextAreaSchema } from '../types/schema';
import type { DeepRequired } from 'ts-essentials';
import type { TextArea } from './types';
export declare const TEXTAREA_DEFAULTS: {
    readonly color: "white";
    readonly activeColor: "white";
};
export declare const TEXT_BLOCK_DEFAULTS: {
    readonly fontSize: 12;
    readonly fontWeight: "normal";
    readonly color: "black";
    readonly fontFamily: "Arial";
};
declare const getTextAreaWithDefaults: (textArea: TextArea) => DeepRequired<TextArea>;
export declare const resolveTextArea: (ta: TextAreaSchema["textArea"]) => {
    textArea: {
        textBlock: {
            content: string;
            fontSize: number;
            fontWeight: import("./types").FontWeight;
            color: string;
            fontFamily: string;
        };
        color: string;
        activeColor: string;
    };
} | undefined;
export type TextAreaWithDefaults = ReturnType<typeof getTextAreaWithDefaults>;
export {};
