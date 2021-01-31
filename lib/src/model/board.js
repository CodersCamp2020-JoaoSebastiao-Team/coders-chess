import { Game } from './game.js';
var board = document.querySelector(".board");
var boardLetters = document.querySelector(".letters");
var boardNumbers = document.querySelector(".numbers");
var letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
var index = 0;
var black = false;
var num = 8;
for (var i = 0; i < 8; i++) {
    var letter = document.createElement("li");
    letter.textContent = letters[i];
    boardLetters.appendChild(letter);
    var numbers = document.createElement("li");
    numbers.textContent = String(num);
    num--;
    boardNumbers.appendChild(numbers);
}
for (var i = 1; i <= 64; i++) {
    var square = document.createElement("div");
    if (black) {
        square.classList.add("square");
        square.classList.add("black");
        index++;
        black = !black;
    }
    else {
        square.classList.add("square");
        square.classList.add("white");
        index++;
        black = !black;
    }
    board.appendChild(square);
    if (index === 8) {
        black = !black;
        index = 0;
    }
    var figureImage = document.createElement("div");
    square.appendChild(figureImage);
    figureImage.classList.add("figureImg");
}
// export class Board{
// }
var boardFields = document.querySelectorAll(".square");
var GameStart = new Game(200);
GameStart.gameInit();
var gameFiguresArray = GameStart.getGameFigures();
GameStart.refreshBoard(gameFiguresArray, boardFields);
console.log("Game has been initialized");
