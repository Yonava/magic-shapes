import { calculateArrowHeadCorners, getArrowHeadSize } from '../../helpers';
import { line } from '../line';
import { triangle } from '../triangle';
export const drawArrowWithCtx = (schema) => {
    const { start, end, lineWidth, fillGradient, fillColor } = schema;
    const headSchema = calculateArrowHeadCorners({
        start,
        end,
        lineWidth,
    });
    const { arrowHeadHeight } = getArrowHeadSize(lineWidth);
    const angle = Math.atan2(end.y - start.y, end.x - start.x);
    const shaft = line({
        ...schema,
        end: {
            x: end.x - arrowHeadHeight * Math.cos(angle) + Math.cos(angle),
            y: end.y - arrowHeadHeight * Math.sin(angle) + Math.sin(angle),
        },
    });
    const head = triangle({
        ...headSchema,
        fillColor: fillGradient && fillGradient.length
            ? fillGradient.at(-1)?.color
            : fillColor,
    });
    return (ctx) => {
        shaft.drawShape(ctx);
        head.drawShape(ctx);
    };
};
