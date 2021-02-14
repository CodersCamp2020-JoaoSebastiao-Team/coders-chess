import { ChessFigure } from "./figure";
import { Bishop } from "./figures/bishop";
import { Queen } from "./figures/queen";
import { Rook } from "./figures/rook";
import { Pawn } from "./figures/pawn";
import { Knight } from "./figures/knight";
import { King } from "./figures/king";
function moveToText(figure, opponentFigure, moveTo) {
    if (opponentFigure !== null) {
        return figure.getFigure() + " from " + figurePosition(figure.getFigurePosition())
            + " beat " + (opponentFigure === null || opponentFigure === void 0 ? void 0 : opponentFigure.getFigure()) + " on " + figurePosition(moveTo.getFigurePosition());
    }
    else {
        return figure.getFigure() + " move from " +
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
function figureCreate(figure) {
    switch (figure.figure) {
        case 0: {
            return new Pawn(ChessFigure.Pawn, figure.color, figure.position, false);
        }
        case 1: {
            return new Bishop(ChessFigure.Bishop, figure.color, figure.position, false);
        }
        case 2: {
            return new King(ChessFigure.King, figure.color, figure.position, false);
        }
        case 3: {
            return new Knight(ChessFigure.Knight, figure.color, figure.position, false);
        }
        case 4: {
            return new Queen(ChessFigure.Queen, figure.color, figure.position, false);
        }
        case 5: {
            return new Rook(ChessFigure.Rook, figure.color, figure.position, false);
        }
    }
    return new Pawn(ChessFigure.Rook, figure.color, figure.position, false);
}
export function saveMoveToLocalStorage(opponentFigure, moveTo, gameFiguresArray) {
    var movesText = JSON.parse(localStorage.getItem("movesText")) || [];
    var movesNotation = JSON.parse(localStorage.getItem("movesNotation")) || [];
    var boardFiguresByMove = JSON.parse(localStorage.getItem("boardFiguresByMove")) || [];
    boardFiguresByMove.push(gameFiguresArray);
    var figure = JSON.parse(localStorage.getItem("figure"));
    var figureObject = makeFigureObject(figure, moveTo);
    movesText.push(moveToText(figureObject, opponentFigure, moveTo));
    movesNotation.push(moveToNotation(figureObject, opponentFigure, moveTo));
    setLocalStorage(null, movesNotation, movesText, boardFiguresByMove);
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
        var blackMove = move[1] ? '<div class="black-move moves">' + move[1] + '</div>' : '';
        var moveNumber = index + 1;
        return '<div class="move">' +
            '<div class="move-number">' + moveNumber + '</div>' +
            '<div class="white-move moves">' + move[0] + '</div>' +
            blackMove +
            '</div>';
    }).join(' ');
}
export function undoMove(contest) {
    var boardFiguresByMove = JSON.parse(localStorage.getItem("boardFiguresByMove")) || [];
    if (boardFiguresByMove[0] === undefined || boardFiguresByMove[1] === undefined) {
        setLocalStorage('white', [], [], []);
        contest.setGameFigures([]);
        contest.gameInit();
        return contest.getGameFigures();
    }
    else {
        boardFiguresByMove.pop();
        var lastMoveboardFigures = boardFiguresByMove[boardFiguresByMove.length - 1];
        var gameFigures = [];
        for (var _i = 0, lastMoveboardFigures_1 = lastMoveboardFigures; _i < lastMoveboardFigures_1.length; _i++) {
            var figure = lastMoveboardFigures_1[_i];
            gameFigures.push(figureCreate(figure));
        }
        var movesNotation = JSON.parse(localStorage.getItem('movesNotation'));
        var movesText = JSON.parse(localStorage.getItem('movesText'));
        var color = localStorage.getItem('color') == 'white' ? 'black' : 'white';
        movesText.pop();
        movesNotation.pop();
        setLocalStorage(color, movesNotation, movesText, boardFiguresByMove);
        return gameFigures;
    }
}
function setLocalStorage(color, movesNotation, movesText, boardFiguresByMove) {
    if (color !== null) {
        localStorage.setItem('color', color);
    }
    localStorage.setItem('movesNotation', JSON.stringify(movesNotation));
    localStorage.setItem('movesText', JSON.stringify(movesText));
    localStorage.setItem('boardFiguresByMove', JSON.stringify(boardFiguresByMove));
    var list = window.document.getElementById("history-list");
    var notationText = JSON.parse(localStorage.getItem("notationText"));
    list.innerHTML =
        notationText === 'Notacja' ? movesTextHTML(movesText) : movesNotationHTML(movesNotation);
    list.scrollTop = list.scrollHeight;
}
export function seeLastMovesEventListener(contest, boardFields) {
    var moves = window.document.getElementsByClassName("moves");
    var boardFiguresByMove = JSON.parse(localStorage.getItem("boardFiguresByMove")) || [];
    var _loop_1 = function (i) {
        moves[i].addEventListener('click', function (event) {
            var gameFigures = [];
            for (var _i = 0, _a = boardFiguresByMove[i]; _i < _a.length; _i++) {
                var figure = _a[_i];
                gameFigures.push(figureCreate(figure));
            }
            contest.refreshBoard(gameFigures, boardFields);
        });
    };
    for (var i = 0; i < moves.length; i++) {
        _loop_1(i);
    }
}
