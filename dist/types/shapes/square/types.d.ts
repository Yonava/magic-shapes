import type { Prettify } from 'ts-essentials';
import type { RectSchema } from '../rect/types';
export type SquareSchema = Prettify<Omit<RectSchema, 'width' | 'height'> & {
    size: number;
}>;
//# sourceMappingURL=types.d.ts.map