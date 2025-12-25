import type { Color } from '@magic/utils/colors';
import tinycolor from 'tinycolor2';
import type { InterpolationFunction } from './types';
/**
 * @returns true if the supplied string can be parsed as a color
 */
export declare const isColorString: (color: Color) => boolean;
export declare const isColor: (color: tinycolor.Instance) => boolean;
export declare const interpolateColor: InterpolationFunction<Color>;
//# sourceMappingURL=color.d.ts.map