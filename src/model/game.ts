import { ChessFigure, ChessColor } from './figure.js';
import { Bishop } from './figures/bishop.js';
import { Pawn } from './figures/pawn.js';
import { King } from './figures/king.js';
import { Knight } from './figures/knight.js';
import { Queen } from './figures/queen.js';
import { Rook } from './figures/rook.js';


export class Game {
    constructor(protected time: number) { }
    private gameFigures: Array<Pawn | Rook | Knight | Bishop | King | Queen> = [];

    gameInit(): void {
        // Set figures for white player
        const pawnWhite1 = new Pawn(ChessFigure.Pawn, ChessColor.White, [0, 6]);
        this.gameFigures.push(pawnWhite1);
        const pawnWhite2 = new Pawn(ChessFigure.Pawn, ChessColor.White, [1, 6]);
        this.gameFigures.push(pawnWhite2);
        const pawnWhite3 = new Pawn(ChessFigure.Pawn, ChessColor.White, [2, 6]);
        this.gameFigures.push(pawnWhite3);
        const pawnWhite4 = new Pawn(ChessFigure.Pawn, ChessColor.White, [3, 6]);
        this.gameFigures.push(pawnWhite4);
        const pawnWhite5 = new Pawn(ChessFigure.Pawn, ChessColor.White, [4, 6]);
        this.gameFigures.push(pawnWhite5);
        const pawnWhite6 = new Pawn(ChessFigure.Pawn, ChessColor.White, [5, 6]);
        this.gameFigures.push(pawnWhite6);
        const pawnWhite7 = new Pawn(ChessFigure.Pawn, ChessColor.White, [6, 6]);
        this.gameFigures.push(pawnWhite7);
        const pawnWhite8 = new Pawn(ChessFigure.Pawn, ChessColor.White, [7, 6]);
        this.gameFigures.push(pawnWhite8);

        const rookWhiteLeft = new Rook(ChessFigure.Rook, ChessColor.White, [0, 7]);
        this.gameFigures.push(rookWhiteLeft);
        const rookWhiteRight = new Rook(ChessFigure.Rook, ChessColor.White, [7, 7]);
        this.gameFigures.push(rookWhiteRight);

        const knightWhiteLeft = new Knight(ChessFigure.Knight, ChessColor.White, [1, 7]);
        this.gameFigures.push(knightWhiteLeft);
        const knightWhiteRight = new Knight(ChessFigure.Knight, ChessColor.White, [6, 7]);
        this.gameFigures.push(knightWhiteRight);

        const bishoptWhiteLeft = new Bishop(ChessFigure.Bishop, ChessColor.White, [2, 7]);
        this.gameFigures.push(bishoptWhiteLeft);
        const bishopWhiteRight = new Bishop(ChessFigure.Bishop, ChessColor.White, [5, 7]);
        this.gameFigures.push(bishopWhiteRight);

        const kingWhite = new King(ChessFigure.King, ChessColor.White, [4, 7]);
        this.gameFigures.push(kingWhite);
        const queenWhite = new Queen(ChessFigure.Queen, ChessColor.White, [3, 7]);
        this.gameFigures.push(queenWhite);

        // Set figures for dark player
        const pawnBlack1 = new Pawn(ChessFigure.Pawn, ChessColor.Black, [0, 1]);
        this.gameFigures.push(pawnBlack1);
        const pawnBlack2 = new Pawn(ChessFigure.Pawn, ChessColor.Black, [1, 1]);
        this.gameFigures.push(pawnBlack2);
        const pawnBlack3 = new Pawn(ChessFigure.Pawn, ChessColor.Black, [2, 1]);
        this.gameFigures.push(pawnBlack3);
        const pawnBlack4 = new Pawn(ChessFigure.Pawn, ChessColor.Black, [3, 1]);
        this.gameFigures.push(pawnBlack4);
        const pawnBlack5 = new Pawn(ChessFigure.Pawn, ChessColor.Black, [4, 1]);
        this.gameFigures.push(pawnBlack5);
        const pawnBlack6 = new Pawn(ChessFigure.Pawn, ChessColor.Black, [5, 1]);
        this.gameFigures.push(pawnBlack6);
        const pawnBlack7 = new Pawn(ChessFigure.Pawn, ChessColor.Black, [6, 1]);
        this.gameFigures.push(pawnBlack7);
        const pawnBlack8 = new Pawn(ChessFigure.Pawn, ChessColor.Black, [7, 1]);
        this.gameFigures.push(pawnBlack8);

        const rookBlackLeft = new Rook(ChessFigure.Rook, ChessColor.Black, [0, 0]);
        this.gameFigures.push(rookBlackLeft);
        const rookBlackRight = new Rook(ChessFigure.Rook, ChessColor.Black, [7, 0]);
        this.gameFigures.push(rookBlackRight);

        const knightBlackLeft = new Knight(ChessFigure.Knight, ChessColor.Black, [1, 0]);
        this.gameFigures.push(knightBlackLeft);
        const knightBlackRight = new Knight(ChessFigure.Knight, ChessColor.Black, [6, 0]);
        this.gameFigures.push(knightBlackRight);

        const bishoptBlackLeft = new Bishop(ChessFigure.Bishop, ChessColor.Black, [2, 0]);
        this.gameFigures.push(bishoptBlackLeft);
        const bishopBlackRight = new Bishop(ChessFigure.Bishop, ChessColor.Black, [5, 0]);
        this.gameFigures.push(bishopBlackRight);

        const kingBlack = new King(ChessFigure.King, ChessColor.Black, [4, 0]);
        this.gameFigures.push(kingBlack);
        const queenBlack = new Queen(ChessFigure.Queen, ChessColor.Black, [3, 0]);
        this.gameFigures.push(queenBlack);
    }
    getGameFigures(): Array<Pawn | Rook | Knight | Bishop | King | Queen> {
        return this.gameFigures;
    }
    refreshBoard(gameFigures: Array<Pawn | Rook | Knight | Bishop | King | Queen>, boardFields: NodeListOf<Element>): void {
        const actualBoardArray: Array<Pawn | Rook | Knight | Bishop | King | Queen | unknown> = [];
        let figurePosition: number = 0;
        let figureImageUrl: string = "";

        for (let i = 0; i < boardFields.length; i++) {
            let figureImg = <HTMLInputElement>boardFields[i].querySelector(".figureImg");
            figureImg.style.cursor = "none";
        }

        for (let figure of gameFigures) {
            figurePosition = getFigureWrapper(figure.getFigurePosition());
            let figureImg = <HTMLInputElement>boardFields[figurePosition].querySelector(".figureImg");
            figureImg.style.width = "100%";
            figureImg.style.height = "100%";
            figureImageUrl = figureValidateUrl(figure.getFigure(), figure.getColor());
            figureImg.style.backgroundImage = figureImageUrl;
            figureImg.style.cursor = "pointer";
            boardFields[figurePosition].addEventListener("click", () => {
                figureClick(figure, figureImg, boardFields);
            }
            );
        }
    }
}

