import { TeamRanking } from '../models/TeamRanking';
import { HLTVConfig } from '../config';
export declare const getTeamRanking: (config: HLTVConfig) => ({ year, month, day, country }?: {
    year?: string | undefined;
    month?: string | undefined;
    day?: string | undefined;
    country?: string | undefined;
}) => Promise<TeamRanking[]>;
