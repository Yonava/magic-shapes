import type { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: any;
    args: {
        showAtMarker: boolean;
        showBoundingBoxMarker: boolean;
        showMeasuringStick: boolean;
        showCenterMarker: boolean;
        width: number;
        height: number;
        at: {
            x: number;
            y: number;
        };
        rotation: 0;
        borderRadius: 0;
        fillColor: "black";
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const Markings: Story;
export declare const WithText: Story;
export declare const WithStroke: Story;
export declare const Rotation: Story;
//# sourceMappingURL=rect.stories.d.ts.map