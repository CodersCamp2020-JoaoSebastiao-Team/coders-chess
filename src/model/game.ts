import { ChessFigure, ChessColor } from './figure.js';
import { Bishop } from './figures/bishop.js';
import { Pawn } from './figures/pawn.js';
import { King } from './figures/king.js';
import { Knight } from './figures/knight.js';
import { Queen } from './figures/queen.js';
import { Rook } from './figures/rook.js';


export class Game {
    constructor(protected time: number) { }
    private gameFigures: Array<Pawn | Rook | Knight | Bishop | King | Queen | unknown> = [];

    gameInit(): void {
        // Set figures for white player
        var pawnWhite1 = new Pawn(ChessFigure.Pawn, ChessColor.White, [0, 1]);
        this.gameFigures.push(pawnWhite1);
        var pawnWhite2 = new Pawn(ChessFigure.Pawn, ChessColor.White, [1, 1]);
        this.gameFigures.push(pawnWhite2);
        var pawnWhite3 = new Pawn(ChessFigure.Pawn, ChessColor.White, [2, 1]);
        this.gameFigures.push(pawnWhite3);
        var pawnWhite4 = new Pawn(ChessFigure.Pawn, ChessColor.White, [3, 1]);
        this.gameFigures.push(pawnWhite4);
        var pawnWhite5 = new Pawn(ChessFigure.Pawn, ChessColor.White, [4, 1]);
        this.gameFigures.push(pawnWhite5);
        var pawnWhite6 = new Pawn(ChessFigure.Pawn, ChessColor.White, [5, 1]);
        this.gameFigures.push(pawnWhite6);
        var pawnWhite7 = new Pawn(ChessFigure.Pawn, ChessColor.White, [6, 1]);
        this.gameFigures.push(pawnWhite7);
        var pawnWhite8 = new Pawn(ChessFigure.Pawn, ChessColor.White, [7, 1]);
        this.gameFigures.push(pawnWhite8);

        var rookWhiteLeft = new Rook(ChessFigure.Rook, ChessColor.White, [0, 0]);
        this.gameFigures.push(rookWhiteLeft);
        var rookWhiteRight = new Rook(ChessFigure.Rook, ChessColor.White, [7, 0]);
        this.gameFigures.push(rookWhiteRight);

        var knightWhiteLeft = new Knight(ChessFigure.Knight, ChessColor.White, [1, 0]);
        this.gameFigures.push(knightWhiteLeft);
        var knightWhiteRight = new Knight(ChessFigure.Knight, ChessColor.White, [6, 0]);
        this.gameFigures.push(knightWhiteRight);

        var bishoptWhiteLeft = new Bishop(ChessFigure.Bishop, ChessColor.White, [2, 0]);
        this.gameFigures.push(bishoptWhiteLeft);
        var bishopWhiteRight = new Bishop(ChessFigure.Bishop, ChessColor.White, [5, 0]);
        this.gameFigures.push(bishopWhiteRight);

        var kingWhite = new King(ChessFigure.King, ChessColor.White, [3, 0]);
        this.gameFigures.push(kingWhite);
        var queenWhite = new Queen(ChessFigure.Queen, ChessColor.White, [4, 0]);
        this.gameFigures.push(queenWhite);

        // Set figures for dark player
        var pawnBlack1 = new Pawn(ChessFigure.Pawn, ChessColor.Black, [0, 1]);
        this.gameFigures.push(pawnBlack1);
        var pawnBlack2 = new Pawn(ChessFigure.Pawn, ChessColor.Black, [1, 1]);
        this.gameFigures.push(pawnBlack2);
        var pawnBlack3 = new Pawn(ChessFigure.Pawn, ChessColor.Black, [2, 1]);
        this.gameFigures.push(pawnBlack3);
        var pawnBlack4 = new Pawn(ChessFigure.Pawn, ChessColor.Black, [3, 1]);
        this.gameFigures.push(pawnBlack4);
        var pawnBlack5 = new Pawn(ChessFigure.Pawn, ChessColor.Black, [4, 1]);
        this.gameFigures.push(pawnBlack5);
        var pawnBlack6 = new Pawn(ChessFigure.Pawn, ChessColor.Black, [5, 1]);
        this.gameFigures.push(pawnBlack6);
        var pawnBlack7 = new Pawn(ChessFigure.Pawn, ChessColor.Black, [6, 1]);
        this.gameFigures.push(pawnBlack7);
        var pawnBlack8 = new Pawn(ChessFigure.Pawn, ChessColor.Black, [7, 1]);
        this.gameFigures.push(pawnBlack8);

        var rookBlackLeft = new Rook(ChessFigure.Rook, ChessColor.Black, [0, 0]);
        this.gameFigures.push(rookBlackLeft);
        var rookBlackRight = new Rook(ChessFigure.Rook, ChessColor.Black, [7, 0]);
        this.gameFigures.push(rookBlackRight);

        var knightBlackLeft = new Knight(ChessFigure.Knight, ChessColor.Black, [1, 0]);
        this.gameFigures.push(knightBlackLeft);
        var knightBlackRight = new Knight(ChessFigure.Knight, ChessColor.Black, [6, 0]);
        this.gameFigures.push(knightBlackRight);

        var bishoptBlackLeft = new Bishop(ChessFigure.Bishop, ChessColor.Black, [2, 0]);
        this.gameFigures.push(bishoptBlackLeft);
        var bishopBlackRight = new Bishop(ChessFigure.Bishop, ChessColor.Black, [5, 0]);
        this.gameFigures.push(bishopBlackRight);

        var kingBlack = new King(ChessFigure.King, ChessColor.Black, [3, 0]);
        this.gameFigures.push(kingBlack);
        var queenBlack = new Queen(ChessFigure.Queen, ChessColor.Black, [4, 0]);
        this.gameFigures.push(queenBlack);
        console.log(this.gameFigures);
    }
}


