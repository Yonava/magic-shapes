import type { BoundingBox, Coordinate } from '../../types/utility';
import type { StarSchemaWithDefaults } from './defaults';
export declare const starHitbox: (schema: StarSchemaWithDefaults) => (point: Coordinate) => boolean;
export declare const getStarBoundingBox: (schema: StarSchemaWithDefaults) => () => BoundingBox;
export declare const starEfficientHitbox: (schema: StarSchemaWithDefaults) => (boxToCheck: BoundingBox) => boolean;
//# sourceMappingURL=hitbox.d.ts.map