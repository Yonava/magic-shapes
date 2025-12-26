import { defineComponent } from "vue";
import type { ShapeFactory } from "./types";
export type DocMarkingOptions = {
    showAtMarker: boolean;
    showBoundingBoxMarker: boolean;
    showMeasuringStick: boolean;
    showCenterMarker: boolean;
};
export declare const DOC_MARKING_DEFAULTS: DocMarkingOptions;
export declare const DEFAULT_STORIES: {
    readonly basic: {};
    readonly markings: {
        readonly args: {
            readonly showAtMarker: true;
            readonly showBoundingBoxMarker: true;
            readonly showMeasuringStick: true;
            readonly showCenterMarker: false;
        };
    };
    readonly text: {
        readonly args: {
            readonly textArea: {
                readonly textBlock: {
                    readonly content: "Hi!";
                    readonly color: "white";
                };
                readonly color: "blue";
            };
        };
    };
    readonly stroke: {
        readonly args: {
            readonly stroke: {
                readonly color: "blue";
                readonly lineWidth: 10;
            };
        };
    };
    readonly rotation: {
        readonly args: {
            readonly rotation: number;
        };
    };
    readonly colorGradient: {
        readonly args: {
            readonly fillGradient: readonly [{
                readonly color: "red";
                readonly offset: 0;
            }, {
                readonly color: "red";
                readonly offset: 0.95;
            }, {
                readonly color: "blue";
                readonly offset: 0.96;
            }, {
                readonly color: "blue";
                readonly offset: 1;
            }];
        };
    };
};
export declare const createDocComponent: <T extends Record<string, unknown>>(factory: ShapeFactory<T>) => ReturnType<typeof defineComponent>;
