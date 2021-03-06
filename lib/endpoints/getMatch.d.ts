import { FullMatch } from '../models/FullMatch';
import { HLTVConfig } from '../config';
export declare const getMatch: (config: HLTVConfig) => ({ id }: {
    id: number;
}) => Promise<FullMatch>;
