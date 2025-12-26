import { drawStrokeOntoShape } from '../../helpers';
export const drawEllipseWithCtx = (schema) => (ctx) => {
    const { at, radiusX, radiusY, fillColor: color, stroke } = schema;
    ctx.beginPath();
    ctx.ellipse(at.x, at.y, radiusX, radiusY, 0, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    if (stroke)
        drawStrokeOntoShape(ctx, stroke);
    ctx.closePath();
};
