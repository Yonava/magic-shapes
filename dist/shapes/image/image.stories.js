import { DEFAULT_STORIES, DOC_MARKING_DEFAULTS, createDocComponent, } from '../../docs';
import { image } from '.';
import { IMAGE_SCHEMA_DEFAULTS } from './defaults';
const Image = createDocComponent(image);
const meta = {
    title: 'Shapes/Image',
    component: Image,
    args: {
        ...IMAGE_SCHEMA_DEFAULTS,
        width: 100,
        height: 100,
        src: '/favicon.ico',
        at: { x: 20, y: 20 },
        ...DOC_MARKING_DEFAULTS,
    },
};
export default meta;
const { basic, markings, text, rotation } = DEFAULT_STORIES;
export const Basic = basic;
export const Markings = markings;
export const WithText = text;
export const Rotation = {
    args: {
        ...rotation.args,
        at: { x: 20, y: 20 },
    },
};
