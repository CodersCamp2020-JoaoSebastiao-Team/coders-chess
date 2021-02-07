export var ChessFigure;
(function (ChessFigure) {
    ChessFigure[ChessFigure["Pawn"] = 0] = "Pawn";
    ChessFigure[ChessFigure["Bishop"] = 1] = "Bishop";
    ChessFigure[ChessFigure["King"] = 2] = "King";
    ChessFigure[ChessFigure["Knight"] = 3] = "Knight";
    ChessFigure[ChessFigure["Queen"] = 4] = "Queen";
    ChessFigure[ChessFigure["Rook"] = 5] = "Rook";
})(ChessFigure || (ChessFigure = {}));
export var ChessColor;
(function (ChessColor) {
    ChessColor[ChessColor["Black"] = 0] = "Black";
    ChessColor[ChessColor["White"] = 1] = "White";
})(ChessColor || (ChessColor = {}));
var Figure = /** @class */ (function () {
    function Figure(figure, color, position, checked) {
        this.figure = figure;
        this.color = color;
        this.position = position;
        this.checked = checked;
    }
    Figure.prototype.getFigurePosition = function () {
        return [this.position[0], this.position[1]];
    };
    Figure.prototype.getFigureField = function () {
        return this.position[0] + 8 * this.position[1];
    };
    Figure.prototype.setFigurePosition = function (set) {
        this.position[0] = set[0];
        this.position[1] = set[1];
    };
    Figure.prototype.getColor = function () {
        return this.color == ChessColor.Black ? "black" : "white";
    };
    Figure.prototype.getFigure = function () {
        var figure = "";
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
    };
    Figure.prototype.getFigureNumber = function () {
        return this.figure.valueOf();
    };
    Figure.prototype.getFigureEnum = function () {
        return this.figure;
    };
    Figure.prototype.getFigureColorEnum = function () {
        return this.color;
    };
    return Figure;
}());
export { Figure };
