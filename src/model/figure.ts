export enum ChessFigure {
    Pawn,
    Bishop,
    King,
    Knight,
    Queen,
    Rook,
}

export enum ChessColor {
    Black,
    White,
}

export abstract class Figure {
    constructor(protected figure: ChessFigure,
        protected color: ChessColor,
        protected position: [number, number],
        public checked: boolean) { }
    getFigurePosition(): [number, number] {
        return [this.position[0], this.position[1]];
    }
    getFigureField(): number{
        return this.position[0] + 8 * this.position[1];
    }
    setFigurePosition(set: [number, number]): void {
        this.position[0] = set[0];
        this.position[1] = set[1];
    }
    getColor(): string {
        return this.color == ChessColor.Black ? "black" : "white";
    }
    getFigure(): string {
        let figure: string = "";
        switch (this.figure) {
            case 0:
                figure = "Pawn";
                break;
            case 1:
                figure = "Bishop";
                break;
            case 2:
                figure = "King";
                break;
            case 3:
                figure = "Knight";
                break;
            case 4:
                figure = "Queen";
                break;
            case 5:
                figure = "Rook";
                break;
            default:
                figure = "none";
        }
        return figure;
    }
    getFigureNumber(): number{
        return this.figure.valueOf()
    }
    getFigureEnum():ChessFigure{
        return this.figure
    }
    getFigureColorEnum():ChessColor{
        return this.color
    }
    abstract showDirections(boardMatrix:Array<[number, number]>): Array<[number, number]>;
    abstract showCaptures(boardMatrix:Array<[number, number]>): Array<[number, number]>;
}