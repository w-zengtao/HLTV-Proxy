import { FullPlayer } from '../models/FullPlayer';
import { HLTVConfig } from '../config';
export declare const getPlayer: (config: HLTVConfig) => ({ id }: {
    id: number;
}) => Promise<FullPlayer>;
