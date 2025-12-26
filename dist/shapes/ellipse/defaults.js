import { resolveDefaults } from '../../defaults/resolveDefaults';
import { FILL_COLOR_DEFAULTS } from '../../defaults/schema';
export const ELLIPSE_SCHEMA_DEFAULTS = {
    ...FILL_COLOR_DEFAULTS,
};
export const resolveEllipseDefaults = resolveDefaults(ELLIPSE_SCHEMA_DEFAULTS);
