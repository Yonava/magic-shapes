import { DEFAULT_STORIES, DOC_MARKING_DEFAULTS, createDocComponent, } from '../../docs';
import { rect } from '.';
import { RECT_SCHEMA_DEFAULTS } from './defaults';
const Rect = createDocComponent(rect);
const meta = {
    title: 'Shapes/Rect',
    component: Rect,
    args: {
        ...RECT_SCHEMA_DEFAULTS,
        width: 200,
        height: 100,
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
