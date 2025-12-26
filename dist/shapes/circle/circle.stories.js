import { DEFAULT_STORIES, DOC_MARKING_DEFAULTS, createDocComponent, } from '../../docs';
import { circle } from '.';
import { CIRCLE_SCHEMA_DEFAULTS } from './defaults';
const Circle = createDocComponent(circle);
const meta = {
    title: 'Shapes/Circle',
    component: Circle,
    args: {
        ...CIRCLE_SCHEMA_DEFAULTS,
        radius: 50,
        at: { x: 60, y: 60 },
        ...DOC_MARKING_DEFAULTS,
    },
};
export default meta;
const { basic, markings, text, stroke } = DEFAULT_STORIES;
export const Basic = basic;
export const Markings = markings;
export const WithText = text;
export const WithStroke = stroke;
