import { DEFAULT_STORIES, DOC_MARKING_DEFAULTS, createDocComponent, } from '../../docs';
import { star } from '.';
import { STAR_SCHEMA_DEFAULTS } from './defaults';
const Star = createDocComponent(star);
const meta = {
    title: 'Shapes/Star',
    component: Star,
    args: {
        ...STAR_SCHEMA_DEFAULTS,
        innerRadius: 25,
        outerRadius: 50,
        at: { x: 60, y: 60 },
        ...DOC_MARKING_DEFAULTS,
    },
};
export default meta;
const { basic, markings, rotation, text } = DEFAULT_STORIES;
export const Basic = basic;
export const Markings = markings;
export const Rotation = rotation;
export const WithText = text;
export const Points = {
    args: {
        points: 9,
    },
};
