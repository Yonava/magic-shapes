import { resolveDefaults } from '../../defaults/resolveDefaults';
import { ELLIPSE_SCHEMA_DEFAULTS } from '../ellipse/defaults';
export const CIRCLE_SCHEMA_DEFAULTS = {
    ...ELLIPSE_SCHEMA_DEFAULTS,
};
export const resolveCircleDefaults = resolveDefaults(CIRCLE_SCHEMA_DEFAULTS);
