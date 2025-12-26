export const TEXTAREA_DEFAULTS = {
    color: 'white',
    activeColor: 'white',
};
export const TEXT_BLOCK_DEFAULTS = {
    fontSize: 12,
    fontWeight: 'normal',
    color: 'black',
    fontFamily: 'Arial',
};
const getTextAreaWithDefaults = (textArea) => {
    const textBlockWithDefaults = {
        ...TEXT_BLOCK_DEFAULTS,
        ...textArea.textBlock,
    };
    const textAreaWithDefaults = {
        textBlock: textBlockWithDefaults,
        color: textArea.color ?? TEXTAREA_DEFAULTS.color,
        activeColor: textArea.activeColor ?? TEXTAREA_DEFAULTS.activeColor,
    };
    return textAreaWithDefaults;
};
export const resolveTextArea = (ta) => ta && {
    textArea: getTextAreaWithDefaults(ta),
};
