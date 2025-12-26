import type { BoundingBox, Coordinate } from '../../types/utility';
import { type ArrowSchemaWithDefaults } from './defaults';
export declare const arrowHitbox: (schema: ArrowSchemaWithDefaults) => (point: Coordinate) => boolean;
export declare const getArrowBoundingBox: (arrow: ArrowSchemaWithDefaults) => () => BoundingBox;
export declare const arrowEfficientHitbox: (schema: ArrowSchemaWithDefaults) => (bb: BoundingBox) => boolean;
