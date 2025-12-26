import type { BoundingBox, Coordinate } from "../../types/utility";
import type { EllipseSchemaWithDefaults } from "./defaults";
export declare const ellipseHitbox: (schema: EllipseSchemaWithDefaults) => (point: Coordinate) => boolean;
export declare const getEllipseBoundingBox: (schema: EllipseSchemaWithDefaults) => () => BoundingBox;
export declare const ellipseEfficientHitbox: (schema: EllipseSchemaWithDefaults) => (boxToCheck: BoundingBox) => boolean;
