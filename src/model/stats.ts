import {Figure, ChessFigure} from "./figure";
import {Bishop} from "./figures/bishop"
import {Queen} from "./figures/queen"
import {Rook} from "./figures/rook"
import {Pawn} from "./figures/pawn"
import {Knight} from "./figures/knight"
import {King} from "./figures/king"
import {Game} from "./game";

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


    let figure = JSON.parse(<string>localStorage.getItem("figure"))
    let figureObject = makeFigureObject(figure, moveTo);
    movesText.push(moveToText(figureObject, opponentFigure, moveTo));
    movesNotation.push(moveToNotation(figureObject, opponentFigure, moveTo));
    localStorage.setItem("movesText", JSON.stringify(movesText));
    localStorage.setItem("movesNotation", JSON.stringify(movesNotation));
    const list = window.document.getElementById("history-list")!;
    let notationText = JSON.parse(<string>localStorage.getItem("notationText"))
    list.innerHTML =
        notationText === 'Notacja' ? movesTextHTML(movesText) : movesNotationHTML(movesNotation);
    list.scrollTop = list.scrollHeight;

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

export function movesNotationHTML(movesNotation: Array<string>) {
    return movesHTML(movesNotation)
}

export function movesTextHTML(movesText: Array<string>) {
    return movesHTML(movesText)
}

function movesHTML(movesArray: Array<string>) {
    let moves: Array<Array<string>> = [];
    movesArray.forEach((move: string, index: number) => {
        if (index % 2 === 0) {
            moves.push([move])
        } else {
            moves[moves.length - 1].push(move)
        }
    })
    return moves.map((move: Array<string>, index: number) => {
        let blackMove = move[1] ? '<div class="black-move">' + move[1] + '</div>' : ''
        let moveNumber = index + 1;
        return '<div class="move">' +
            '<div class="move-number">' + moveNumber + '</div>' +
            '<div class="white-move">' + move[0] + '</div>' +
            blackMove +
            '</div>'
    }).join(' ')
}
export function undoMove(contest:Game){
    console.log(contest)
}