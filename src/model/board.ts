import { Game } from './game.js';
import {saveMoveToLocalStorage, seeLastMovesEventListener} from "./stats"
import { getBeatFigures } from "./time";
import { undoMove } from "./stats"
const board = <HTMLElement>document.querySelector(".board");
const boardLetters = <HTMLElement>document.querySelector(".letters");
const boardNumbers = <HTMLElement>document.querySelector(".numbers");
let letters: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"];
let index: number = 0;
let black: boolean = false;
let num: number = 8;


for (let i = 0; i < 8; i++) {
    let letter = document.createElement("li");
    letter.textContent = letters[i];
    boardLetters.appendChild(letter);
    let numbers = document.createElement("li");
    numbers.textContent = String(num);
    num--;
    boardNumbers.appendChild(numbers);

}

for (let i = 1; i <= 64; i++) {
    const square = document.createElement("div");
    if (black) {
        square.classList.add("square");
        square.classList.add("black");
        index++;
        black = !black;
    } else {
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
    const figureImage = document.createElement("div");
    square.appendChild(figureImage);
    figureImage.classList.add("figureImg");
}

export enum ChessPlayerTour {
    Black = "black",
    White = "white",
}

const boardFields = document.querySelectorAll(".square");
const Contest = new Game(200);
Contest.gameInit();
let gameFiguresArray = Contest.getGameFigures();
Contest.refreshBoard(gameFiguresArray, boardFields);
let check: [boolean, string];

let PlayerTour: ChessPlayerTour = ChessPlayerTour.White;
let previousNumber: number = -1;
let previousFigure = gameFiguresArray[0];

for (let i = 0; i < boardFields.length; i++) {

    boardFields[i].addEventListener("click", () => {
        if (!localStorage.getItem('koniec') && !localStorage.getItem('checkmate')) {
            const figureNumber = Contest.checkBoardForFigure(i);
            const figure = gameFiguresArray[figureNumber];
            const boardFields = document.querySelectorAll(".square");

            if (figureNumber != -1) {
                if (boardFields[i].classList.contains('figure-capture')) {
                    if (figure.getColor() != PlayerTour) {
                        //Capture figure!
                        gameFiguresArray.splice(figureNumber, 1);
                        previousFigure.setFigurePosition(decodeField(i));
                        previousFigure.checked = false;
                        Contest.figureClicked(gameFiguresArray[previousNumber], boardFields);

                        //Next player tour
                        console.log(PlayerTour);
                        PlayerTour = PlayerTour == ChessPlayerTour.White ? ChessPlayerTour.Black : ChessPlayerTour.White;
                        checkChecks();
                        saveMoveToLocalStorage(figure, previousFigure, gameFiguresArray)
                        updateLocalStarage();
                        seeLastMovesEventListener(Contest,boardFields)
                        // getBeatFigures();
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
                        //Movde figure to correct position
                        if (Contest.lookingForCheck()[0] && PlayerTour == Contest.lookingForCheck()[1]) {
                            let previousFigurePosition = previousFigure.getFigurePosition();
                            previousFigure.setFigurePosition(decodeField(i));
                            let checkIfStillCheck = Contest.lookingForCheck();
                            if (checkIfStillCheck[0] && PlayerTour == checkIfStillCheck[1]) {
                                previousFigure.setFigurePosition(previousFigurePosition);
                                boardFields[i].classList.add('figure-capture');
                                previousFigure.checked = false;
                                setTimeout(() => {
                                    boardFields[i].classList.remove('figure-capture');
                                    for (let m = 0; m < boardFields.length; m++) {
                                        boardFields[m].classList.remove('figure-checked');
                                        boardFields[m].classList.remove('figure-capture');
                                    }
                                }, 2000);
                            }
                            else {
                                previousFigure.setFigurePosition(decodeField(i));
                                previousFigure.checked = false;
                                Contest.figureClicked(gameFiguresArray[previousNumber], boardFields);
                                //Next player tour
                                PlayerTour = PlayerTour == ChessPlayerTour.White ? ChessPlayerTour.Black : ChessPlayerTour.White;
                                checkChecks();
                                saveMoveToLocalStorage(null, previousFigure, gameFiguresArray)
                                updateLocalStarage();
                                seeLastMovesEventListener(Contest,boardFields)
                            }
                        }
                        else {
                            let previousFigurePosition = previousFigure.getFigurePosition();
                            previousFigure.setFigurePosition(decodeField(i));
                            let checkIfStillCheck = Contest.lookingForCheck();
                            if (checkIfStillCheck[0] && PlayerTour == checkIfStillCheck[1]) {
                                previousFigure.setFigurePosition(previousFigurePosition);
                                boardFields[i].classList.add('figure-capture');
                                previousFigure.checked = false;
                                setTimeout(() => {
                                    boardFields[i].classList.remove('figure-capture');
                                    for (let m = 0; m < boardFields.length; m++) {
                                        boardFields[m].classList.remove('figure-checked');
                                        boardFields[m].classList.remove('figure-capture');
                                    }
                                }, 2000);
                            }
                            else {
                                previousFigure.checked = false;
                                Contest.figureClicked(gameFiguresArray[previousNumber], boardFields);
                                //Next player tour
                                PlayerTour = PlayerTour == ChessPlayerTour.White ? ChessPlayerTour.Black : ChessPlayerTour.White;
                                checkChecks();
                                saveMoveToLocalStorage(null, previousFigure, gameFiguresArray)
                                updateLocalStarage();
                                seeLastMovesEventListener(Contest,boardFields);

                            }
                        }
                    }
                }
            }
            Contest.refreshBoard(gameFiguresArray, boardFields);
            checkChecks()

            if (boardFields[i].classList.contains('figure-checked') || boardFields[i].classList.contains('figure-capture')) {
                previousNumber = figureNumber;
                previousFigure = gameFiguresArray[figureNumber];
            }
        }

    });
}
function checkChecks() {

    let checkMate = Contest.lookingForMat();
    const checkDiv = window.document.querySelector(".results")!;

    if (checkMate[0]){
        checkDiv.innerHTML = `<p> Checkmate: ${check[1]=='black'?'white':'black'} won!</p>`;
        localStorage.setItem('checkmate','checkmate');
    }else {
        check = Contest.lookingForCheck();
        if (check[0]) {
            checkDiv.innerHTML = `<p> Check for: ${check[1]}</p>`
            localStorage.setItem('check', 'check');
        } else {
            checkDiv.innerHTML = `<p></p>`
            localStorage.removeItem('check');
            localStorage.removeItem('checkmate')
        }
    }
}
const cancelButton = window.document.getElementById("cancel-move")!;
cancelButton.addEventListener('click', (event: MouseEvent) => {
    if (!localStorage.getItem('koniec')){
        gameFiguresArray = undoMove(Contest)
        Contest.setGameFigures(gameFiguresArray)
        Contest.refreshBoard(Contest.getGameFigures(), boardFields)
        checkChecks()
        if (JSON.parse(<string>localStorage.getItem("movesNotation"))[0]!==undefined){
            PlayerTour = PlayerTour == ChessPlayerTour.White ? ChessPlayerTour.Black : ChessPlayerTour.White;
        }else {
            PlayerTour = ChessPlayerTour.White
        }
    }
});



function decodeField(field: number): [number, number] {
    return [field % 8, Math.floor(field / 8)];

}

function updateLocalStarage() {
    if (PlayerTour == ChessPlayerTour.White) {
        localStorage.setItem("color", "white")
    }
    else {
        localStorage.setItem("color", "black")
    }
}
