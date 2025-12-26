import { resolveDefaults } from '../../defaults/resolveDefaults';
import { FILL_COLOR_DEFAULTS, LINE_WIDTH_DEFAULTS, ROTATION_DEFAULTS, } from '../../defaults/schema';
export const UTURN_SCHEMA_DEFAULTS = {
    ...FILL_COLOR_DEFAULTS,
    ...ROTATION_DEFAULTS,
    ...LINE_WIDTH_DEFAULTS,
};
export const resolveUTurnDefaults = resolveDefaults(UTURN_SCHEMA_DEFAULTS);
