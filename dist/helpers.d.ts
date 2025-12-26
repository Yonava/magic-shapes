import type { ArrowSchema } from './shapes/arrow/types';
import type { BorderRadius } from './types/schema';
import type { BorderRadiusArrayValue, BoundingBox, Coordinate, GradientStop, Stroke } from './types/utility';
/**
 * rotates a point around a center point by a given angle in radians
 *
 * @param pointToRotate - the point that is to be rotated
 * @param centerPoint - the point that the pointToRotate will rotate around
 * @param angle - the angle in radians that the pointToRotate will rotate by
 * @returns the new point after rotation
 */
export declare const rotatePoint: (pointToRotate: Coordinate, centerPoint: Coordinate, angle: number) => {
    x: number;
    y: number;
};
/**
 * same as rotatePoint but modifies the pointToRotate in place as opposed to returning a new point object
 *
 * @param pointToRotate - the point that is to be rotated
 * @param centerPoint - the point that the pointToRotate will rotate around
 * @param angle - the angle in radians that the pointToRotate will rotate by
 */
export declare const rotatePointInPlace: (pointToRotate: Coordinate, centerPoint: Coordinate, angle: number) => void;
/**
 * calculates the angle between two points in radians
 *
 * @param point1 - the first point
 * @param point2 - the second point
 * @returns the angle between the two points in radians
 */
export declare const getAngle: (point1: Coordinate, point2: Coordinate) => number;
/**
 * calculates the midpoint of the largest angular between a center point and a list of points
 *
 * @param center - the center point
 * @param points - the list of points
 * @returns the midpoint of the largest angular space
 */
export declare const getLargestAngularSpace: (center: Coordinate, points: Coordinate[]) => number;
/**
 * calculates the height and base width of the arrow's head based on the width of the arrow shaft
 *
 * @param arrowWidth - the width of the arrow shaft
 * @returns the arrowhead height and the arrowhead base length
 */
export declare const getArrowHeadSize: (arrowWidth: number) => {
    arrowHeadHeight: number;
    perpLineLength: number;
};
/**
 * generates a triangle object from the arrow tip
 *
 * @param options the arrow
 * @returns the triangle that makes up the arrow tip
 */
export declare const calculateArrowHeadCorners: (options: Required<Pick<ArrowSchema, "start" | "end" | "lineWidth">>) => {
    pointA: Coordinate;
    pointB: {
        x: number;
        y: number;
    };
    pointC: {
        x: number;
        y: number;
    };
};
/**
 * calculates the difference between two angles in radians.
 *
 * @param angleA The first angle in radians.
 * @param angleB The second angle in radians.
 * @returns The difference between the two angles in radians.
 */
export declare const angleDifference: (angleA: number, angleB: number) => number;
/**
 * finds the color at a specific percentage in a gradient
 *
 * @param gradient - The array of gradient stops
 * @param percentage - The distance along the gradient (0 to 1) to calculate the color for
 * @returns The color at the specified percentage as a hex string
 */
export declare const getColorAtPercentage: (gradient: readonly GradientStop[], percentage: number) => string;
/**
 * returns a bounding box with non-negative width and height by adjusting the `at` coordinate
 * to ensure it represents the top-left corner.
 *
 * @example
 * const res = normalizeBoundingBox({ at: { x: 10, y: 10 }, width: -5, height: 10 });
 * console.log(res); // { at: { x: 5, y: 10 }, width: 5, height: 10 }
 */
export declare const normalizeBoundingBox: (bb: BoundingBox) => BoundingBox;
/**
 * get the center point of a bounding box
 */
export declare const getCenterPoint: (bb: BoundingBox) => {
    x: number;
    y: number;
};
/**
 * returns true if any part of the two bounding boxes are overlapping
 *
 * TODO validate with a test
 */
export declare const areBoundingBoxesOverlapping: (bb1: BoundingBox, bb2: BoundingBox) => boolean;
/**
 * returns true if the point provided falls within the line
 */
export declare const isPointInLine: (line: {
    start: Coordinate;
    end: Coordinate;
    lineWidth: number;
}, point: Coordinate) => boolean;
/**
 * returns true if the point provided falls within the bounding box
 */
export declare const isPointInBoundingBox: (bb: BoundingBox, pt: Coordinate) => boolean;
export declare const toBorderRadiusArray: (borderRadius: BorderRadius["borderRadius"]) => BorderRadiusArrayValue;
export declare const drawStrokeOntoShape: (ctx: CanvasRenderingContext2D, stroke: Stroke) => void;
