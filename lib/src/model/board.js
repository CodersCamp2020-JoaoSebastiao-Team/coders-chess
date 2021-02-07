import { Game } from './game.js';
import { saveMoveToLocalStorage } from "./stats";
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
export var ChessPlayerTour;
(function (ChessPlayerTour) {
    ChessPlayerTour["Black"] = "black";
    ChessPlayerTour["White"] = "white";
})(ChessPlayerTour || (ChessPlayerTour = {}));
var boardFields = document.querySelectorAll(".square");
var Contest = new Game(200);
Contest.gameInit();
var gameFiguresArray = Contest.getGameFigures();
Contest.refreshBoard(gameFiguresArray, boardFields);
var PlayerTour = ChessPlayerTour.White;
console.log("Player white begin.");
var previousNumber = -1;
var previousFigure = gameFiguresArray[0];
localStorage.clear();
var _loop_1 = function (i) {
    boardFields[i].addEventListener("click", function () {
        var figureNumber = Contest.checkBoardForFigure(i);
        var figure = gameFiguresArray[figureNumber];
        var boardFields = document.querySelectorAll(".square");
        if (figureNumber != -1) {
            if (boardFields[i].classList.contains('figure-capture')) {
                if (figure.getColor() != PlayerTour) {
                    //Capture figure!
                    gameFiguresArray.splice(figureNumber, 1);
                    previousFigure.setFigurePosition(decodeField(i));
                    previousFigure.checked = false;
                    Contest.figureClicked(gameFiguresArray[previousNumber], boardFields);
                    //console.log(`Congratulate! ${figure.getColor()} ${figure.getFigure()} was captured!`);
                    //Next player tour
                    PlayerTour = PlayerTour == ChessPlayerTour.White ? ChessPlayerTour.Black : ChessPlayerTour.White;
                    saveMoveToLocalStorage(figure, previousFigure);
                    //console.log(`Now is ${PlayerTour} player tour`);
                }
            }
            else {
                if (figure.getColor() == PlayerTour) {
                    Contest.figureClicked(gameFiguresArray[figureNumber], boardFields);
                    previousNumber = figureNumber;
                    localStorage.setItem("figure", JSON.stringify(figure));
                }
            }
        }
        else {
            if ((previousNumber != -1) && previousFigure.checked) {
                if (boardFields[i].classList.contains('figure-checked')) {
                    //Move figure to correct position
                    previousFigure.setFigurePosition(decodeField(i));
                    previousFigure.checked = false;
                    Contest.figureClicked(gameFiguresArray[previousNumber], boardFields);
                    //Next player tour
                    PlayerTour = PlayerTour == ChessPlayerTour.White ? ChessPlayerTour.Black : ChessPlayerTour.White;
                    saveMoveToLocalStorage(null, previousFigure);
                    console.log("Now is " + PlayerTour + " player tour");
                }
            }
        }
        Contest.refreshBoard(gameFiguresArray, boardFields);
        if (boardFields[i].classList.contains('figure-checked') || boardFields[i].classList.contains('figure-capture')) {
            previousNumber = figureNumber;
            previousFigure = gameFiguresArray[figureNumber];
        }
    });
};
for (var i = 0; i < boardFields.length; i++) {
    _loop_1(i);
}
function decodeField(field) {
    return [field % 8, Math.floor(field / 8)];
}
