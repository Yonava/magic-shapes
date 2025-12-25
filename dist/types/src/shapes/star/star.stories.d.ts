import type { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: any;
    args: {
        showAtMarker: boolean;
        showBoundingBoxMarker: boolean;
        showMeasuringStick: boolean;
        showCenterMarker: boolean;
        innerRadius: number;
        outerRadius: number;
        at: {
            x: number;
            y: number;
        };
        points: 5;
        rotation: 0;
        fillColor: "black";
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const Markings: Story;
export declare const Rotation: Story;
export declare const WithText: Story;
export declare const Points: Story;
//# sourceMappingURL=star.stories.d.ts.map