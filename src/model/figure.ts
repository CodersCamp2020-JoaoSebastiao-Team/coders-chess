export enum ChessFigure {
    Pawn,
    Bishop,
    King,
    Knight,
    Queen,
    Rook,
}

export enum ChessColor{
    Black,
    White,
}

export abstract class Figure{
    constructor(protected figure:ChessFigure, protected color:ChessColor, protected position:[number, number]) {}
    getFigurePosition(): [number, number]{
        return [this.position[0], this.position[1]];
    };
    setFigurePosition(set:[number, number]): void{
        this.position[0] = set[0];
        this.position[1] = set[1];
    };
    getColor(): string{
        return this.color == ChessColor.Black ? "black" : "white";
    }
}

