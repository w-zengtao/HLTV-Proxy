import { FullStream } from '../models/FullStream';
import { HLTVConfig } from '../config';
export declare const getStreams: (config: HLTVConfig) => ({ loadLinks }?: {
    loadLinks?: boolean | undefined;
}) => Promise<FullStream[]>;
