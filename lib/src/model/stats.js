import { ChessFigure, ChessColor } from "./figure";
import { Bishop } from "./figures/bishop";
import { Queen } from "./figures/queen";
import { Rook } from "./figures/rook";
import { Pawn } from "./figures/pawn";
import { Knight } from "./figures/knight";
import { King } from "./figures/king";
function moveToText(figure, opponentFigure, moveTo) {
    if (opponentFigure !== null) {
        return figure.getColor() + " " + figure.getFigure() + " from " + figurePosition(figure.getFigurePosition())
            + " beat " + (opponentFigure === null || opponentFigure === void 0 ? void 0 : opponentFigure.getFigure()) + " on " + figurePosition(moveTo.getFigurePosition());
    }
    else {
        return figure.getColor() + " " + figure.getFigure() + " move from " +
            figurePosition(figure.getFigurePosition()) + " to " + figurePosition(moveTo.getFigurePosition());
    }
    //roszady i szach jeszcze
}
function moveToNotation(figure, opponentFigure, moveTo) {
    if (opponentFigure !== null) {
        return figureName(figure.getFigureNumber()) + figurePosition(figure.getFigurePosition())
            + "x" + figureName(opponentFigure === null || opponentFigure === void 0 ? void 0 : opponentFigure.getFigureNumber()) + figurePosition(moveTo.getFigurePosition());
    }
    else {
        return figureName(figure.getFigureNumber()) + figurePosition(figure.getFigurePosition()) +
            figurePosition(moveTo.getFigurePosition());
    }
    //roszady i szach jeszcze
}
function figurePosition(figurePosition) {
    var positionString = "";
    switch (figurePosition[0]) {
        case 0: {
            positionString = 'a';
            break;
        }
        case 1: {
            positionString = 'b';
            break;
        }
        case 2: {
            positionString = 'c';
            break;
        }
        case 3: {
            positionString = 'd';
            break;
        }
        case 4: {
            positionString = 'e';
            break;
        }
        case 5: {
            positionString = 'f';
            break;
        }
        case 6: {
            positionString = 'g';
            break;
        }
        case 7: {
            positionString = 'h';
            break;
        }
    }
    return positionString + Math.abs(figurePosition[1] - 8);
}
function figureName(figure) {
    switch (figure) {
        case ChessFigure.Pawn.valueOf(): {
            return "P";
        }
        case ChessFigure.Bishop.valueOf(): {
            return "B";
        }
        case ChessFigure.King.valueOf(): {
            return "K";
        }
        case ChessFigure.Knight.valueOf(): {
            return "N";
        }
        case ChessFigure.Queen.valueOf(): {
            return "Q";
        }
        case ChessFigure.Rook.valueOf(): {
            return "R";
        }
    }
    return '';
}
export function saveMoveToLocalStorage(opponentFigure, moveTo) {
    var movesText = JSON.parse(localStorage.getItem("movesText")) || [];
    var movesNotation = JSON.parse(localStorage.getItem("movesNotation")) || [];
    var figure = JSON.parse(localStorage.getItem("figure"));
    var figureObject = makeFigureObject(figure, moveTo);
    movesText.push(moveToText(figureObject, opponentFigure, moveTo));
    movesNotation.push(moveToNotation(figureObject, opponentFigure, moveTo));
    localStorage.setItem("movesText", JSON.stringify(movesText));
    localStorage.setItem("movesNotation", JSON.stringify(movesNotation));
    var list = window.document.getElementById("history-list");
    var notationText = JSON.parse(localStorage.getItem("notationText"));
    list.innerHTML =
        notationText === 'Notacja' ? movesTextHTML(movesText) : movesNotationHTML(movesNotation);
    list.scrollTop = list.scrollHeight;
}
function makeFigureObject(figure, moveTo) {
    switch (moveTo.getFigureEnum()) {
        case ChessFigure.Pawn:
            return new Pawn(ChessFigure.Pawn, moveTo.getFigureColorEnum(), figure.position, false);
        case ChessFigure.Queen:
            return new Queen(ChessFigure.Queen, moveTo.getFigureColorEnum(), figure.position, false);
        case ChessFigure.Rook:
            return new Rook(ChessFigure.Rook, moveTo.getFigureColorEnum(), figure.position, false);
        case ChessFigure.Bishop:
            return new Bishop(ChessFigure.Bishop, moveTo.getFigureColorEnum(), figure.position, false);
        case ChessFigure.King:
            return new King(ChessFigure.King, moveTo.getFigureColorEnum(), figure.position, false);
        case ChessFigure.Knight:
            return new Knight(ChessFigure.Knight, moveTo.getFigureColorEnum(), figure.position, false);
    }
}
export function movesNotationHTML(movesNotation) {
    return movesHTML(movesNotation);
}
export function movesTextHTML(movesText) {
    return movesHTML(movesText);
}
function movesHTML(movesArray) {
    var moves = [];
    movesArray.forEach(function (move, index) {
        if (index % 2 === 0) {
            moves.push([move]);
        }
        else {
            moves[moves.length - 1].push(move);
        }
    });
    return moves.map(function (move, index) {
        var blackMove = move[1] ? '<div class="black-move">' + move[1] + '</div>' : '';
        var moveNumber = index + 1;
        return '<div class="move">' +
            '<div class="move-number">' + moveNumber + '</div>' +
            '<div class="white-move">' + move[0] + '</div>' +
            blackMove +
            '</div>';
    }).join(' ');
}
function makeFigureObjectFromNotation(move, color) {
    var colorEnum = color == 'white' ? ChessColor.Black : ChessColor.White;
    var position = figurePositionNumbers(move.substr(5, 2));
    switch (move[4]) {
        case 'P':
            return new Pawn(ChessFigure.Pawn, colorEnum, position, false);
        case 'Q':
            return new Queen(ChessFigure.Queen, colorEnum, position, false);
        case 'R':
            return new Rook(ChessFigure.Rook, colorEnum, position, false);
        case 'B':
            return new Bishop(ChessFigure.Bishop, colorEnum, position, false);
        case 'K':
            return new King(ChessFigure.King, colorEnum, position, false);
        case 'N':
            return new Knight(ChessFigure.Knight, colorEnum, position, false);
        default:
            return new Knight(ChessFigure.Knight, colorEnum, position, false);
    }
}
function figurePositionNumbers(figurePosition) {
    var posRow = 0;
    switch (figurePosition[0]) {
        case 'a': {
            posRow = 0;
            break;
        }
        case 'b': {
            posRow = 1;
            break;
        }
        case 'c': {
            posRow = 2;
            break;
        }
        case 'd': {
            posRow = 3;
            break;
        }
        case 'e': {
            posRow = 4;
            break;
        }
        case 'f': {
            posRow = 5;
            break;
        }
        case 'g': {
            posRow = 6;
            break;
        }
        case 'h': {
            posRow = 7;
            break;
        }
    }
    return [posRow, Math.abs(parseInt(figurePosition[1]) - 8)];
}
export function undoMove(contest) {
    var moves = JSON.parse(localStorage.getItem('movesNotation'));
    var movesText = JSON.parse(localStorage.getItem('movesText'));
    var lastMoveText = movesText.pop();
    var lastMove = moves.pop();
    var figures = contest.getGameFigures();
    if (lastMove) {
        var color = localStorage.getItem('color') == 'white' ? 'black' : 'white';
        var positionToUndo_1 = figurePositionNumbers(lastMove.substr(1, 2));
        if (lastMove.includes('x')) {
            var lastPosition_1 = figurePositionNumbers(lastMove.substr(5, 2));
            figures.map(function (figure) {
                var position = figure.getFigurePosition();
                if (position[0] === lastPosition_1[0] && position[1] === lastPosition_1[1]) {
                    figure.setFigurePosition(positionToUndo_1);
                }
            });
            figures.push(makeFigureObjectFromNotation(lastMove, color));
        }
        else {
            var lastPosition_2 = figurePositionNumbers(lastMove.substr(3, 2));
            figures.map(function (figure) {
                var position = figure.getFigurePosition();
                if (position[0] === lastPosition_2[0] && position[1] === lastPosition_2[1]) {
                    figure.setFigurePosition(positionToUndo_1);
                }
            });
        }
        localStorage.setItem('color', color);
        localStorage.setItem('movesNotation', JSON.stringify(moves));
        localStorage.setItem('moves', JSON.stringify(moves));
        localStorage.setItem('movesText', JSON.stringify(movesText));
        var list = window.document.getElementById("history-list");
        var notationText = JSON.parse(localStorage.getItem("notationText"));
        list.innerHTML =
            notationText === 'Notacja' ? movesTextHTML(movesText) : movesNotationHTML(moves);
        list.scrollTop = list.scrollHeight;
        return figures;
    }
    return figures;
}
