import { resolveDefaults } from '../../defaults/resolveDefaults';
import { FILL_COLOR_DEFAULTS } from '../../defaults/schema';
export const SCRIBBLE_SCHEMA_DEFAULTS = {
    ...FILL_COLOR_DEFAULTS,
    brushWeight: 3,
};
export const resolveScribbleDefaults = resolveDefaults(SCRIBBLE_SCHEMA_DEFAULTS);
