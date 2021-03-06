var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
        var pawnWhite1 = new Pawn(ChessFigure.Pawn, ChessColor.White, [0, 6], false);
        this.gameFigures.push(pawnWhite1);
        var pawnWhite2 = new Pawn(ChessFigure.Pawn, ChessColor.White, [1, 6], false);
        this.gameFigures.push(pawnWhite2);
        var pawnWhite3 = new Pawn(ChessFigure.Pawn, ChessColor.White, [2, 6], false);
        this.gameFigures.push(pawnWhite3);
        var pawnWhite4 = new Pawn(ChessFigure.Pawn, ChessColor.White, [3, 6], false);
        this.gameFigures.push(pawnWhite4);
        var pawnWhite5 = new Pawn(ChessFigure.Pawn, ChessColor.White, [4, 6], false);
        this.gameFigures.push(pawnWhite5);
        var pawnWhite6 = new Pawn(ChessFigure.Pawn, ChessColor.White, [5, 6], false);
        this.gameFigures.push(pawnWhite6);
        var pawnWhite7 = new Pawn(ChessFigure.Pawn, ChessColor.White, [6, 6], false);
        this.gameFigures.push(pawnWhite7);
        var pawnWhite8 = new Pawn(ChessFigure.Pawn, ChessColor.White, [7, 6], false);
        this.gameFigures.push(pawnWhite8);
        var rookWhiteLeft = new Rook(ChessFigure.Rook, ChessColor.White, [0, 7], false);
        this.gameFigures.push(rookWhiteLeft);
        var rookWhiteRight = new Rook(ChessFigure.Rook, ChessColor.White, [7, 7], false);
        this.gameFigures.push(rookWhiteRight);
        var knightWhiteLeft = new Knight(ChessFigure.Knight, ChessColor.White, [1, 7], false);
        this.gameFigures.push(knightWhiteLeft);
        var knightWhiteRight = new Knight(ChessFigure.Knight, ChessColor.White, [6, 7], false);
        this.gameFigures.push(knightWhiteRight);
        var bishoptWhiteLeft = new Bishop(ChessFigure.Bishop, ChessColor.White, [2, 7], false);
        this.gameFigures.push(bishoptWhiteLeft);
        var bishopWhiteRight = new Bishop(ChessFigure.Bishop, ChessColor.White, [5, 7], false);
        this.gameFigures.push(bishopWhiteRight);
        var kingWhite = new King(ChessFigure.King, ChessColor.White, [4, 7], false);
        this.gameFigures.push(kingWhite);
        var queenWhite = new Queen(ChessFigure.Queen, ChessColor.White, [3, 7], false);
        this.gameFigures.push(queenWhite);
        // Set figures for dark player
        var pawnBlack1 = new Pawn(ChessFigure.Pawn, ChessColor.Black, [0, 1], false);
        this.gameFigures.push(pawnBlack1);
        var pawnBlack2 = new Pawn(ChessFigure.Pawn, ChessColor.Black, [1, 1], false);
        this.gameFigures.push(pawnBlack2);
        var pawnBlack3 = new Pawn(ChessFigure.Pawn, ChessColor.Black, [2, 1], false);
        this.gameFigures.push(pawnBlack3);
        var pawnBlack4 = new Pawn(ChessFigure.Pawn, ChessColor.Black, [3, 1], false);
        this.gameFigures.push(pawnBlack4);
        var pawnBlack5 = new Pawn(ChessFigure.Pawn, ChessColor.Black, [4, 1], false);
        this.gameFigures.push(pawnBlack5);
        var pawnBlack6 = new Pawn(ChessFigure.Pawn, ChessColor.Black, [5, 1], false);
        this.gameFigures.push(pawnBlack6);
        var pawnBlack7 = new Pawn(ChessFigure.Pawn, ChessColor.Black, [6, 1], false);
        this.gameFigures.push(pawnBlack7);
        var pawnBlack8 = new Pawn(ChessFigure.Pawn, ChessColor.Black, [7, 1], false);
        this.gameFigures.push(pawnBlack8);
        var rookBlackLeft = new Rook(ChessFigure.Rook, ChessColor.Black, [0, 0], false);
        this.gameFigures.push(rookBlackLeft);
        var rookBlackRight = new Rook(ChessFigure.Rook, ChessColor.Black, [7, 0], false);
        this.gameFigures.push(rookBlackRight);
        var knightBlackLeft = new Knight(ChessFigure.Knight, ChessColor.Black, [1, 0], false);
        this.gameFigures.push(knightBlackLeft);
        var knightBlackRight = new Knight(ChessFigure.Knight, ChessColor.Black, [6, 0], false);
        this.gameFigures.push(knightBlackRight);
        var bishoptBlackLeft = new Bishop(ChessFigure.Bishop, ChessColor.Black, [2, 0], false);
        this.gameFigures.push(bishoptBlackLeft);
        var bishopBlackRight = new Bishop(ChessFigure.Bishop, ChessColor.Black, [5, 0], false);
        this.gameFigures.push(bishopBlackRight);
        var kingBlack = new King(ChessFigure.King, ChessColor.Black, [4, 0], false);
        this.gameFigures.push(kingBlack);
        var queenBlack = new Queen(ChessFigure.Queen, ChessColor.Black, [3, 0], false);
        this.gameFigures.push(queenBlack);
    };
    Game.prototype.getGameFigures = function () {
        return this.gameFigures;
    };
    Game.prototype.setGameFigures = function (figures) {
        this.gameFigures = figures;
    };
    Game.prototype.refreshBoard = function (gameFigures, boardFields) {
        var actualBoardArray = [];
        var figurePosition = 0;
        var figureImageUrl = "";
        for (var i = 0; i < boardFields.length; i++) {
            var figureImg = boardFields[i].querySelector(".figureImg");
            figureImg.style.cursor = "initial";
            figureImg.style.backgroundImage = "";
        }
        for (var _i = 0, gameFigures_1 = gameFigures; _i < gameFigures_1.length; _i++) {
            var figure = gameFigures_1[_i];
            figurePosition = getFigureWrapper(figure.getFigurePosition());
            var figureImg = boardFields[figurePosition].querySelector(".figureImg");
            figureImg.style.width = "100%";
            figureImg.style.height = "100%";
            figureImageUrl = figureValidateUrl(figure.getFigure(), figure.getColor());
            figureImg.style.backgroundImage = figureImageUrl;
            figureImg.style.cursor = "pointer";
        }
    };
    Game.prototype.checkBoardForFigure = function (field) {
        var index = 0;
        for (var _i = 0, _a = this.gameFigures; _i < _a.length; _i++) {
            var figure = _a[_i];
            var figurePosition = figure.getFigurePosition();
            if ((figurePosition[0] + 8 * figurePosition[1]) === field) {
                figure.checked = figure.checked ? false : true;
                var newArray = __spreadArrays(this.gameFigures);
                newArray.splice(index, 1);
                newArray.forEach(function (element) {
                    element.checked = false;
                });
                return index;
            }
            index++;
        }
        return -1;
    };
    Game.prototype.figureClicked = function (figure, fieldList) {
        var field = fieldList[getFigureWrapper(figure.getFigurePosition())].querySelector(".figureImg");
        var clickedFigure = getFigureWrapper(figure.getFigurePosition());
        for (var i = 0; i < fieldList.length; i++) {
            var figureImg = fieldList[i].querySelector(".figureImg");
            if (i === clickedFigure) {
                continue;
            }
            fieldList[i].classList.remove('figure-checked');
            fieldList[i].classList.remove('figure-capture');
        }
        if (figure.checked) {
            fieldList[getFigureWrapper(figure.getFigurePosition())].classList.add('figure-checked');
            fieldList[getFigureWrapper(figure.getFigurePosition())].classList.remove('figure-capture');
            var boardMatrix = getBoardMatrix(this.gameFigures);
            var figureDirection = [];
            var figureCapture = [];
            figureDirection = figure.showDirections(boardMatrix);
            figureCapture = figure.showCaptures(boardMatrix);
            showDirections(fieldList, figure, figureDirection, figureCapture, this.gameFigures);
        }
        else {
            fieldList[getFigureWrapper(figure.getFigurePosition())].classList.remove('figure-checked');
            fieldList[getFigureWrapper(figure.getFigurePosition())].classList.remove('figure-capture');
        }
        function showFigureDirection(fieldList, figure, set) {
            fieldList[getFigureWrapper([figure.getFigurePosition()[0] + set[0], figure.getFigurePosition()[1] + set[1]])].classList.add('figure-checked');
        }
        function showFigureCaptures(fieldList, figure, set, gameFigures) {
            var actualColor = figure.getColor();
            var opponentColor = lookingForOpponentColor(gameFigures, [figure.getFigurePosition()[0] + set[0], figure.getFigurePosition()[1] + set[1]]);
            if (actualColor != opponentColor) {
                fieldList[getFigureWrapper([figure.getFigurePosition()[0] + set[0], figure.getFigurePosition()[1] + set[1]])].classList.add('figure-capture');
            }
        }
        function showDirections(fieldList, figure, figureDirection, figureCaptures, gameFigures) {
            figureDirection.forEach(function (element) {
                showFigureDirection(fieldList, figure, element);
            });
            figureCaptures.forEach(function (element) {
                showFigureCaptures(fieldList, figure, element, gameFigures);
            });
        }
    };
    Game.prototype.lookingForCheck = function () {
        var check = [false, ""];
        var figures = this.gameFigures;
        var boardMatrix = getBoardMatrix(this.gameFigures);
        var figureCapture;
        for (var _i = 0, figures_1 = figures; _i < figures_1.length; _i++) {
            var figure = figures_1[_i];
            var figureColor = figure.getColor();
            figureCapture = figure.showCaptures(boardMatrix);
            for (var _a = 0, figureCapture_1 = figureCapture; _a < figureCapture_1.length; _a++) {
                var figureOffset = figureCapture_1[_a];
                var figurePosition = figure.getFigurePosition();
                var opponnentPos = [(figurePosition[0] + figureOffset[0]), (figurePosition[1] + figureOffset[1])];
                for (var _b = 0, figures_2 = figures; _b < figures_2.length; _b++) {
                    var figureOpp = figures_2[_b];
                    if (figureOpp.getFigurePosition()[0] == opponnentPos[0] && figureOpp.getFigurePosition()[1] == opponnentPos[1]) {
                        if (figureOpp.getColor() != figureColor) {
                            if (figureOpp.getFigure() === "King") {
                                console.log("check! for: ", figureOpp.getColor());
                                check = [true, figureOpp.getColor()];
                            }
                        }
                    }
                }
            }
        }
        return check;
    };
    Game.prototype.lookingForMat = function () {
        var check = [false, ""];
        var figures = this.gameFigures;
        var boardMatrix = getBoardMatrix(this.gameFigures);
        var figureCapture;
        for (var _i = 0, figures_3 = figures; _i < figures_3.length; _i++) {
            var figure = figures_3[_i];
            var figureColor = figure.getColor();
            figureCapture = figure.showCaptures(boardMatrix);
            for (var _a = 0, figureCapture_2 = figureCapture; _a < figureCapture_2.length; _a++) {
                var figureOffset = figureCapture_2[_a];
                var figurePosition = figure.getFigurePosition();
                var opponnentPos = [(figurePosition[0] + figureOffset[0]), (figurePosition[1] + figureOffset[1])];
                for (var _b = 0, figures_4 = figures; _b < figures_4.length; _b++) {
                    var figureOpp = figures_4[_b];
                    if (figureOpp.getFigurePosition()[0] == opponnentPos[0] && figureOpp.getFigurePosition()[1] == opponnentPos[1]) {
                        if (figureOpp.getColor() != figureColor) {
                            if (figureOpp.getFigure() === "King") {
                                var checkMat = false;
                                if (figureOpp.showDirections(boardMatrix).length == 0) {
                                    checkMat = true;
                                }
                                for (var _c = 0, figures_5 = figures; _c < figures_5.length; _c++) {
                                    var figureOpponent = figures_5[_c];
                                    var figureOpponentPosition = figureOpponent.getFigurePosition();
                                    if (figureOpponent.getColor() == figureOpp.getColor()) {
                                        var figureCapturesPos = figureOpponent.showCaptures(boardMatrix);
                                        for (var _d = 0, figureCapturesPos_1 = figureCapturesPos; _d < figureCapturesPos_1.length; _d++) {
                                            var figureCaptures = figureCapturesPos_1[_d];
                                            var opponnentPos_1 = [(figureOpponentPosition[0] + figureCaptures[0]), (figureOpponentPosition[1] + figureCaptures[1])];
                                            if (opponnentPos_1[0] == figurePosition[0] && opponnentPos_1[1] == figurePosition[1]) {
                                                checkMat = true;
                                            }
                                        }
                                    }
                                }
                                if (checkMat) {
                                    console.log("check mat!");
                                }
                                check = [checkMat, figureOpp.getColor()];
                            }
                        }
                    }
                }
            }
        }
        return check;
    };
    return Game;
}());
export { Game };
function figureValidateUrl(figure, color) {
    var url = "";
    if (color == "white") {
        switch (figure) {
            case "Pawn":
                url = "url('/figures/pawnOrange.svg')";
                break;
            case "Bishop":
                url = "url('/figures/bishopOrange.svg')";
                break;
            case "King":
                url = "url('/figures/kingOrange.svg')";
                break;
            case "Knight":
                url = "url('/figures/knightOrange.svg')";
                break;
            case "Queen":
                url = "url('/figures/queenOrange.svg')";
                break;
            case "Rook":
                url = "url('/figures/rookOrange.svg')";
                break;
            default:
                url = "none";
        }
    }
    if (color == "black") {
        switch (figure) {
            case "Pawn":
                url = "url('/figures/pawnPink.svg')";
                break;
            case "Bishop":
                url = "url('/figures/bishopPink.svg')";
                break;
            case "King":
                url = "url('/figures/kingPink.svg')";
                break;
            case "Knight":
                url = "url('/figures/knightPink.svg')";
                break;
            case "Queen":
                url = "url('../figures/queenPink.svg')";
                break;
            case "Rook":
                url = "url('/figures/rookPink.svg')";
                break;
            default:
                url = "none";
        }
    }
    return url;
}
function getFigureWrapper(figurePosition) {
    return figurePosition[0] + 8 * figurePosition[1];
}
function getBoardMatrix(gameFigures) {
    var boardMatrix = [];
    for (var _i = 0, gameFigures_2 = gameFigures; _i < gameFigures_2.length; _i++) {
        var figure = gameFigures_2[_i];
        boardMatrix.push(figure.getFigurePosition());
    }
    return boardMatrix;
}
function lookingForOpponentColor(gameFigures, figurePosition) {
    var opponentPosition = getFigureWrapper(figurePosition);
    var opponentColor = "white";
    for (var _i = 0, gameFigures_3 = gameFigures; _i < gameFigures_3.length; _i++) {
        var figure = gameFigures_3[_i];
        if (figure != undefined) {
            if (opponentPosition == getFigureWrapper(figure.getFigurePosition())) {
                opponentColor = figure.getColor();
            }
        }
    }
    return opponentColor;
}
