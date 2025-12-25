import type { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: any;
    args: {
        showAtMarker: boolean;
        showBoundingBoxMarker: boolean;
        showMeasuringStick: boolean;
        showCenterMarker: boolean;
        size: number;
        at: {
            x: number;
            y: number;
        };
        borderRadius: 0;
        lineWidth: 10;
        fillColor: "black";
        rotation: 0;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const Markings: Story;
export declare const WithText: Story;
export declare const Rotation: Story;
export declare const LineWidth: Story;
//# sourceMappingURL=cross.stories.d.ts.map