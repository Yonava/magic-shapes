import type { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: any;
    args: {
        showAtMarker: boolean;
        showBoundingBoxMarker: boolean;
        showMeasuringStick: boolean;
        showCenterMarker: boolean;
        pointA: {
            x: number;
            y: number;
        };
        pointB: {
            x: number;
            y: number;
        };
        pointC: {
            x: number;
            y: number;
        };
        fillColor: "black";
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const Markings: Story;
export declare const WithText: Story;
export declare const WithStroke: Story;
export declare const ColorGradient: Story;
//# sourceMappingURL=triangle.stories.d.ts.map