import { MatchStats } from '../models/MatchStats';
import { MatchType } from '../enums/MatchType';
import { Map } from '../enums/Map';
import { HLTVConfig } from '../config';
export declare type GetMatchesStatsParams = {
    startDate?: string;
    endDate?: string;
    matchType?: MatchType;
    maps?: Map[];
};
export declare const getMatchesStats: (config: HLTVConfig) => ({ startDate, endDate, matchType, maps }?: GetMatchesStatsParams) => Promise<MatchStats[]>;
