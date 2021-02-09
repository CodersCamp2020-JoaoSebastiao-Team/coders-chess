import {Figure, ChessFigure} from "./figure";
import {Bishop} from "./figures/bishop"
import {Queen} from "./figures/queen"
import {Rook} from "./figures/rook"
import {Pawn} from "./figures/pawn"
import {Knight} from "./figures/knight"
import {King} from "./figures/king"

function moveToText(figure: Figure, opponentFigure: Figure | null, moveTo: Figure): string {

    if (opponentFigure !== null) {
        return figure.getColor() + " " + figure.getFigure() + " from " + figurePosition(figure.getFigurePosition())
            + " beat " + opponentFigure?.getFigure() + " on " + figurePosition(moveTo.getFigurePosition())
    } else {
        return figure.getColor() + " " + figure.getFigure() + " move from " +
            figurePosition(figure.getFigurePosition()) + " to " + figurePosition(moveTo.getFigurePosition())
    }
    //roszady i szach jeszcze
}

function moveToNotation(figure: Figure, opponentFigure: Figure | null, moveTo: Figure): string {
    if (opponentFigure !== null) {
        return figureName(figure.getFigureNumber()) + figurePosition(figure.getFigurePosition())
            + "x" + figurePosition(moveTo.getFigurePosition())
    } else {
        return figureName(figure.getFigureNumber()) + figurePosition(figure.getFigurePosition()) +
            figurePosition(moveTo.getFigurePosition())
    }
    //roszady i szach jeszcze
}


function figurePosition(figurePosition: [number, number]): string {
    let positionString: string = "";
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

function figureName(figure: number): string {
    let figureLetter: string = "";
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

export function saveMoveToLocalStorage(opponentFigure: Figure | null, moveTo: Figure) {

    let movesText = JSON.parse(<string>localStorage.getItem("movesText")) || [];
    let movesNotation = JSON.parse(<string>localStorage.getItem("movesNotation")) || [];
    movesText = [...movesText];
    movesNotation = [...movesNotation];
    let figure = JSON.parse(<string>localStorage.getItem("figure"))
    let figureObject = makeFigureObject(figure, moveTo);
    movesText.push(moveToText(figureObject, opponentFigure, moveTo));
    movesNotation.push(moveToNotation(figureObject, opponentFigure, moveTo));
    localStorage.setItem("movesText", JSON.stringify(movesText));
    localStorage.setItem("movesNotation", JSON.stringify(movesNotation));
    const list = window.document.getElementById("history-list")!;

    list.innerHTML = '<div style="word-wrap: break-word; overflow: auto; height: 100% ">' +
        '<ol>' + movesText.map((move: string, index: number) => '<li style="color: whitesmoke; ' +
            'font-size: 16px; margin-left: 10px" >' + index + ". " + move + '</li>').join(' ') + '</ol></div>';

}

function makeFigureObject(figure: any, moveTo: Figure) {
    switch (moveTo.getFigureEnum()) {
        case ChessFigure.Pawn:
            return new Pawn(ChessFigure.Pawn, moveTo.getFigureColorEnum(), figure.position, false)
        case ChessFigure.Queen:
            return new Queen(ChessFigure.Queen, moveTo.getFigureColorEnum(), figure.position, false)
        case ChessFigure.Rook:
            return new Rook(ChessFigure.Rook, moveTo.getFigureColorEnum(), figure.position, false)
        case ChessFigure.Bishop:
            return new Bishop(ChessFigure.Bishop, moveTo.getFigureColorEnum(), figure.position, false)
        case ChessFigure.King:
            return new King(ChessFigure.King, moveTo.getFigureColorEnum(), figure.position, false)
        case ChessFigure.Knight:
            return new Knight(ChessFigure.Knight, moveTo.getFigureColorEnum(), figure.position, false)
    }
}