import { DEFAULT_STORIES, DOC_MARKING_DEFAULTS, createDocComponent, } from '../../docs';
import { scribble } from '.';
import { SCRIBBLE_SCHEMA_DEFAULTS } from './defaults';
const Scribble = createDocComponent(scribble);
const meta = {
    title: 'Shapes/Scribble',
    component: Scribble,
    args: {
        ...SCRIBBLE_SCHEMA_DEFAULTS,
        type: 'draw',
        points: [
            { x: 20, y: 20 },
            { x: 150, y: 60 },
            { x: 20, y: 100 },
            { x: 150, y: 140 },
            { x: 20, y: 180 },
            { x: 150, y: 220 },
        ],
        ...DOC_MARKING_DEFAULTS,
    },
};
export default meta;
const { basic, markings, text } = DEFAULT_STORIES;
export const Basic = basic;
export const Markings = markings;
export const WithText = text;
export const BrushWeight = {
    args: {
        brushWeight: 10,
    },
};
