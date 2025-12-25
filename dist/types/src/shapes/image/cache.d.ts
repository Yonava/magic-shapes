type ImageCacheEntry = {
    image: HTMLImageElement | null;
    loading: boolean;
    error: boolean;
};
export type LoadImageOptions = {
    onLoad: () => void;
    onLoadError: () => void;
};
export declare const loadImage: (src: string, options: Partial<LoadImageOptions>) => Promise<ImageCacheEntry>;
export {};
//# sourceMappingURL=cache.d.ts.map