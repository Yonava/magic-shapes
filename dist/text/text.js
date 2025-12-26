import { rect } from '../shapes/rect';
import { createTextarea } from './createTextarea';
import { getTextDimensions } from './getTextDimensions';
export const HORIZONTAL_TEXT_PADDING = 20;
export const getShapeTextProps = (at, textArea) => {
    if (!at || !textArea)
        return;
    const dimensions = getTextAreaDimension(textArea.textBlock);
    const placedTextArea = {
        ...textArea,
        at: {
            x: at.x - dimensions.width / 2,
            y: at.y - dimensions.height / 2,
        },
    };
    const textAreaMatte = rect({
        at: placedTextArea.at,
        width: dimensions.width,
        height: dimensions.height,
        fillColor: placedTextArea.color,
    });
    const drawText = drawTextWithTextArea(placedTextArea, dimensions);
    const drawTextArea = (ctx) => {
        textAreaMatte.draw(ctx);
        drawText(ctx);
    };
    const startTextAreaEdit = (ctx, onTextAreaBlur) => {
        createTextarea(ctx, onTextAreaBlur, placedTextArea);
    };
    return {
        textHitbox: textAreaMatte.hitbox,
        drawTextAreaMatte: textAreaMatte.draw,
        drawText,
        drawTextArea,
        startTextAreaEdit,
    };
};
export const getTextAreaDimension = (text) => {
    const paddingVertical = HORIZONTAL_TEXT_PADDING;
    const { width, height, ascent, descent } = getTextDimensions(text);
    return {
        width: Math.max(width + HORIZONTAL_TEXT_PADDING, text.fontSize * 2),
        height: Math.max(height + paddingVertical, text.fontSize * 2),
        ascent,
        descent,
    };
};
export const drawTextWithTextArea = (textArea, textAreaDimensions) => (ctx) => {
    const { at, textBlock } = textArea;
    const { content, fontSize, fontWeight, color, fontFamily } = textBlock;
    ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const { width, descent, height } = textAreaDimensions;
    ctx.fillText(content, at.x + width / 2, at.y + height / 2 + descent / 4);
};
