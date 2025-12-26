import { getCenterPoint } from './helpers';
export const shapeFactoryWrapper = (shapeProps) => {
    return {
        ...shapeProps,
        /**
         * get the center point of the shape based on its bounding box
         */
        getCenterPoint: () => getCenterPoint(shapeProps.getBoundingBox()),
    };
};
