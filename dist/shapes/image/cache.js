const imageCache = new Map();
export const loadImage = async (src, options) => new Promise((res) => {
    if (imageCache.has(src))
        res(imageCache.get(src));
    const cacheEntry = {
        image: null,
        loading: true,
        error: false,
    };
    imageCache.set(src, cacheEntry);
    const img = new Image();
    img.onload = () => {
        cacheEntry.image = img;
        cacheEntry.loading = false;
        options.onLoad?.();
        res(cacheEntry);
    };
    img.onerror = () => {
        cacheEntry.loading = false;
        cacheEntry.error = true;
        options.onLoadError?.();
        res(cacheEntry);
    };
    img.src = src;
});
