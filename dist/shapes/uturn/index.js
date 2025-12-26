import { shapeFactoryWrapper } from '../../shapeWrapper';
import { getShapeTextProps } from '../../text/text';
import { resolveUTurnDefaults } from './defaults';
import { drawUTurnWithCtx } from './draw';
import { getUTurnBoundingBox, uturnEfficientHitbox, uturnHitbox, } from './hitbox';
import { getTextAreaAnchorPoint } from './text';
export const uturn = (options) => {
    if (options.downDistance < 0) {
        throw new Error('downDistance must be positive');
    }
    if (options.upDistance < 0) {
        throw new Error('upDistance must be positive');
    }
    const schema = resolveUTurnDefaults(options);
    const anchorPt = getTextAreaAnchorPoint(schema);
    const text = getShapeTextProps(anchorPt, schema.textArea);
    const getBoundingBox = getUTurnBoundingBox(schema);
    const hitbox = (pt) => text?.textHitbox(pt) || shapeHitbox(pt);
    const shapeHitbox = uturnHitbox(schema);
    const efficientHitbox = uturnEfficientHitbox(schema);
    const drawShape = drawUTurnWithCtx(schema);
    const draw = (ctx) => {
        drawShape(ctx);
        text?.drawTextArea(ctx);
    };
    return shapeFactoryWrapper({
        name: 'uturn',
        draw,
        drawShape,
        hitbox,
        shapeHitbox,
        efficientHitbox,
        getBoundingBox,
        ...text,
    });
};
