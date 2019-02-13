export interface HLTVConfig {
    hltvUrl?: string;
    hltvStaticUrl?: string;
    loadPage?: (url: string) => Promise<string>;
}
export declare const defaultConfig: {
    hltvUrl: string;
    hltvStaticUrl: string;
    loadPage: (url: string) => Promise<string>;
};
