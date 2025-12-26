import { shapeFactoryWrapper } from '../../shapeWrapper';
import { getShapeTextProps } from '../../text/text';
import { resolveCrossDefaults } from './defaults';
import { drawCrossWithCtx } from './draw';
import { crossEfficientHitbox, crossHitbox, getCrossBoundingBox, } from './hitbox';
export const cross = (options) => {
    if (options.lineWidth && options.lineWidth < 0) {
        throw new Error('lineWidth must be positive');
    }
    const schema = resolveCrossDefaults(options);
    const text = getShapeTextProps(schema.at, schema.textArea);
    const drawShape = drawCrossWithCtx(schema);
    const draw = (ctx) => {
        drawShape(ctx);
        text?.drawTextArea(ctx);
    };
    const shapeHitbox = crossHitbox(schema);
    const efficientHitbox = crossEfficientHitbox(schema);
    const hitbox = (point) => text?.textHitbox(point) || shapeHitbox(point);
    const getBoundingBox = getCrossBoundingBox(schema);
    return shapeFactoryWrapper({
        name: 'cross',
        draw,
        drawShape,
        hitbox,
        shapeHitbox,
        efficientHitbox,
        getBoundingBox,
        ...text,
    });
};
