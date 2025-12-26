import { resolveDefaults } from '../../defaults/resolveDefaults';
import { FILL_COLOR_DEFAULTS, ROTATION_DEFAULTS } from '../../defaults/schema';
export const STAR_SCHEMA_DEFAULTS = {
    ...FILL_COLOR_DEFAULTS,
    ...ROTATION_DEFAULTS,
    points: 5,
};
export const resolveStarDefaults = resolveDefaults(STAR_SCHEMA_DEFAULTS);
