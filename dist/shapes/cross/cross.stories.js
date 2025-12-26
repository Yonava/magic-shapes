import { DEFAULT_STORIES, DOC_MARKING_DEFAULTS, createDocComponent, } from '../../docs';
import { cross } from '.';
import { CROSS_SCHEMA_DEFAULTS } from './defaults';
const Cross = createDocComponent(cross);
const meta = {
    title: 'Shapes/Cross',
    component: Cross,
    args: {
        ...CROSS_SCHEMA_DEFAULTS,
        size: 100,
        at: { x: 60, y: 60 },
        ...DOC_MARKING_DEFAULTS,
    },
};
export default meta;
const { basic, markings, rotation, text } = DEFAULT_STORIES;
export const Basic = basic;
export const Markings = markings;
export const WithText = text;
export const Rotation = rotation;
export const LineWidth = {
    args: {
        lineWidth: 20,
    },
};
