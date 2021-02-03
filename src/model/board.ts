import { Game } from './game.js';

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

// export class Board{

// }

const boardFields = document.querySelectorAll(".square");
const Contest = new Game(200);
Contest.gameInit();
const gameFiguresArray = Contest.getGameFigures();
Contest.refreshBoard(gameFiguresArray, boardFields);

console.log("Game has been initialized", "Game figures Array: ", gameFiguresArray);
let previousNumber: number = -1;
let previousFigure = gameFiguresArray[0];

for (let i = 0; i < boardFields.length; i++) {
    boardFields[i].addEventListener("click", () => {
        const figureNumber = Contest.checkBoardForFigure(i);
        const figure = gameFiguresArray[figureNumber];
        const boardFields = document.querySelectorAll(".square");
        if (figureNumber != -1) {
            Contest.figureClicked(gameFiguresArray[figureNumber], boardFields);
            previousNumber = figureNumber;
        }
        else {
            if ((previousNumber != -1) && previousFigure.checked) {
                if (boardFields[i].classList.contains('figure-checked')) {
                    previousFigure.setFigurePosition(decodeField(i));
                    previousFigure.checked = false;
                    Contest.figureClicked(gameFiguresArray[previousNumber], boardFields);
                }
            }
        }
        Contest.refreshBoard(gameFiguresArray, boardFields);
        if (boardFields[i].classList.contains('figure-checked')) {
        previousNumber = figureNumber;
        previousFigure = gameFiguresArray[figureNumber];
        }
    });

}

function decodeField(field: number): [number, number] {
    return [field % 8, Math.floor(field / 8)];

}

