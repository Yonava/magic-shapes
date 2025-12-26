import { resolveDefaults } from '../../defaults/resolveDefaults';
import { ROTATION_DEFAULTS } from '../../defaults/schema';
export const IMAGE_SCHEMA_DEFAULTS = {
    ...ROTATION_DEFAULTS,
};
export const resolveImageDefaults = resolveDefaults(IMAGE_SCHEMA_DEFAULTS);
