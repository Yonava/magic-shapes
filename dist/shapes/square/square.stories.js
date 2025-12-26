import { DEFAULT_STORIES, DOC_MARKING_DEFAULTS, createDocComponent, } from '../../docs';
import { square } from '.';
import { SQUARE_SCHEMA_DEFAULTS } from './defaults';
const Square = createDocComponent(square);
const meta = {
    title: 'Shapes/Square',
    component: Square,
    args: {
        ...SQUARE_SCHEMA_DEFAULTS,
        size: 100,
        at: { x: 20, y: 20 },
        ...DOC_MARKING_DEFAULTS,
    },
};
export default meta;
const { basic, markings, text, stroke, rotation } = DEFAULT_STORIES;
export const Basic = basic;
export const Markings = markings;
export const WithText = text;
export const WithStroke = stroke;
export const Rotation = rotation;
