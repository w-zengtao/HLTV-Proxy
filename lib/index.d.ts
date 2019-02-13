import { HLTVConfig } from './config';
export declare class HLTVFactory {
    private readonly config;
    constructor(config: HLTVConfig);
    connectToScorebot: ({ id, onScoreboardUpdate, onLogUpdate, onFullLogUpdate, onConnect, onDisconnect }: import("./endpoints/connectToScorebot").ConnectToScorebotParams) => Promise<void>;
    getMatch: ({ id }: {
        id: number;
    }) => Promise<import("./models/FullMatch").FullMatch>;
    getMatches: () => Promise<(import("./models/UpcomingMatch").UpcomingMatch | import("./models/LiveMatch").LiveMatch)[]>;
    getMatchesStats: ({ startDate, endDate, matchType, maps }?: import("./endpoints/getMatchesStats").GetMatchesStatsParams) => Promise<import("./models/MatchStats").MatchStats[]>;
    getMatchStats: ({ id }: {
        id: number;
    }) => Promise<import("./models/FullMatchStats").FullMatchStats>;
    getMatchMapStats: ({ id }: {
        id: number;
    }) => Promise<import("./models/FullMatchMapStats").FullMatchMapStats>;
    getRecentThreads: () => Promise<import("./models/Thread").Thread[]>;
    getResults: ({ pages }?: {
        pages?: number | undefined;
    }) => Promise<import("./models/MatchResult").MatchResult[]>;
    getStreams: ({ loadLinks }?: {
        loadLinks?: boolean | undefined;
    }) => Promise<import("./models/FullStream").FullStream[]>;
    getTeamRanking: ({ year, month, day, country }?: {
        year?: string | undefined;
        month?: string | undefined;
        day?: string | undefined;
        country?: string | undefined;
    }) => Promise<import("./models/TeamRanking").TeamRanking[]>;
    getTeam: ({ id }: {
        id: number;
    }) => Promise<import("./models/FullTeam").FullTeam>;
    getTeamStats: ({ id }: {
        id: number;
    }) => Promise<import("./models/FullTeamStats").FullTeamStats>;
    getPlayer: ({ id }: {
        id: number;
    }) => Promise<import("./models/FullPlayer").FullPlayer>;
    getEvent: ({ id }: {
        id: number;
    }) => Promise<import("./models/FullEvent").FullEvent>;
    getPlayerStats: ({ id, startDate, endDate }: {
        id: number;
        startDate: string;
        endDate: string;
    }) => Promise<import("./models/FullPlayerStats").FullPlayerStats>;
    getPlayerRanking: ({ startDate, endDate }: {
        startDate: string;
        endDate: string;
    }) => Promise<import("./models/PlayerRanking").PlayerRanking[]>;
    createInstance(config: HLTVConfig): HLTVFactory;
}
declare const hltvInstance: HLTVFactory;
export default hltvInstance;
export { hltvInstance as HLTV };
