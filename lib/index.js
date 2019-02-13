"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var connectToScorebot_1 = require("./endpoints/connectToScorebot");
var getMatch_1 = require("./endpoints/getMatch");
var getMatches_1 = require("./endpoints/getMatches");
var getMatchesStats_1 = require("./endpoints/getMatchesStats");
var getMatchMapStats_1 = require("./endpoints/getMatchMapStats");
var getMatchStats_1 = require("./endpoints/getMatchStats");
var getRecentThreads_1 = require("./endpoints/getRecentThreads");
var getResults_1 = require("./endpoints/getResults");
var getStreams_1 = require("./endpoints/getStreams");
var getTeamRanking_1 = require("./endpoints/getTeamRanking");
var getTeam_1 = require("./endpoints/getTeam");
var getTeamStats_1 = require("./endpoints/getTeamStats");
var getPlayer_1 = require("./endpoints/getPlayer");
var getEvent_1 = require("./endpoints/getEvent");
var getPlayerStats_1 = require("./endpoints/getPlayerStats");
var getPlayerRanking_1 = require("./endpoints/getPlayerRanking");
var HLTVFactory = (function () {
    function HLTVFactory(config) {
        this.config = config;
        this.connectToScorebot = connectToScorebot_1.connectToScorebot(this.config);
        this.getMatch = getMatch_1.getMatch(this.config);
        this.getMatches = getMatches_1.getMatches(this.config);
        this.getMatchesStats = getMatchesStats_1.getMatchesStats(this.config);
        this.getMatchStats = getMatchStats_1.getMatchStats(this.config);
        this.getMatchMapStats = getMatchMapStats_1.getMatchMapStats(this.config);
        this.getRecentThreads = getRecentThreads_1.getRecentThreads(this.config);
        this.getResults = getResults_1.getResults(this.config);
        this.getStreams = getStreams_1.getStreams(this.config);
        this.getTeamRanking = getTeamRanking_1.getTeamRanking(this.config);
        this.getTeam = getTeam_1.getTeam(this.config);
        this.getTeamStats = getTeamStats_1.getTeamStats(this.config);
        this.getPlayer = getPlayer_1.getPlayer(this.config);
        this.getEvent = getEvent_1.getEvent(this.config);
        this.getPlayerStats = getPlayerStats_1.getPlayerStats(this.config);
        this.getPlayerRanking = getPlayerRanking_1.getPlayerRanking(this.config);
    }
    HLTVFactory.prototype.createInstance = function (config) {
        return new HLTVFactory(config);
    };
    return HLTVFactory;
}());
exports.HLTVFactory = HLTVFactory;
var hltvInstance = new HLTVFactory(config_1.defaultConfig);
exports.HLTV = hltvInstance;
exports.default = hltvInstance;
