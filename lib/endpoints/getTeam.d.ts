import { FullTeam } from '../models/FullTeam';
import { HLTVConfig } from '../config';
export declare const getTeam: (config: HLTVConfig) => ({ id }: {
    id: number;
}) => Promise<FullTeam>;
