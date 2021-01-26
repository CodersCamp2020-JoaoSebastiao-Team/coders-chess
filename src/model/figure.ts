export enum ChessFigure {
    Pawn,
    Bishop,
    King,
    Knight,
    Queen,
    Rook,
}

export enum ChessColour{
    Black,
    White,
}

export abstract class Figure{
    constructor(protected figure:ChessFigure, protected colour:ChessColour, protected position:[number, number]) {}
    getFigurePosition(): [number, number]{
        return [this.position[0], this.position[1]];
    };
    setFigurePosition(set:[number, number]): void{
        this.position[0] = set[0];
        this.position[1] = set[1];
    };

}

