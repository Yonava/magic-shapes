import type { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: any;
    args: {
        showAtMarker: boolean;
        showBoundingBoxMarker: boolean;
        showMeasuringStick: boolean;
        showCenterMarker: boolean;
        start: {
            x: number;
            y: number;
        };
        end: {
            x: number;
            y: number;
        };
        textOffsetFromCenter: 0;
        fillColor: "black";
        lineWidth: 10;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const Markings: Story;
export declare const WithText: Story;
export declare const ColorGradient: Story;
export declare const TextOffset: Story;
export declare const Dashed: Story;
export declare const Width: Story;
