var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Figure } from "../figure.js";
var Pawn = /** @class */ (function (_super) {
    __extends(Pawn, _super);
    function Pawn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pawn.prototype.log = function () {
        console.log("Pawn!");
    };
    Pawn.prototype.moveFigure = function (position) {
        var actualPosition = this.getFigurePosition();
        this.setFigurePosition([actualPosition[0] + position[0], actualPosition[1] - position[1]]);
        return true;
    };
    ;
    Pawn.prototype.captureFigure = function () {
        return true;
    };
    ;
    Pawn.prototype.showDirections = function (boardMatrix) {
        //console.log("Pawn board matrix: ", boardMatrix);
        var Directions = [];
        if (this.getColor() == "white") {
            if (this.getFigurePosition()[1] == 6) {
                if (!findFigure(boardMatrix, this.getFigurePosition(), [0, -2])) {
                    Directions.push([0, -2]);
                }
                if (!findFigure(boardMatrix, this.getFigurePosition(), [0, -1])) {
                    Directions.push([0, -1]);
                }
            }
            else if (this.getFigurePosition()[1] != 0) {
                if (!findFigure(boardMatrix, this.getFigurePosition(), [0, -1])) {
                    Directions.push([0, -1]);
                }
            }
        }
        else {
            if (this.getFigurePosition()[1] == 1) {
                if (!findFigure(boardMatrix, this.getFigurePosition(), [0, 2])) {
                    Directions.push([0, 2]);
                }
                if (!findFigure(boardMatrix, this.getFigurePosition(), [0, 1])) {
                    Directions.push([0, 1]);
                }
            }
            else if (this.getFigurePosition()[1] != 7) {
                if (!findFigure(boardMatrix, this.getFigurePosition(), [0, 1])) {
                    Directions.push([0, 1]);
                }
            }
        }
        function findFigure(boardMatrix, position, value) {
            var elementExist = false;
            boardMatrix.forEach(function (element) {
                if ((element[0] === (position[0] + value[0])) && (element[1] === (position[1] + value[1]))) {
                    elementExist = true;
                }
                if (position[0] + value[0] > 7 || position[0] + value[0] < 0 || position[1] + value[1] > 7 || position[1] + value[1] < 0) {
                    elementExist = true;
                }
            });
            if (elementExist) {
                return true;
            }
            else {
                return false;
            }
        }
        return Directions;
    };
    Pawn.prototype.showCaptures = function (boardMatrix) {
        var Directions = [];
        if (this.getColor() == "white") {
            if (findFigure(boardMatrix, this.getFigurePosition(), [-1, -1])[0] && !findFigure(boardMatrix, this.getFigurePosition(), [-1, -1])[1]) {
                Directions.push([-1, -1]);
            }
            if (findFigure(boardMatrix, this.getFigurePosition(), [1, -1])[0] && !findFigure(boardMatrix, this.getFigurePosition(), [1, -1])[1]) {
                Directions.push([1, -1]);
            }
        }
        else {
            if (findFigure(boardMatrix, this.getFigurePosition(), [-1, 1])[0] && !findFigure(boardMatrix, this.getFigurePosition(), [-1, 1])[1]) {
                Directions.push([-1, 1]);
            }
            if (findFigure(boardMatrix, this.getFigurePosition(), [1, 1])[0] && !findFigure(boardMatrix, this.getFigurePosition(), [1, 1])[1]) {
                Directions.push([1, 1]);
            }
        }
        function findFigure(boardMatrix, position, value) {
            var elementExist = false;
            var elementOutOfRange = false;
            boardMatrix.forEach(function (element) {
                if ((element[0] === (position[0] + value[0])) && (element[1] === (position[1] + value[1]))) {
                    elementExist = true;
                }
                if (position[0] + value[0] > 7 || position[0] + value[0] < 0 || position[1] + value[1] > 7 || position[1] + value[1] < 0) {
                    elementOutOfRange = true;
                }
            });
            if (elementExist && elementOutOfRange) {
                return [true, true];
            }
            else if (elementExist && !elementOutOfRange) {
                return [true, false];
            }
            else if (!elementExist && elementOutOfRange) {
                return [false, true];
            }
            else {
                return [false, false];
            }
        }
        return Directions;
    };
    return Pawn;
}(Figure));
export { Pawn };
