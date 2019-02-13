import { FullPlayerStats } from '../models/FullPlayerStats';
import { HLTVConfig } from '../config';
export declare const getPlayerStats: (config: HLTVConfig) => ({ id, startDate, endDate }: {
    id: number;
    startDate: string;
    endDate: string;
}) => Promise<FullPlayerStats>;
