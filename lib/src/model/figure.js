export var ChessFigure;
(function (ChessFigure) {
    ChessFigure[ChessFigure["Pawn"] = 0] = "Pawn";
    ChessFigure[ChessFigure["Bishop"] = 1] = "Bishop";
    ChessFigure[ChessFigure["King"] = 2] = "King";
    ChessFigure[ChessFigure["Knight"] = 3] = "Knight";
    ChessFigure[ChessFigure["Queen"] = 4] = "Queen";
    ChessFigure[ChessFigure["Rook"] = 5] = "Rook";
})(ChessFigure || (ChessFigure = {}));
export var ChessColour;
(function (ChessColour) {
    ChessColour[ChessColour["Black"] = 0] = "Black";
    ChessColour[ChessColour["White"] = 1] = "White";
})(ChessColour || (ChessColour = {}));
var Figure = /** @class */ (function () {
    function Figure(figure, colour, position) {
        this.figure = figure;
        this.colour = colour;
        this.position = position;
    }
    Figure.prototype.getFigurePosition = function () {
        return [this.position[0], this.position[1]];
    };
    ;
    Figure.prototype.setFigurePosition = function (set) {
        this.position[0] = set[0];
        this.position[1] = set[1];
    };
    ;
    return Figure;
}());
export { Figure };
