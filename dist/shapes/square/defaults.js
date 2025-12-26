import { resolveDefaults } from '../../defaults/resolveDefaults';
import { RECT_SCHEMA_DEFAULTS } from '../rect/defaults';
export const SQUARE_SCHEMA_DEFAULTS = {
    ...RECT_SCHEMA_DEFAULTS,
};
export const resolveSquareDefaults = resolveDefaults(SQUARE_SCHEMA_DEFAULTS);
