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
var parsing_1 = require("../utils/parsing");
var mappers_1 = require("../utils/mappers");
exports.getMatch = function (config) { return function (_a) {
    var id = _a.id;
    return __awaiter(_this, void 0, void 0, function () {
        var $, title, date, format, additionalInfo, live, hasScorebot, teamEls, team1, team2, winnerTeam, vetoes, event, maps, players, streams, demos, highlightedPlayerLink, highlightedPlayer, headToHead, highlights;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, mappers_1.fetchPage(config.hltvUrl + "/matches/" + id + "/-", config.loadPage)];
                case 1:
                    $ = _b.sent();
                    title = $('.timeAndEvent .text')
                        .text()
                        .trim() || undefined;
                    date = Number($('.timeAndEvent .date').attr('data-unix'));
                    format = $('.preformatted-text')
                        .text()
                        .split('\n')[0];
                    additionalInfo = $('.preformatted-text')
                        .text()
                        .split('\n')
                        .slice(1)
                        .join(' ')
                        .trim();
                    live = $('.countdown').text() === 'LIVE';
                    hasScorebot = $('#scoreboardElement').length !== 0;
                    teamEls = $('div.teamName');
                    team1 = teamEls.first().text()
                        ? {
                            name: teamEls.eq(0).text(),
                            id: Number(parsing_1.popSlashSource(teamEls.first().prev()))
                        }
                        : undefined;
                    team2 = teamEls.last().text()
                        ? {
                            name: teamEls.eq(1).text(),
                            id: Number(parsing_1.popSlashSource(teamEls.last().prev()))
                        }
                        : undefined;
                    if ($('.team1-gradient')
                        .children()
                        .last()
                        .hasClass('won')) {
                        winnerTeam = team1;
                    }
                    if ($('.team2-gradient')
                        .children()
                        .last()
                        .hasClass('won')) {
                        winnerTeam = team2;
                    }
                    if (team1 && team2) {
                        vetoes = mappers_1.toArray($('.veto-box')
                            .last()
                            .find('.padding > div'))
                            .slice(0, -1)
                            .map(function (el) { return mappers_1.mapVetoElementToModel(el, team1, team2); });
                    }
                    event = {
                        name: $('.timeAndEvent .event').text(),
                        id: Number($('.timeAndEvent .event')
                            .children()
                            .first()
                            .attr('href')
                            .split('/')[2])
                    };
                    maps = mappers_1.toArray($('.mapholder')).map(function (mapEl) { return ({
                        name: mappers_1.getMapSlug(mapEl.find('.mapname').text()),
                        result: mapEl.find('.results span').text(),
                        statsId: mapEl.find('.results-stats').length
                            ? Number(mapEl
                                .find('.results-stats')
                                .attr('href')
                                .split('/')[4])
                            : undefined
                    }); });
                    if (team1 && team2) {
                        players = {
                            team1: mappers_1.toArray($('div.players')
                                .first()
                                .find('tr')
                                .last()
                                .find('.flagAlign')).map(mappers_1.getMatchPlayer),
                            team2: mappers_1.toArray($('div.players')
                                .last()
                                .find('tr')
                                .last()
                                .find('.flagAlign')).map(mappers_1.getMatchPlayer)
                        };
                    }
                    streams = mappers_1.toArray($('.stream-box-embed'))
                        .filter(parsing_1.hasChild('.flagAlign'))
                        .map(function (streamEl) { return ({
                        name: streamEl.find('.flagAlign').text(),
                        link: streamEl.attr('data-stream-embed'),
                        viewers: Number(streamEl.find('.viewers').text())
                    }); });
                    if ($('.stream-box.hltv-live').length !== 0) {
                        streams.push({ name: 'HLTV Live', link: $('.stream-box.hltv-live a').attr('href'), viewers: 0 });
                    }
                    if ($('.stream-box.gotv').length !== 0) {
                        streams.push({
                            name: 'GOTV',
                            link: $('.stream-box.gotv')
                                .text()
                                .replace('GOTV: connect', '')
                                .trim(),
                            viewers: 0
                        });
                    }
                    demos = mappers_1.toArray($('div[class="stream-box"]:not(:has(.stream-box-embed))')).map(function (demoEl) {
                        var gotvEl = demoEl.find('.left-right-padding');
                        if (gotvEl.length !== 0) {
                            return { name: gotvEl.text(), link: gotvEl.attr('href') };
                        }
                        return { name: demoEl.find('.spoiler').text(), link: demoEl.attr('data-stream-embed') };
                    });
                    highlightedPlayerLink = $('.highlighted-player')
                        .find('.flag')
                        .next()
                        .attr('href');
                    highlightedPlayer = highlightedPlayerLink
                        ? {
                            name: highlightedPlayerLink.split('/').pop(),
                            id: Number(highlightedPlayerLink.split('/')[2])
                        }
                        : undefined;
                    if (team1 && team2) {
                        headToHead = mappers_1.toArray($('.head-to-head-listing tr')).map(function (matchEl) {
                            var date = Number(matchEl.find('.date a span').attr('data-unix'));
                            var map = matchEl.find('.dynamic-map-name-short').text();
                            var isDraw = matchEl.find('.winner').length === 0;
                            var winner;
                            if (!isDraw) {
                                winner = {
                                    name: matchEl
                                        .find('.winner .flag')
                                        .next()
                                        .text(),
                                    id: Number(matchEl
                                        .find('.winner .flag')
                                        .next()
                                        .attr('href')
                                        .split('/')[2])
                                };
                            }
                            var event = {
                                name: matchEl.find('.event a').text(),
                                id: Number(matchEl
                                    .find('.event a')
                                    .attr('href')
                                    .split('/')[2])
                            };
                            var result = matchEl.find('.result').text();
                            return { date: date, map: map, winner: winner, event: event, result: result };
                        });
                    }
                    if (team1 && team2) {
                        highlights = mappers_1.toArray($('.highlight')).map(function (highlightEl) { return ({
                            link: highlightEl.attr('data-highlight-embed'),
                            title: highlightEl.text()
                        }); });
                    }
                    return [2, {
                            team1: team1,
                            team2: team2,
                            winnerTeam: winnerTeam,
                            date: date,
                            format: format,
                            additionalInfo: additionalInfo,
                            event: event,
                            maps: maps,
                            players: players,
                            streams: streams,
                            live: live,
                            title: title,
                            hasScorebot: hasScorebot,
                            highlightedPlayer: highlightedPlayer,
                            headToHead: headToHead,
                            vetoes: vetoes,
                            highlights: highlights,
                            demos: demos
                        }];
            }
        });
    });
}; };
