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
var King = /** @class */ (function (_super) {
    __extends(King, _super);
    function King() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    King.prototype.log = function () {
        console.log("King!");
    };
    King.prototype.moveFigure = function () {
        return true;
    };
    ;
    King.prototype.captureFigure = function () {
        return true;
    };
    ;
    King.prototype.showDirections = function (boardMatrix) {
        console.log("Pawn board matrix: ", boardMatrix);
        var Directions = [];
        if (!findFigure(boardMatrix, this.getFigurePosition(), [0, 1])) {
            Directions.push([0, 1]);
        }
        if (!findFigure(boardMatrix, this.getFigurePosition(), [0, -1])) {
            Directions.push([0, -1]);
        }
        if (!findFigure(boardMatrix, this.getFigurePosition(), [1, 0])) {
            Directions.push([1, 0]);
        }
        if (!findFigure(boardMatrix, this.getFigurePosition(), [-1, 0])) {
            Directions.push([-1, 0]);
        }
        if (!findFigure(boardMatrix, this.getFigurePosition(), [1, 1])) {
            Directions.push([1, 1]);
        }
        if (!findFigure(boardMatrix, this.getFigurePosition(), [1, -1])) {
            Directions.push([1, -1]);
        }
        if (!findFigure(boardMatrix, this.getFigurePosition(), [-1, 1])) {
            Directions.push([-1, 1]);
        }
        if (!findFigure(boardMatrix, this.getFigurePosition(), [-1, -1])) {
            Directions.push([-1, -1]);
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
    return King;
}(Figure));
export { King };
