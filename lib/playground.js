"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
index_1.default.connectToScorebot({ id: 2330886, onScoreboardUpdate: function (data) {
        console.log('scoreboard update!');
        console.dir(data, { depth: null });
    }, onLogUpdate: function (data) {
        console.log('log update!');
        console.dir(data, { depth: null });
    }, onFullLogUpdate: function (data) {
        console.log('fullLog update!');
        console.dir(data, { depth: null });
    } });
