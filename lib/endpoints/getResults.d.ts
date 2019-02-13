import { MatchResult } from '../models/MatchResult';
import { HLTVConfig } from '../config';
export declare const getResults: (config: HLTVConfig) => ({ pages }?: {
    pages?: number | undefined;
}) => Promise<MatchResult[]>;
