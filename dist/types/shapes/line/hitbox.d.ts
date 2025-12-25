import type { BoundingBox, Coordinate } from '../../types/utility';
import type { LineSchemaWithDefaults } from './defaults';
/**
 * @param point - the point to check if it is in the line
 * @returns a function that checks if the point is in the line
 */
export declare const lineHitbox: (schema: LineSchemaWithDefaults) => (point: Coordinate) => boolean;
export declare const getLineBoundingBox: (schema: LineSchemaWithDefaults) => () => BoundingBox;
export declare const lineEfficientHitbox: (schema: LineSchemaWithDefaults) => (boxToCheck: BoundingBox) => boolean;
//# sourceMappingURL=hitbox.d.ts.map