import {Figure, ChessFigure, ChessColor} from "./figure";
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
            + "x" + figureName(opponentFigure?.getFigureNumber()) + figurePosition(moveTo.getFigurePosition())
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
    switch (figure) {
        case ChessFigure.Pawn.valueOf(): {
            return  "P";
        }
        case ChessFigure.Bishop.valueOf(): {
            return  "B";
        }
        case ChessFigure.King.valueOf(): {
            return "K";
        }
        case ChessFigure.Knight.valueOf(): {
            return  "N";
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

function makeFigureObjectFromNotation(move: string, color: string): (Pawn | Rook | Knight | Bishop | King | Queen){
    let colorEnum: ChessColor = color == 'white'?ChessColor.Black:ChessColor.White
    let position = figurePositionNumbers(move.substr(5,2))
    switch (move[4]) {
        case 'P':
            return new Pawn(ChessFigure.Pawn, colorEnum, position, false)
        case 'Q':
            return new Queen(ChessFigure.Queen, colorEnum, position, false)
        case 'R':
            return new Rook(ChessFigure.Rook, colorEnum, position, false)
        case 'B':
            return new Bishop(ChessFigure.Bishop, colorEnum, position, false)
        case 'K':
            return new King(ChessFigure.King, colorEnum, position, false)
        case 'N':
            return new Knight(ChessFigure.Knight, colorEnum, position, false)
        default:
            return new Knight(ChessFigure.Knight, colorEnum, position, false)
    }
}

function figurePositionNumbers(figurePosition: string): [number, number]{
    let posRow = 0;
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
        case  'e': {
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
export function undoMove(contest:Game): Array<Pawn | Rook | Knight | Bishop | King | Queen>{
    let moves = JSON.parse(<string>localStorage.getItem('movesNotation'));
    let movesText = JSON.parse(<string>localStorage.getItem('movesText'));
    const lastMoveText = movesText.pop()
    const lastMove = moves.pop()

    let figures = contest.getGameFigures();
    if (lastMove){
        const color:string = localStorage.getItem('color')=='white'?'black':'white';
        const positionToUndo = figurePositionNumbers(lastMove.substr(1,2))
        if (lastMove.includes('x')){
            let lastPosition = figurePositionNumbers(lastMove.substr(5,2))
            figures.map(figure=>{
                let position = figure.getFigurePosition();
                if (position[0]===lastPosition[0] && position[1] === lastPosition[1]){
                    figure.setFigurePosition(positionToUndo)
                }
            });
            figures.push(makeFigureObjectFromNotation(lastMove,color))
        }else {
            let lastPosition = figurePositionNumbers(lastMove.substr(3,2))
            figures.map(figure=>{
                let position = figure.getFigurePosition();
                if (position[0]===lastPosition[0] && position[1] === lastPosition[1]){
                    figure.setFigurePosition(positionToUndo)
                }
            });
        }
        localStorage.setItem('color', color);
        localStorage.setItem('movesNotation', JSON.stringify(moves))
        localStorage.setItem('moves', JSON.stringify(moves))
        localStorage.setItem('movesText',JSON.stringify(movesText));
        const list = window.document.getElementById("history-list")!;
        let notationText = JSON.parse(<string>localStorage.getItem("notationText"))
        list.innerHTML =
            notationText === 'Notacja' ? movesTextHTML(movesText) : movesNotationHTML(moves);
        list.scrollTop = list.scrollHeight;
        return figures;
    }
    return figures
}