import {ChessColor, ChessFigure, Figure} from "./figure";
import {Bishop} from "./figures/bishop"
import {Queen} from "./figures/queen"
import {Rook} from "./figures/rook"
import {Pawn} from "./figures/pawn"
import {Knight} from "./figures/knight"
import {King} from "./figures/king"
import {Game} from "./game";
import {returnFigureName} from "./time"


function moveToText(figure: Figure, opponentFigure: Figure | null, moveTo: Figure): string {

    let checkString = ""
    if (localStorage.getItem('checkmate')){
        checkString =  " with checkmate!"
    }else if(localStorage.getItem('check')){
        checkString =  " with check!"
    }
    if (opponentFigure !== null) {
        return `${figure.getFigure()} from ${figurePosition(figure.getFigurePosition())} `+
        `beat ${opponentFigure?.getFigure()} on ${figurePosition(moveTo.getFigurePosition())}`+
            `${checkString}`

    } else {
        return `${figure.getFigure()} move from ${figurePosition(figure.getFigurePosition())} `+
         `to ${figurePosition(moveTo.getFigurePosition())}`+
            `${checkString}`
    }

    //roszady i szach jeszcze
}

function moveToNotation(figure: Figure, opponentFigure: Figure | null, moveTo: Figure): string {
    let checkString = ""
    if (localStorage.getItem('checkmate')){
        checkString =  "++"
    }else if(localStorage.getItem('check')){
        checkString =  "+"
    }
    if (opponentFigure !== null) {

        return `${figureName(figure.getFigureNumber())}${figurePosition(figure.getFigurePosition())}x`+
            `${figureName(opponentFigure?.getFigureNumber())}${figurePosition(moveTo.getFigurePosition())}`+
            `${checkString}`
    } else {
        return `${figureName(figure.getFigureNumber())}${figurePosition(figure.getFigurePosition())}`+
                `${figurePosition(moveTo.getFigurePosition())}`+
            `${checkString}`
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

function figureCreate(figure: any): Pawn | Rook | Knight | Bishop | King | Queen {
    switch (figure.figure) {
        case 0:{
            return new Pawn(ChessFigure.Pawn, figure.color, figure.position, false)
        }
        case 1:{
            return new Bishop(ChessFigure.Bishop, figure.color, figure.position, false)
        }
        case 2:{
            return new King(ChessFigure.King, figure.color, figure.position, false)
        }
        case 3:{
            return new Knight(ChessFigure.Knight, figure.color, figure.position, false)
        }
        case 4:{
            return new Queen(ChessFigure.Queen, figure.color, figure.position, false)
        }
        case 5:{
            return new Rook(ChessFigure.Rook, figure.color, figure.position, false)
        }
    }
    return new Pawn(ChessFigure.Rook, figure.color, figure.position, false)


}
export function saveMoveToLocalStorage(opponentFigure: Figure | null, moveTo: Figure,
                                       gameFiguresArray: Array<Pawn | Rook | Knight | Bishop | King | Queen>) {

    let movesText = JSON.parse(<string>localStorage.getItem("movesText")) || [];
    let movesNotation = JSON.parse(<string>localStorage.getItem("movesNotation")) || [];
    let boardFiguresByMove = JSON.parse(<string>localStorage.getItem("boardFiguresByMove")) || [];

    setBeatenFiguresLocalStorage(opponentFigure)
    boardFiguresByMove.push(gameFiguresArray)
    let figure = JSON.parse(<string>localStorage.getItem("figure"))
    let figureObject = makeFigureObject(figure, moveTo);
    movesText.push(moveToText(figureObject, opponentFigure, moveTo));
    movesNotation.push(moveToNotation(figureObject, opponentFigure, moveTo));
    setLocalStorage(null, movesNotation, movesText, boardFiguresByMove)
}

function setBeatenFiguresLocalStorage(opponentFigure: Figure | null) {
    if (opponentFigure){
        if (opponentFigure.getFigureColorEnum() ==ChessColor.White){
            let whiteBeatenFigures =  JSON.parse(<string>localStorage.getItem("whiteBeatenFigures")) || [];
            whiteBeatenFigures.push(opponentFigure.getFigure())
            localStorage.setItem("whiteBeatenFigures", JSON.stringify(whiteBeatenFigures))
        }else {
            let blackBeatenFigures =  JSON.parse(<string>localStorage.getItem("blackBeatenFigures")) || [];
            blackBeatenFigures.push(opponentFigure.getFigure())
            localStorage.setItem("blackBeatenFigures", JSON.stringify(blackBeatenFigures))
        }
    }
}

function undoBeatenFigure(color: string) {
    if (color=='black'){
        let whiteBeatenFigures =  JSON.parse(<string>localStorage.getItem("whiteBeatenFigures")) || [];
        if (whiteBeatenFigures){
            whiteBeatenFigures.pop()
            localStorage.setItem("whiteBeatenFigures", JSON.stringify(whiteBeatenFigures))
        }
    }else {
        let blackBeatenFigures =  JSON.parse(<string>localStorage.getItem("blackBeatenFigures")) || [];
        if (blackBeatenFigures){
            blackBeatenFigures.pop()
            localStorage.setItem("blackBeatenFigures", JSON.stringify(blackBeatenFigures))
        }
    }
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
        return `<div class="move"> 
             <div class="move-number">${index+1}</div>
             <div class="white-move moves">${move[0]}</div>
            ${move[1] ? '<div class="black-move moves">' + move[1] + '</div>' : ''}</div>`

        /*
        return '<div class="move">' +
            '<div class="move-number">' + moveNumber + '</div>' +
            '<div class="white-move moves">' + move[0] + '</div>' +
            blackMove +
            '</div>'*/
    }).join(' ')
}


