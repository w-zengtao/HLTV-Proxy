import { FullMatchStats } from '../models/FullMatchStats';
import { HLTVConfig } from '../config';
export declare const getMatchStats: (config: HLTVConfig) => ({ id }: {
    id: number;
}) => Promise<FullMatchStats>;
