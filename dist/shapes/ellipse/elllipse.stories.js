import { DEFAULT_STORIES, DOC_MARKING_DEFAULTS, createDocComponent, } from "../../docs";
import { ellipse } from ".";
import { ELLIPSE_SCHEMA_DEFAULTS } from "./defaults";
const Ellipse = createDocComponent(ellipse);
const meta = {
    title: "Shapes/Ellipse",
    component: Ellipse,
    args: {
        ...ELLIPSE_SCHEMA_DEFAULTS,
        radiusX: 50,
        radiusY: 50,
        at: { x: 60, y: 60 },
        ...DOC_MARKING_DEFAULTS,
    },
};
export default meta;
const { basic, markings, text, stroke } = DEFAULT_STORIES;
export const Basic = basic;
export const RadiusX = {
    args: {
        radiusX: 100,
        at: { x: 110, y: 60 },
    },
};
export const RadiusY = {
    args: {
        radiusY: 100,
        at: { x: 60, y: 110 },
    },
};
export const Markings = markings;
export const WithText = text;
export const WithStroke = stroke;
