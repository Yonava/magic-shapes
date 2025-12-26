import { shapeFactoryWrapper } from '../../shapeWrapper';
import { getShapeTextProps } from '../../text/text';
import { resolveStarDefaults } from './defaults';
import { drawStarWithCtx } from './draw';
import { getStarBoundingBox, starEfficientHitbox, starHitbox } from './hitbox';
export const star = (options) => {
    const schema = resolveStarDefaults(options);
    if (schema.points < 3) {
        console.warn('star must have at least 3 points');
    }
    if (schema.innerRadius >= schema.outerRadius) {
        console.warn('inner radius must be less than outer radius');
    }
    if (schema.innerRadius < 0 || schema.outerRadius < 0) {
        console.warn('radius values must be positive');
    }
    const text = getShapeTextProps(schema.at, schema.textArea);
    const drawShape = drawStarWithCtx(schema);
    const draw = (ctx) => {
        drawShape(ctx);
        text?.drawTextArea(ctx);
    };
    const shapeHitbox = starHitbox(schema);
    const hitbox = (pt) => text?.textHitbox(pt) || shapeHitbox(pt);
    const efficientHitbox = starEfficientHitbox(schema);
    const getBoundingBox = getStarBoundingBox(schema);
    return shapeFactoryWrapper({
        name: 'star',
        draw,
        drawShape,
        hitbox,
        shapeHitbox,
        efficientHitbox,
        getBoundingBox,
        ...text,
    });
};
