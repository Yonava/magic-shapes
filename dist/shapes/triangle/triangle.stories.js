import { DEFAULT_STORIES, DOC_MARKING_DEFAULTS, createDocComponent, } from '../../docs';
import { triangle } from '.';
import { TRIANGLE_SCHEMA_DEFAULTS } from './defaults';
const Triangle = createDocComponent(triangle);
const meta = {
    title: 'Shapes/Triangle',
    component: Triangle,
    args: {
        ...TRIANGLE_SCHEMA_DEFAULTS,
        pointA: { x: 90, y: 20 },
        pointB: { x: 20, y: 100 },
        pointC: { x: 160, y: 100 },
        ...DOC_MARKING_DEFAULTS,
    },
};
export default meta;
const { basic, markings, text, stroke, colorGradient } = DEFAULT_STORIES;
export const Basic = basic;
export const Markings = markings;
export const WithText = text;
export const WithStroke = stroke;
export const ColorGradient = colorGradient;