function figureValidateUrl(figure: string, color: string): string {
    let url: string = "";
    if (color == "white") {
        switch (figure) {
            case "Pawn":
                url = "url('../figures/pawnOrange.svg')";
                break;
            case "Bishop":
                url = "url('../figures/bishopOrange.svg')";
                break;
            case "King":
                url = "url('../figures/kingOrange.svg')";
                break;
            case "Knight":
                url = "url('../figures/knightOrange.svg')";
                break;
            case "Queen":
                url = "url('../figures/queenOrange.svg')";
                break;
            case "Rook":
                url = "url('../figures/rookOrange.svg')";
                break;
            default:
                url = "none";
        }
    }
    if (color == "black") {
        switch (figure) {
            case "Pawn":
                url = "url('../figures/pawnPink.svg')";
                break;
            case "Bishop":
                url = "url('../figures/bishopPink.svg')";
                break;
            case "King":
                url = "url('../figures/kingPink.svg')";
                break;
            case "Knight":
                url = "url('../figures/knightPink.svg')";
                break;
            case "Queen":
                url = "url('../figures/queenPink.svg')";
                break;
            case "Rook":
                url = "url('../figures/rookPink.svg')";
                break;
            default:
                url = "none";
        }
    }
    return url;
}
function figureClick(figure: Pawn | Rook | Knight | Bishop | King | Queen, field: HTMLInputElement, fieldList:NodeListOf<Element>) {
    let clickedFigure = getFigureWrapper(figure.getFigurePosition());
    for (let i = 0; i < fieldList.length; i++) {
        let figureImg = <HTMLInputElement>fieldList[i].querySelector(".figureImg");
        if (i === clickedFigure){
            continue;
        }
        figureImg.classList.remove('figure-checked');
    }
    field.classList.toggle('figure-checked');
    //console.log(`Player clicked: ${figure.getFigure()}`);
}

function getFigureWrapper(figurePosition: [number, number]){
    return figurePosition[0] + 8 * figurePosition[1];
}