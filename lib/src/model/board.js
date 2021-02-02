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
var Contest = new Game(200);
Contest.gameInit();
var gameFiguresArray = Contest.getGameFigures();
Contest.refreshBoard(gameFiguresArray, boardFields);
console.log("Game has been initialized", "Game figures Array: ", gameFiguresArray);
var previousNumber = -1;
var previousFigure = gameFiguresArray[0];
var _loop_1 = function (i) {
    boardFields[i].addEventListener("click", function () {
        //console.log(i);
        var figureNumber = Contest.checkBoardForFigure(i);
        var figure = gameFiguresArray[figureNumber];
        if (figureNumber != -1) {
            //console.log(figure);
            Contest.figureClicked(gameFiguresArray[figureNumber], boardFields);
            previousNumber = figureNumber;
        }
        else {
            console.log("previous figure: ", previousFigure, "prvious number: ", previousNumber, "previous checked: ", previousFigure.checked);
            if ((previousNumber != -1) && previousFigure.checked) {
                //console.log("decoded field: ",decodeField(i));
                //console.log("previous figure: ", previousFigure);
                previousFigure.setFigurePosition(decodeField(i));
                previousFigure.checked = false;
                Contest.figureClicked(gameFiguresArray[previousNumber], boardFields);
            }
        }
        Contest.refreshBoard(gameFiguresArray, boardFields);
        previousNumber = figureNumber;
        previousFigure = gameFiguresArray[figureNumber];
    });
};
for (var i = 0; i < boardFields.length; i++) {
    _loop_1(i);
}
function decodeField(field) {
    return [field % 8, Math.floor(field / 8)];
}
