import { ChessFigure } from "./figure";
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
            + "x" + figurePosition(moveTo.getFigurePosition());
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
    var figureLetter = "";
    switch (figure) {
        case ChessFigure.Pawn.valueOf(): {
            figureLetter = "P";
            break;
        }
        case ChessFigure.Bishop.valueOf(): {
            figureLetter = "B";
            break;
        }
        case ChessFigure.King.valueOf(): {
            figureLetter = "K";
            break;
        }
        case ChessFigure.Knight.valueOf(): {
            figureLetter = "N";
            break;
        }
        case ChessFigure.Queen.valueOf(): {
            figureLetter = "Q";
            break;
        }
        case ChessFigure.Rook.valueOf(): {
            figureLetter = "R";
        }
    }
    return figureLetter;
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
    return '<ol>' + movesNotation.map(function (move, index) { return '<li>' + index + ". " + move +
        '</li>'; }).join(' ') + '</ol>';
}
export function movesTextHTML(movesText) {
    return '<ol>' + movesText.map(function (move, index) { return '<li>' + index + ". " + move + '</li>'; }).join(' ') +
        '</ol>';
}
