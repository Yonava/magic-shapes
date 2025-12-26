import { ellipse } from '../ellipse';
import { CIRCLE_SCHEMA_DEFAULTS } from './defaults';
export const circle = (options) => ({
    ...ellipse({
        ...CIRCLE_SCHEMA_DEFAULTS,
        ...options,
        radiusX: options.radius,
        radiusY: options.radius,
    }),
    name: 'circle',
});
