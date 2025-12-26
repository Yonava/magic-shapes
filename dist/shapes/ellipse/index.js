import { shapeFactoryWrapper } from '../../shapeWrapper';
import { drawEllipseWithCtx } from '../../shapes/ellipse/draw';
import { getShapeTextProps } from '../../text/text';
import { resolveEllipseDefaults } from './defaults';
import { ellipseEfficientHitbox, ellipseHitbox, getEllipseBoundingBox, } from './hitbox';
export const ellipse = (options) => {
    if (options.radiusX < 0 || options.radiusY < 0) {
        throw new Error('radius must be positive');
    }
    const schema = resolveEllipseDefaults(options);
    const text = getShapeTextProps(schema.at, schema.textArea);
    const drawShape = drawEllipseWithCtx(schema);
    const shapeHitbox = ellipseHitbox(schema);
    const efficientHitbox = ellipseEfficientHitbox(schema);
    const hitbox = (point) => text?.textHitbox(point) || shapeHitbox(point);
    const getBoundingBox = getEllipseBoundingBox(schema);
    const draw = (ctx) => {
        drawShape(ctx);
        text?.drawTextArea(ctx);
    };
    return shapeFactoryWrapper({
        name: 'ellipse',
        draw,
        drawShape,
        hitbox,
        shapeHitbox,
        efficientHitbox,
        getBoundingBox,
        ...text,
    });
};
