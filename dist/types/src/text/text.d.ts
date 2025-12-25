import type { ShapeTextProps } from '../types';
import type { Coordinate } from '../types/utility';
import type { DeepRequired } from 'ts-essentials';
import type { TextAreaWithDefaults } from './defaults';
import type { TextAreaWithAnchorPoint, TextBlock } from './types';
export declare const HORIZONTAL_TEXT_PADDING = 20;
/**
 * if a text area is provided, will return ShapeTextProps, otherwise undefined
 */
type ShapeTextPropsGetter = (at?: Coordinate, textArea?: TextAreaWithDefaults) => ShapeTextProps | undefined;
export declare const getShapeTextProps: ShapeTextPropsGetter;
export declare const getTextAreaDimension: (text: Required<TextBlock>) => {
    width: number;
    height: number;
    ascent: number;
    descent: number;
};
export declare const drawTextWithTextArea: (textArea: DeepRequired<TextAreaWithAnchorPoint>, textAreaDimensions: ReturnType<typeof getTextAreaDimension>) => (ctx: CanvasRenderingContext2D) => void;
export {};
//# sourceMappingURL=text.d.ts.map