import { resolveDefaults } from '../../defaults/resolveDefaults';
import { FILL_COLOR_DEFAULTS } from '../../defaults/schema';
export const TRIANGLE_SCHEMA_DEFAULTS = {
    ...FILL_COLOR_DEFAULTS,
};
export const resolveTriangleDefaults = resolveDefaults(TRIANGLE_SCHEMA_DEFAULTS);
