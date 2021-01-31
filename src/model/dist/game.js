"use strict";
exports.__esModule = true;
exports.Game = void 0;
var figure_js_1 = require("./figure.js");
var bishop_js_1 = require("./figures/bishop.js");
var pawn_js_1 = require("./figures/pawn.js");
var king_js_1 = require("./figures/king.js");
var knight_js_1 = require("./figures/knight.js");
var queen_js_1 = require("./figures/queen.js");
var rook_js_1 = require("./figures/rook.js");
var Game = /** @class */ (function () {
    function Game(time) {
        this.time = time;
        this.gameFigures = [];
    }
    Game.prototype.gameInit = function () {
        // Set figures for white player
        var pawnWhite1 = new pawn_js_1.Pawn(figure_js_1.ChessFigure.Pawn, figure_js_1.ChessColor.White, [0, 6]);
        this.gameFigures.push(pawnWhite1);
        var pawnWhite2 = new pawn_js_1.Pawn(figure_js_1.ChessFigure.Pawn, figure_js_1.ChessColor.White, [1, 6]);
        this.gameFigures.push(pawnWhite2);
        var pawnWhite3 = new pawn_js_1.Pawn(figure_js_1.ChessFigure.Pawn, figure_js_1.ChessColor.White, [2, 6]);
        this.gameFigures.push(pawnWhite3);
        var pawnWhite4 = new pawn_js_1.Pawn(figure_js_1.ChessFigure.Pawn, figure_js_1.ChessColor.White, [3, 6]);
        this.gameFigures.push(pawnWhite4);
        var pawnWhite5 = new pawn_js_1.Pawn(figure_js_1.ChessFigure.Pawn, figure_js_1.ChessColor.White, [4, 6]);
        this.gameFigures.push(pawnWhite5);
        var pawnWhite6 = new pawn_js_1.Pawn(figure_js_1.ChessFigure.Pawn, figure_js_1.ChessColor.White, [5, 6]);
        this.gameFigures.push(pawnWhite6);
        var pawnWhite7 = new pawn_js_1.Pawn(figure_js_1.ChessFigure.Pawn, figure_js_1.ChessColor.White, [6, 6]);
        this.gameFigures.push(pawnWhite7);
        var pawnWhite8 = new pawn_js_1.Pawn(figure_js_1.ChessFigure.Pawn, figure_js_1.ChessColor.White, [7, 6]);
        this.gameFigures.push(pawnWhite8);
        var rookWhiteLeft = new rook_js_1.Rook(figure_js_1.ChessFigure.Rook, figure_js_1.ChessColor.White, [0, 7]);
        this.gameFigures.push(rookWhiteLeft);
        var rookWhiteRight = new rook_js_1.Rook(figure_js_1.ChessFigure.Rook, figure_js_1.ChessColor.White, [7, 7]);
        this.gameFigures.push(rookWhiteRight);
        var knightWhiteLeft = new knight_js_1.Knight(figure_js_1.ChessFigure.Knight, figure_js_1.ChessColor.White, [1, 7]);
        this.gameFigures.push(knightWhiteLeft);
        var knightWhiteRight = new knight_js_1.Knight(figure_js_1.ChessFigure.Knight, figure_js_1.ChessColor.White, [6, 7]);
        this.gameFigures.push(knightWhiteRight);
        var bishoptWhiteLeft = new bishop_js_1.Bishop(figure_js_1.ChessFigure.Bishop, figure_js_1.ChessColor.White, [2, 7]);
        this.gameFigures.push(bishoptWhiteLeft);
        var bishopWhiteRight = new bishop_js_1.Bishop(figure_js_1.ChessFigure.Bishop, figure_js_1.ChessColor.White, [5, 7]);
        this.gameFigures.push(bishopWhiteRight);
        var kingWhite = new king_js_1.King(figure_js_1.ChessFigure.King, figure_js_1.ChessColor.White, [3, 7]);
        this.gameFigures.push(kingWhite);
        var queenWhite = new queen_js_1.Queen(figure_js_1.ChessFigure.Queen, figure_js_1.ChessColor.White, [4, 7]);
        this.gameFigures.push(queenWhite);
        // Set figures for dark player
        var pawnBlack1 = new pawn_js_1.Pawn(figure_js_1.ChessFigure.Pawn, figure_js_1.ChessColor.Black, [0, 1]);
        this.gameFigures.push(pawnBlack1);
        var pawnBlack2 = new pawn_js_1.Pawn(figure_js_1.ChessFigure.Pawn, figure_js_1.ChessColor.Black, [1, 1]);
        this.gameFigures.push(pawnBlack2);
        var pawnBlack3 = new pawn_js_1.Pawn(figure_js_1.ChessFigure.Pawn, figure_js_1.ChessColor.Black, [2, 1]);
        this.gameFigures.push(pawnBlack3);
        var pawnBlack4 = new pawn_js_1.Pawn(figure_js_1.ChessFigure.Pawn, figure_js_1.ChessColor.Black, [3, 1]);
        this.gameFigures.push(pawnBlack4);
        var pawnBlack5 = new pawn_js_1.Pawn(figure_js_1.ChessFigure.Pawn, figure_js_1.ChessColor.Black, [4, 1]);
        this.gameFigures.push(pawnBlack5);
        var pawnBlack6 = new pawn_js_1.Pawn(figure_js_1.ChessFigure.Pawn, figure_js_1.ChessColor.Black, [5, 1]);
        this.gameFigures.push(pawnBlack6);
        var pawnBlack7 = new pawn_js_1.Pawn(figure_js_1.ChessFigure.Pawn, figure_js_1.ChessColor.Black, [6, 1]);
        this.gameFigures.push(pawnBlack7);
        var pawnBlack8 = new pawn_js_1.Pawn(figure_js_1.ChessFigure.Pawn, figure_js_1.ChessColor.Black, [7, 1]);
        this.gameFigures.push(pawnBlack8);
        var rookBlackLeft = new rook_js_1.Rook(figure_js_1.ChessFigure.Rook, figure_js_1.ChessColor.Black, [0, 0]);
        this.gameFigures.push(rookBlackLeft);
        var rookBlackRight = new rook_js_1.Rook(figure_js_1.ChessFigure.Rook, figure_js_1.ChessColor.Black, [7, 0]);
        this.gameFigures.push(rookBlackRight);
        var knightBlackLeft = new knight_js_1.Knight(figure_js_1.ChessFigure.Knight, figure_js_1.ChessColor.Black, [1, 0]);
        this.gameFigures.push(knightBlackLeft);
        var knightBlackRight = new knight_js_1.Knight(figure_js_1.ChessFigure.Knight, figure_js_1.ChessColor.Black, [6, 0]);
        this.gameFigures.push(knightBlackRight);
        var bishoptBlackLeft = new bishop_js_1.Bishop(figure_js_1.ChessFigure.Bishop, figure_js_1.ChessColor.Black, [2, 0]);
        this.gameFigures.push(bishoptBlackLeft);
        var bishopBlackRight = new bishop_js_1.Bishop(figure_js_1.ChessFigure.Bishop, figure_js_1.ChessColor.Black, [5, 0]);
        this.gameFigures.push(bishopBlackRight);
        var kingBlack = new king_js_1.King(figure_js_1.ChessFigure.King, figure_js_1.ChessColor.Black, [3, 0]);
        this.gameFigures.push(kingBlack);
        var queenBlack = new queen_js_1.Queen(figure_js_1.ChessFigure.Queen, figure_js_1.ChessColor.Black, [4, 0]);
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
        for (var _i = 0, gameFigures_1 = gameFigures; _i < gameFigures_1.length; _i++) {
            var figure = gameFigures_1[_i];
            figurePosition = figure.getFigurePosition()[0] + 8 * figure.getFigurePosition()[1];
            var figureImg = boardFields[figurePosition].querySelector(".figureImg");
            figureImg.style.width = "100%";
            figureImg.style.height = "100%";
            figureImageUrl = figureValidateUrl(figure.getFigure(), figure.getColor());
            figureImg.style.backgroundImage = figureImageUrl;
            figureImg.style.cursor = "pointer";
            boardFields[figurePosition].addEventListener("click", figureClick);
        }
    };
    return Game;
}());
exports.Game = Game;
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
function figureClick() {
    console.log("Clicked!");
}
