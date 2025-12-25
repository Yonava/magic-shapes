import type { BoundingBox, Coordinate } from '../../types/utility';
import type { CrossSchemaWithDefaults } from './defaults';
/**
 * @param point - the point to check if it is in the cross
 * @returns a function that checks if the point is in the cross
 */
export declare const crossHitbox: (schema: CrossSchemaWithDefaults) => (point: Coordinate) => boolean;
export declare const getCrossBoundingBox: (schema: CrossSchemaWithDefaults) => () => BoundingBox;
export declare const crossEfficientHitbox: (schema: CrossSchemaWithDefaults) => (boxToCheck: BoundingBox) => boolean;
//# sourceMappingURL=hitbox.d.ts.map