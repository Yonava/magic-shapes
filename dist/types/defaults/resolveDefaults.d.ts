import type { Prettify } from 'ts-essentials';
import type { TextArea } from '../types/schema';
export declare const resolveDefaults: <TSchema extends TextArea, TDefaults extends Record<string, unknown>>(defaults: TDefaults) => (schema: TSchema) => Prettify<Omit<Prettify<Omit<TSchema, Extract<keyof TDefaults, keyof TSchema>> & Required<Pick<TSchema, Extract<keyof TDefaults, keyof TSchema>>>>, "textArea"> & {
    textArea: {
        textBlock: {
            content: string;
            fontSize: number;
            fontWeight: import("../text/types").FontWeight;
            color: string;
            fontFamily: string;
        };
        color: string;
        activeColor: string;
    };
}>;
//# sourceMappingURL=resolveDefaults.d.ts.map