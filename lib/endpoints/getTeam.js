"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var mappers_1 = require("../utils/mappers");
var parsing_1 = require("../utils/parsing");
exports.getTeam = function (config) { return function (_a) {
    var id = _a.id;
    return __awaiter(_this, void 0, void 0, function () {
        var t$, e$, name, logo, coverImage, location, facebook, twitter, rank, arePlayerPicturesOfficial, playerSelector, playerImageSelector, getPlayerId, players, recentResults, rankingDevelopment, rankings, bigAchievements, mapStatisticsGraphElement, mapStatistics, events;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, mappers_1.fetchPage(config.hltvUrl + "/team/" + id + "/-", config.loadPage)];
                case 1:
                    t$ = _b.sent();
                    return [4, mappers_1.fetchPage(config.hltvUrl + "/events?team=" + id, config.loadPage)];
                case 2:
                    e$ = _b.sent();
                    name = t$('.profile-team-name').text();
                    logo = config.hltvStaticUrl + "/images/team/logo/" + id;
                    coverImage = t$('.coverImage').attr('data-bg-image');
                    location = t$('.team-country .flag').attr('alt');
                    facebook = t$('.facebook')
                        .parent()
                        .attr('href');
                    twitter = t$('.twitter')
                        .parent()
                        .attr('href');
                    rank = Number(t$('.profile-team-stat .right')
                        .first()
                        .text()
                        .replace('#', '')) || undefined;
                    arePlayerPicturesOfficial = mappers_1.toArray(t$('.overlayImageFrame')).length > 0;
                    playerSelector = arePlayerPicturesOfficial
                        ? '.overlayImageFrame'
                        : '.overlayImageFrame-square';
                    playerImageSelector = arePlayerPicturesOfficial ? '.bodyshot-team-img' : '.profileImage';
                    getPlayerId = function (el) {
                        return arePlayerPicturesOfficial
                            ? Number(parsing_1.popSlashSource(el).split('.')[0])
                            : Number(el
                                .attr('src')
                                .split('/')
                                .slice(-2, -1));
                    };
                    players = mappers_1.toArray(t$(playerSelector))
                        .filter(parsing_1.hasChild('.playerFlagName .text-ellipsis'))
                        .map(function (playerEl) { return ({
                        name: playerEl.find('.playerFlagName .text-ellipsis').text(),
                        id: getPlayerId(playerEl.find(playerImageSelector))
                    }); });
                    recentResults = mappers_1.toArray(t$('.results-holder .a-reset')).map(function (matchEl) { return ({
                        matchID: matchEl.attr('href') ? Number(matchEl.attr('href').split('/')[2]) : undefined,
                        enemyTeam: {
                            id: Number(parsing_1.popSlashSource(t$(matchEl.find('.team-logo').get(1)))),
                            name: t$(matchEl.find('.team').get(1)).text()
                        },
                        result: matchEl.find('.result-score').text(),
                        event: {
                            id: Number(parsing_1.popSlashSource(matchEl.find('.event-logo')).split('.')[0]),
                            name: matchEl.find('.event-name').text()
                        }
                    }); });
                    try {
                        rankings = JSON.parse(t$('.graph').attr('data-fusionchart-config'));
                        rankingDevelopment = rankings.dataSource.dataset[0].data.map(function (x) { return x.value; }).map(Number);
                    }
                    catch (_c) {
                        rankingDevelopment = [];
                    }
                    bigAchievements = mappers_1.toArray(t$('.achievement')).map(function (achEl) { return ({
                        place: t$(achEl.contents().get(1))
                            .text()
                            .split(' at')[0],
                        event: {
                            name: t$(achEl.contents().get(2)).text(),
                            id: Number(t$(achEl.contents().get(2))
                                .attr('href')
                                .split('/')[2])
                        }
                    }); });
                    mapStatisticsGraphElement = t$(t$('.graph').get(1));
                    mapStatistics = mapStatisticsGraphElement.length !== 0
                        ? mappers_1.getMapsStatistics(mapStatisticsGraphElement.attr('data-fusionchart-config'))
                        : undefined;
                    events = mappers_1.toArray(e$('a.big-event'))
                        .map(function (eventEl) { return ({
                        name: eventEl.find('.big-event-name').text(),
                        id: Number(eventEl.attr('href').split('/')[2])
                    }); })
                        .concat(mappers_1.toArray(e$('a.small-event')).map(function (eventEl) { return ({
                        name: eventEl.find('.event-col .text-ellipsis').text(),
                        id: Number(eventEl.attr('href').split('/')[2])
                    }); }))
                        .concat(mappers_1.toArray(e$('.tab-content:not(.hidden) a.ongoing-event')).map(function (eventEl) { return ({
                        name: eventEl.find('.event-name-small .text-ellipsis').text(),
                        id: Number(eventEl.attr('href').split('/')[2])
                    }); }));
                    return [2, {
                            name: name,
                            logo: logo,
                            coverImage: coverImage,
                            location: location,
                            facebook: facebook,
                            twitter: twitter,
                            rank: rank,
                            players: players,
                            recentResults: recentResults,
                            rankingDevelopment: rankingDevelopment,
                            bigAchievements: bigAchievements,
                            mapStatistics: mapStatistics,
                            events: events
                        }];
            }
        });
    });
}; };
