import { FullEvent } from '../models/FullEvent';
import { HLTVConfig } from '../config';
export declare const getEvent: (config: HLTVConfig) => ({ id }: {
    id: number;
}) => Promise<FullEvent>;