export function undoMove(contest:Game): Array<Pawn | Rook | Knight | Bishop | King | Queen>{

    let boardFiguresByMove = JSON.parse(<string>localStorage.getItem("boardFiguresByMove")) || [];

    if (boardFiguresByMove[0] === undefined ||boardFiguresByMove[1] === undefined){
        setLocalStorage('white', [], [], [])
        contest.setGameFigures([])
        contest.gameInit()
        return contest.getGameFigures()
    }else{
        boardFiguresByMove.pop();
        let lastMoveboardFigures = boardFiguresByMove[boardFiguresByMove.length-1]
        let gameFigures: Array<Pawn | Rook | Knight | Bishop | King | Queen> = [];
        for (let figure of lastMoveboardFigures) {
            gameFigures.push(figureCreate(figure))
        }
        let movesNotation = JSON.parse(<string>localStorage.getItem('movesNotation'));
        let movesText = JSON.parse(<string>localStorage.getItem('movesText'));
        const color:string = localStorage.getItem('color')=='white'?'black':'white';
        movesNotation.pop();
        let lastMove = movesText.pop()
        if (lastMove.includes('beat')){
            undoBeatenFigure(color);
        }
        setLocalStorage(color, movesNotation, movesText, boardFiguresByMove)
        return gameFigures;
    }
}
function setLocalStorage(color:string|null, movesNotation:Array<string>,movesText: Array<string>,
                         boardFiguresByMove:Array<string>) {
    if (color!==null){
        localStorage.setItem('color', color);
    }
    localStorage.setItem('movesNotation', JSON.stringify(movesNotation))
    localStorage.setItem('movesText',JSON.stringify(movesText));
    localStorage.setItem('boardFiguresByMove',JSON.stringify(boardFiguresByMove));
    const list = window.document.getElementById("history-list")!;
    let notationText = JSON.parse(<string>localStorage.getItem("notationText"))
    list.innerHTML =
        notationText === 'Notacja' ? movesTextHTML(movesText) : movesNotationHTML(movesNotation);
    list.scrollTop = list.scrollHeight;
}
export function seeLastMovesEventListener(contest:Game, boardFields:any){
    let moves = window.document.getElementsByClassName("moves");
    let boardFiguresByMove = JSON.parse(<string>localStorage.getItem("boardFiguresByMove")) || [];
    for (let i=0; i<moves.length;i++){
        moves[i].addEventListener('click',(event)=>{
            let gameFigures: Array<Pawn | Rook | Knight | Bishop | King | Queen> = [];
            for (let figure of boardFiguresByMove[i]) {
                gameFigures.push(figureCreate(figure))
            }
            contest.refreshBoard(gameFigures, boardFields)
        })
    }

}