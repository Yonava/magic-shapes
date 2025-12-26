import type { StoryObj } from "@storybook/vue3-vite";
declare const meta: {
    title: string;
    component: any;
    args: {
        showAtMarker: boolean;
        showBoundingBoxMarker: boolean;
        showMeasuringStick: boolean;
        showCenterMarker: boolean;
        radiusX: number;
        radiusY: number;
        at: {
            x: number;
            y: number;
        };
        fillColor: "black";
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const RadiusX: Story;
export declare const RadiusY: Story;
export declare const Markings: Story;
export declare const WithText: Story;
export declare const WithStroke: Story;
