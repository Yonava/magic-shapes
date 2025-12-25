import type { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: any;
    args: {
        showAtMarker: boolean;
        showBoundingBoxMarker: boolean;
        showMeasuringStick: boolean;
        showCenterMarker: boolean;
        at: {
            x: number;
            y: number;
        };
        spacing: number;
        upDistance: number;
        downDistance: number;
        rotation: number;
        lineWidth: number;
        fillColor: "black";
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const Markings: Story;
export declare const WithText: Story;
export declare const Rotation: Story;
export declare const ColorGradient: Story;
export declare const Spacing: Story;
export declare const LineWidth: Story;
//# sourceMappingURL=uturn.stories.d.ts.map