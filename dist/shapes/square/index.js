import { rect } from '../rect';
import { SQUARE_SCHEMA_DEFAULTS } from './defaults';
export const square = (options) => ({
    ...rect({
        ...SQUARE_SCHEMA_DEFAULTS,
        ...options,
        width: options.size,
        height: options.size,
    }),
    name: 'square',
});
