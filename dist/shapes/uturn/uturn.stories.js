import { DEFAULT_STORIES, DOC_MARKING_DEFAULTS, createDocComponent, } from '../../docs';
import { uturn } from '.';
import { UTURN_SCHEMA_DEFAULTS } from './defaults';
const UTurn = createDocComponent(uturn);
const meta = {
    title: 'Shapes/UTurn',
    component: UTurn,
    args: {
        ...UTURN_SCHEMA_DEFAULTS,
        at: { x: 20, y: 60 },
        spacing: 15,
        upDistance: 70,
        downDistance: 70,
        rotation: 0,
        lineWidth: 10,
        ...DOC_MARKING_DEFAULTS,
    },
};
export default meta;
const { basic, markings, text, rotation, colorGradient } = DEFAULT_STORIES;
export const Basic = basic;
export const Markings = markings;
export const WithText = text;
export const Rotation = rotation;
export const ColorGradient = colorGradient;
export const Spacing = {
    args: {
        spacing: 10,
    },
};
export const LineWidth = {
    args: {
        lineWidth: 15,
        spacing: 20,
    },
};
