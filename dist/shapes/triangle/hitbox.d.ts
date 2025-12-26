import type { BoundingBox, Coordinate } from '../../types/utility';
import type { TriangleSchemaWithDefaults } from './defaults';
/**
 * uses barycentric coordinate system for triangles. dont ask me, im not that smart.
 * https://en.wikipedia.org/wiki/Barycentric_coordinate_system
 *
  @param {Coordinate} point - the point to check if it is in the triangle
  @returns a function that checks if the point is in the triangle
*/
export declare const triangleHitbox: (schema: TriangleSchemaWithDefaults) => (point: Coordinate) => boolean;
export declare const getTriangleBoundingBox: (triangle: TriangleSchemaWithDefaults) => () => BoundingBox;
export declare const triangleEfficientHitbox: (schema: TriangleSchemaWithDefaults) => (boxToCheck: BoundingBox) => boolean;
