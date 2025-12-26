import { shapeFactoryWrapper } from '../../shapeWrapper';
import { getShapeTextProps } from '../../text/text';
import { getTextAreaAnchorPoint } from '../line/text';
import { resolveArrowDefaults } from './defaults';
import { drawArrowWithCtx } from './draw';
import { arrowEfficientHitbox, arrowHitbox, getArrowBoundingBox, } from './hitbox';
export const arrow = (options) => {
    if (options.lineWidth && options.lineWidth < 0) {
        throw new Error('width must be positive');
    }
    const schema = resolveArrowDefaults(options);
    const anchorPt = getTextAreaAnchorPoint(schema);
    const text = getShapeTextProps(anchorPt, schema.textArea);
    const drawShape = drawArrowWithCtx(schema);
    const shapeHitbox = arrowHitbox(schema);
    const efficientHitbox = arrowEfficientHitbox(schema);
    const hitbox = (point) => text?.textHitbox(point) || shapeHitbox(point);
    const getBoundingBox = getArrowBoundingBox(schema);
    const draw = (ctx) => {
        drawShape(ctx);
        text?.drawTextArea(ctx);
    };
    return shapeFactoryWrapper({
        name: 'arrow',
        draw,
        drawShape,
        hitbox,
        shapeHitbox,
        efficientHitbox,
        getBoundingBox,
        ...text,
    });
};
