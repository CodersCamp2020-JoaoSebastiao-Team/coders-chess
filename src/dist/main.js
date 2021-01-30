"use strict";
exports.__esModule = true;
var game_js_1 = require("./model/game.js");
var GameStart = new game_js_1.Game(200);
GameStart.gameInit();
var gameFiguresArray = GameStart.getGameFigures();
console.log(gameFiguresArray);
GameStart.refreshBoard(gameFiguresArray);
