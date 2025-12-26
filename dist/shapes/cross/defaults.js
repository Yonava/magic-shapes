import { resolveDefaults } from '../../defaults/resolveDefaults';
import { BORDER_RADIUS_DEFAULTS, FILL_COLOR_DEFAULTS, LINE_WIDTH_DEFAULTS, ROTATION_DEFAULTS, } from '../../defaults/schema';
export const CROSS_SCHEMA_DEFAULTS = {
    ...ROTATION_DEFAULTS,
    ...FILL_COLOR_DEFAULTS,
    ...LINE_WIDTH_DEFAULTS,
    ...BORDER_RADIUS_DEFAULTS,
};
export const resolveCrossDefaults = resolveDefaults(CROSS_SCHEMA_DEFAULTS);
