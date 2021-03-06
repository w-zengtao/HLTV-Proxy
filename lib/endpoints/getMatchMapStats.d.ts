import { FullMatchMapStats, PlayerPerformanceStats } from '../models/FullMatchMapStats';
import { HLTVConfig } from '../config';
export declare type PlayerPerformanceStatsMap = {
    [key: number]: PlayerPerformanceStats;
};
export declare const getMatchMapStats: (config: HLTVConfig) => ({ id }: {
    id: number;
}) => Promise<FullMatchMapStats>;
