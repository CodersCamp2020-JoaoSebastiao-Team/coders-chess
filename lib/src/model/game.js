import { ChessFigure, ChessColor } from './figure.js';
import { Bishop } from './figures/bishop.js';
import { Pawn } from './figures/pawn.js';
import { King } from './figures/king.js';
import { Knight } from './figures/knight.js';
import { Queen } from './figures/queen.js';
import { Rook } from './figures/rook.js';
var Game = /** @class */ (function () {
    function Game(time) {
        this.time = time;
        this.gameFigures = [];
    }
    Game.prototype.gameInit = function () {
        // Set figures for white player
        var pawnWhite1 = new Pawn(ChessFigure.Pawn, ChessColor.White, [0, 6]);
        this.gameFigures.push(pawnWhite1);
        var pawnWhite2 = new Pawn(ChessFigure.Pawn, ChessColor.White, [1, 6]);
        this.gameFigures.push(pawnWhite2);
        var pawnWhite3 = new Pawn(ChessFigure.Pawn, ChessColor.White, [2, 6]);
        this.gameFigures.push(pawnWhite3);
        var pawnWhite4 = new Pawn(ChessFigure.Pawn, ChessColor.White, [3, 6]);
        this.gameFigures.push(pawnWhite4);
        var pawnWhite5 = new Pawn(ChessFigure.Pawn, ChessColor.White, [4, 6]);
        this.gameFigures.push(pawnWhite5);
        var pawnWhite6 = new Pawn(ChessFigure.Pawn, ChessColor.White, [5, 6]);
        this.gameFigures.push(pawnWhite6);
        var pawnWhite7 = new Pawn(ChessFigure.Pawn, ChessColor.White, [6, 6]);
        this.gameFigures.push(pawnWhite7);
        var pawnWhite8 = new Pawn(ChessFigure.Pawn, ChessColor.White, [7, 6]);
        this.gameFigures.push(pawnWhite8);
        var rookWhiteLeft = new Rook(ChessFigure.Rook, ChessColor.White, [0, 7]);
        this.gameFigures.push(rookWhiteLeft);
        var rookWhiteRight = new Rook(ChessFigure.Rook, ChessColor.White, [7, 7]);
        this.gameFigures.push(rookWhiteRight);
        var knightWhiteLeft = new Knight(ChessFigure.Knight, ChessColor.White, [1, 7]);
        this.gameFigures.push(knightWhiteLeft);
        var knightWhiteRight = new Knight(ChessFigure.Knight, ChessColor.White, [6, 7]);
        this.gameFigures.push(knightWhiteRight);
        var bishoptWhiteLeft = new Bishop(ChessFigure.Bishop, ChessColor.White, [2, 7]);
        this.gameFigures.push(bishoptWhiteLeft);
        var bishopWhiteRight = new Bishop(ChessFigure.Bishop, ChessColor.White, [5, 7]);
        this.gameFigures.push(bishopWhiteRight);
        var kingWhite = new King(ChessFigure.King, ChessColor.White, [4, 7]);
        this.gameFigures.push(kingWhite);
        var queenWhite = new Queen(ChessFigure.Queen, ChessColor.White, [3, 7]);
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
        var kingBlack = new King(ChessFigure.King, ChessColor.Black, [4, 0]);
        this.gameFigures.push(kingBlack);
        var queenBlack = new Queen(ChessFigure.Queen, ChessColor.Black, [3, 0]);
        this.gameFigures.push(queenBlack);
    };
    Game.prototype.getGameFigures = function () {
        return this.gameFigures;
    };
    Game.prototype.refreshBoard = function (gameFigures, boardFields) {
        var actualBoardArray = [];
        var figurePosition = 0;
        var figureImageUrl = "";
        for (var i = 0; i < boardFields.length; i++) {
            var figureImg = boardFields[i].querySelector(".figureImg");
            figureImg.style.cursor = "none";
        }
        var _loop_1 = function (figure) {
            figurePosition = getFigureWrapper(figure.getFigurePosition());
            var figureImg = boardFields[figurePosition].querySelector(".figureImg");
            figureImg.style.width = "100%";
            figureImg.style.height = "100%";
            figureImageUrl = figureValidateUrl(figure.getFigure(), figure.getColor());
            figureImg.style.backgroundImage = figureImageUrl;
            figureImg.style.cursor = "pointer";
            boardFields[figurePosition].addEventListener("click", function () {
                figureClick(figure, figureImg, boardFields);
            });
        };
        for (var _i = 0, gameFigures_1 = gameFigures; _i < gameFigures_1.length; _i++) {
            var figure = gameFigures_1[_i];
            _loop_1(figure);
        }
    };
    return Game;
}());
export { Game };
function figureValidateUrl(figure, color) {
    var url = "";
    if (color == "white") {
        switch (figure) {
            case "Pawn":
                url = "url('../static/figures/pawnOrange.svg')";
                break;
            case "Bishop":
                url = "url('../static/figures/bishopOrange.svg')";
                break;
            case "King":
                url = "url('../static/figures/kingOrange.svg')";
                break;
            case "Knight":
                url = "url('../static/figures/knightOrange.svg')";
                break;
            case "Queen":
                url = "url('../static/figures/queenOrange.svg')";
                break;
            case "Rook":
                url = "url('../static/figures/rookOrange.svg')";
                break;
            default:
                url = "none";
        }
    }
    if (color == "black") {
        switch (figure) {
            case "Pawn":
                url = "url('../static/figures/pawnPink.svg')";
                break;
            case "Bishop":
                url = "url('../static/figures/bishopPink.svg')";
                break;
            case "King":
                url = "url('../static/figures/kingPink.svg')";
                break;
            case "Knight":
                url = "url('../static/figures/knightPink.svg')";
                break;
            case "Queen":
                url = "url('../static/figures/queenPink.svg')";
                break;
            case "Rook":
                url = "url('../static/figures/rookPink.svg')";
                break;
            default:
                url = "none";
        }
    }
    return url;
}
function figureClick(figure, field, fieldList) {
    var clickedFigure = getFigureWrapper(figure.getFigurePosition());
    for (var i = 0; i < fieldList.length; i++) {
        var figureImg = fieldList[i].querySelector(".figureImg");
        if (i === clickedFigure) {
            continue;
        }
        figureImg.classList.remove('figure-checked');
    }
    field.classList.toggle('figure-checked');
    //console.log(`Player clicked: ${figure.getFigure()}`);
}
function getFigureWrapper(figurePosition) {
    return figurePosition[0] + 8 * figurePosition[1];
}
