import type { BoundingBox, Coordinate } from '../../types/utility';
import type { RectSchemaWithDefaults } from './defaults';
/**
 * @param point - the point to check if it is in the rotated rectangle
 * @returns a function that checks if the point is in the rotated rectangle with rounded corners
 */
export declare const rectHitbox: (schema: RectSchemaWithDefaults) => (point: Coordinate) => boolean;
export declare const getRectBoundingBox: (schema: RectSchemaWithDefaults) => () => BoundingBox;
export declare const rectEfficientHitbox: (schema: RectSchemaWithDefaults) => (boxToCheck: BoundingBox) => boolean;
//# sourceMappingURL=hitbox.d.ts.map