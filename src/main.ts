
 import {Game} from './model/game.js';

 const GameStart = new Game(200);
 GameStart.gameInit();
 const gameFiguresArray = GameStart.getGameFigures();
 console.log(gameFiguresArray);
 GameStart.refreshBoard(gameFiguresArray);
