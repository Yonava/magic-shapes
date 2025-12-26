import { resolveDefaults } from '../../defaults/resolveDefaults';
import { LINE_SCHEMA_DEFAULTS } from '../line/defaults';
export const ARROW_SCHEMA_DEFAULTS = {
    ...LINE_SCHEMA_DEFAULTS,
};
export const resolveArrowDefaults = resolveDefaults(ARROW_SCHEMA_DEFAULTS);
