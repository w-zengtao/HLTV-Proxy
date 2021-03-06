import { UpcomingMatch } from '../models/UpcomingMatch';
import { LiveMatch } from '../models/LiveMatch';
import { HLTVConfig } from '../config';
export declare const getMatches: (config: HLTVConfig) => () => Promise<(UpcomingMatch | LiveMatch)[]>;
