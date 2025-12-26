import { resolveTextArea } from "../text/defaults";
export const resolveDefaults = (defaults) => (schema) => {
    const { textArea, ...rest } = schema;
    const cleanedRest = Object.fromEntries(Object.entries(rest).filter(([key, value]) => !(key in defaults && value === undefined)));
    // @ts-expect-error this works... but the types are being weird
    const resolvedSchema = {
        ...defaults,
        ...resolveTextArea(textArea),
        ...cleanedRest,
    };
    return resolvedSchema;
};
