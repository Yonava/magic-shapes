import { resolveDefaults } from '../../defaults/resolveDefaults';
import { BORDER_RADIUS_DEFAULTS, FILL_COLOR_DEFAULTS, ROTATION_DEFAULTS, } from '../../defaults/schema';
export const RECT_SCHEMA_DEFAULTS = {
    ...FILL_COLOR_DEFAULTS,
    ...BORDER_RADIUS_DEFAULTS,
    ...ROTATION_DEFAULTS,
};
export const resolveRectDefaults = resolveDefaults(RECT_SCHEMA_DEFAULTS);
