import { DEFAULT_STORIES, DOC_MARKING_DEFAULTS, createDocComponent, } from '../../docs';
import { arrow } from '.';
import { ARROW_SCHEMA_DEFAULTS } from './defaults';
const Arrow = createDocComponent(arrow);
const meta = {
    title: 'Shapes/Arrow',
    component: Arrow,
    args: {
        ...ARROW_SCHEMA_DEFAULTS,
        start: { x: 30, y: 60 },
        end: { x: 200, y: 60 },
        ...DOC_MARKING_DEFAULTS,
    },
};
export default meta;
const { basic, markings, text, colorGradient } = DEFAULT_STORIES;
export const Basic = basic;
export const Markings = markings;
export const WithText = text;
export const ColorGradient = colorGradient;
export const TextOffset = {
    args: {
        textOffsetFromCenter: -50,
        ...text.args,
    },
};
export const Dashed = {
    args: {
        dash: [30, 30],
    },
};
export const Width = {
    args: {
        lineWidth: 20,
    },
};
