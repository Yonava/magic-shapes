import type { Shape, ShapeProps } from './types';
export type ShapeFactoryWrapper = (shapeProps: ShapeProps) => Shape;
export declare const shapeFactoryWrapper: ShapeFactoryWrapper;
