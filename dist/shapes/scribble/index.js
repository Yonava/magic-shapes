import { getCenterPoint } from '../../helpers';
import { shapeFactoryWrapper } from '../../shapeWrapper';
import { getShapeTextProps } from '../../text/text';
import { resolveScribbleDefaults } from './defaults';
import { drawScribbleWithCtx } from './draw';
import { getScribbleBoundingBox, scribbleEfficientHitbox, scribbleHitbox, } from './hitbox';
export const ERASER_BRUSH_WEIGHT = 50;
export const scribble = (options) => {
    if (options.points.length < 1) {
        throw new Error('not enough points to draw scribble');
    }
    if (options.brushWeight && options.brushWeight < 1) {
        throw new Error('brushWeight must be at least "1"');
    }
    const schema = resolveScribbleDefaults(options);
    const getBoundingBox = getScribbleBoundingBox(schema);
    const anchorPt = getCenterPoint(getBoundingBox());
    const text = getShapeTextProps(anchorPt, schema.textArea);
    const shapeHitbox = scribbleHitbox(schema);
    const efficientHitbox = scribbleEfficientHitbox(schema);
    const hitbox = (pt) => text?.textHitbox(pt) || shapeHitbox(pt);
    const drawShape = drawScribbleWithCtx(schema);
    const draw = (ctx) => {
        drawShape(ctx);
        text?.drawTextArea(ctx);
    };
    return shapeFactoryWrapper({
        name: 'scribble',
        drawShape,
        draw,
        hitbox,
        shapeHitbox,
        efficientHitbox,
        getBoundingBox,
        ...text,
    });
};
