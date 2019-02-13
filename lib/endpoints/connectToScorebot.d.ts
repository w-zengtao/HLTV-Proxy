import { ScoreboardUpdate } from '../models/ScoreboardUpdate';
import { LogUpdate } from '../models/LogUpdate';
import { HLTVConfig } from '../config';
export declare type ConnectToScorebotParams = {
    id: number;
    onScoreboardUpdate?: (data: ScoreboardUpdate) => any;
    onLogUpdate?: (data: LogUpdate) => any;
    onFullLogUpdate?: (data: unknown) => any;
    onConnect?: () => any;
    onDisconnect?: () => any;
};
export declare const connectToScorebot: (config: HLTVConfig) => ({ id, onScoreboardUpdate, onLogUpdate, onFullLogUpdate, onConnect, onDisconnect }: ConnectToScorebotParams) => Promise<void>;
