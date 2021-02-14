import { Game } from './game.js';
import { saveMoveToLocalStorage, seeLastMovesEventListener } from "./stats";
import { getBeatFigures } from "./time";
import { undoMove } from "./stats";
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
var _loop_1 = function (i) {
    boardFields[i].addEventListener("click", function () {
        if (!localStorage.getItem('koniec')) {
            var figureNumber = Contest.checkBoardForFigure(i);
            var figure = gameFiguresArray[figureNumber];
            var boardFields_1 = document.querySelectorAll(".square");
            if (figureNumber != -1) {
                if (boardFields_1[i].classList.contains('figure-capture')) {
                    if (figure.getColor() != PlayerTour) {
                        //Capture figure!
                        gameFiguresArray.splice(figureNumber, 1);
                        previousFigure.setFigurePosition(decodeField(i));
                        previousFigure.checked = false;
                        Contest.figureClicked(gameFiguresArray[previousNumber], boardFields_1);
                        console.log("Congratulate! " + figure.getColor() + " " + figure.getFigure() + " was captured!");
                        //Next player tour
                        PlayerTour = PlayerTour == ChessPlayerTour.White ? ChessPlayerTour.Black : ChessPlayerTour.White;
                        console.log("Now is " + PlayerTour + " player tour");
                        saveMoveToLocalStorage(figure, previousFigure, gameFiguresArray);
                        updateLocalStarage();
                        seeLastMovesEventListener(Contest, boardFields_1);
                        getBeatFigures();
                    }
                }
                else {
                    if (figure.getColor() == PlayerTour) {
                        Contest.figureClicked(gameFiguresArray[figureNumber], boardFields_1);
                        previousNumber = figureNumber;
                        localStorage.setItem("figure", JSON.stringify(figure));
                    }
                }
            }
            else {
                if ((previousNumber != -1) && previousFigure.checked) {
                    if (boardFields_1[i].classList.contains('figure-checked')) {
                        //Movde figure to correct position
                        previousFigure.setFigurePosition(decodeField(i));
                        previousFigure.checked = false;
                        Contest.figureClicked(gameFiguresArray[previousNumber], boardFields_1);
                        //Next player tour
                        PlayerTour = PlayerTour == ChessPlayerTour.White ? ChessPlayerTour.Black : ChessPlayerTour.White;
                        console.log("Now is " + PlayerTour + " player tour");
                        saveMoveToLocalStorage(null, previousFigure, gameFiguresArray);
                        updateLocalStarage();
                        seeLastMovesEventListener(Contest, boardFields_1);
                    }
                }
            }
            Contest.refreshBoard(gameFiguresArray, boardFields_1);
            if (boardFields_1[i].classList.contains('figure-checked') || boardFields_1[i].classList.contains('figure-capture')) {
                previousNumber = figureNumber;
                previousFigure = gameFiguresArray[figureNumber];
            }
        }
    });
};
for (var i = 0; i < boardFields.length; i++) {
    _loop_1(i);
}
var cancelButton = window.document.getElementById("cancel-move");
cancelButton.addEventListener('click', function (event) {
    gameFiguresArray = undoMove(Contest);
    Contest.setGameFigures(gameFiguresArray);
    Contest.refreshBoard(Contest.getGameFigures(), boardFields);
    if (JSON.parse(localStorage.getItem("movesNotation"))[0] !== undefined) {
        PlayerTour = PlayerTour == ChessPlayerTour.White ? ChessPlayerTour.Black : ChessPlayerTour.White;
    }
    else {
        PlayerTour = ChessPlayerTour.White;
    }
});
function decodeField(field) {
    return [field % 8, Math.floor(field / 8)];
}
function updateLocalStarage() {
    if (PlayerTour == ChessPlayerTour.White) {
        localStorage.setItem("color", "white");
    }
    else {
        localStorage.setItem("color", "black");
    }
}
