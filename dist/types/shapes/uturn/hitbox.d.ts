import type { BoundingBox, Coordinate } from '../../types/utility';
import type { UTurnSchemaWithDefaults } from './defaults';
export declare const uturnHitbox: (schema: UTurnSchemaWithDefaults) => (point: Coordinate) => boolean;
export declare const getUTurnBoundingBox: (schema: UTurnSchemaWithDefaults) => () => BoundingBox;
export declare const uturnEfficientHitbox: (schema: UTurnSchemaWithDefaults) => (boxToCheck: BoundingBox) => boolean;
//# sourceMappingURL=hitbox.d.ts.map