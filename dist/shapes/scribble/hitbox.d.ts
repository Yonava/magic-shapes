import type { BoundingBox, Coordinate } from '../../types/utility';
import type { ScribbleSchemaWithDefaults } from './defaults';
/**
 * @param point - the point to check if it is in the scribble bounding box
 * @returns a function that checks if the point is in the scribble bounding box
 */
export declare const scribbleHitbox: (schema: ScribbleSchemaWithDefaults) => (point: Coordinate) => boolean;
export declare const getScribbleBoundingBox: (schema: ScribbleSchemaWithDefaults) => () => BoundingBox;
export declare const scribbleEfficientHitbox: (schema: ScribbleSchemaWithDefaults) => (boxToCheck: BoundingBox) => boolean;
