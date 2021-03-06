import { Thread } from '../models/Thread';
import { HLTVConfig } from '../config';
export declare const getRecentThreads: (config: HLTVConfig) => () => Promise<Thread[]>;
