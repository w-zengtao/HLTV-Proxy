import { PlayerRanking } from '../models/PlayerRanking';
import { HLTVConfig } from '../config';
export declare const getPlayerRanking: (config: HLTVConfig) => ({ startDate, endDate }: {
    startDate: string;
    endDate: string;
}) => Promise<PlayerRanking[]>;
