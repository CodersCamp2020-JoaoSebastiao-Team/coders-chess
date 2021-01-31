import { Game } from './game.js';

const board = <HTMLElement>document.querySelector(".board");
const boardLetters = <HTMLElement>document.querySelector(".letters");
const boardNumbers = <HTMLElement>document.querySelector(".numbers");
let letters:string[] = ["A", "B", "C", "D","E", "F", "G", "H"];
let index:number = 0;
let black:boolean = false;
let num:number = 8;

for(let i = 0; i < 8; i++) {
  let letter = document.createElement("li");
  letter.textContent = letters[i];
  boardLetters.appendChild(letter);
  let numbers = document.createElement("li");
  numbers.textContent = String(num);
  num--;
  boardNumbers.appendChild(numbers);

}

for (let i =1; i<= 64; i++){
    const square = document.createElement("div");
    if(black) {
        square.classList.add("square");
        square.classList.add("black");
        index++;
        black = !black;
    } else {
        square.classList.add("square");
        square.classList.add("white");
        index++;
        black=!black;
    }
    board.appendChild(square);

    if(index === 8) {
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
const GameStart = new Game(200);
GameStart.gameInit();
const gameFiguresArray = GameStart.getGameFigures();
GameStart.refreshBoard(gameFiguresArray, boardFields);
console.log("Game has been initialized");
