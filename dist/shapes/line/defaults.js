import { resolveDefaults } from '../../defaults/resolveDefaults';
import { FILL_COLOR_DEFAULTS, LINE_WIDTH_DEFAULTS, } from '../../defaults/schema';
export const LINE_SCHEMA_DEFAULTS = {
    ...LINE_WIDTH_DEFAULTS,
    ...FILL_COLOR_DEFAULTS,
    textOffsetFromCenter: 0,
};
export const resolveLineDefaults = resolveDefaults(LINE_SCHEMA_DEFAULTS);
