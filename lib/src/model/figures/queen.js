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
var Queen = /** @class */ (function (_super) {
    __extends(Queen, _super);
    function Queen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Queen.prototype.log = function () {
        console.log("Queen!");
    };
    Queen.prototype.moveFigure = function () {
        return true;
    };
    ;
    Queen.prototype.captureFigure = function () {
        return true;
    };
    ;
    Queen.prototype.showDirections = function (boardMatrix) {
        console.log("Pawn board matrix: ", boardMatrix);
        var Directions = [];
        straightDirections(boardMatrix, this.getFigurePosition());
        diagonalDirections(boardMatrix, this.getFigurePosition());
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
        function straightDirections(boardMatrix, position) {
            for (var i = 1; i <= 7; i++) {
                if (!findFigure(boardMatrix, position, [0, i])) {
                    Directions.push([0, i]);
                }
                else {
                    break;
                }
            }
            for (var i = 1; i <= 7; i++) {
                if (!findFigure(boardMatrix, position, [0, -i])) {
                    Directions.push([0, -i]);
                }
                else {
                    break;
                }
            }
            for (var i = 1; i <= 7; i++) {
                if (!findFigure(boardMatrix, position, [i, 0])) {
                    Directions.push([i, 0]);
                }
                else {
                    break;
                }
            }
            for (var i = 1; i <= 7; i++) {
                if (!findFigure(boardMatrix, position, [-i, 0])) {
                    Directions.push([-i, 0]);
                }
                else {
                    break;
                }
            }
        }
        function diagonalDirections(boardMatrix, position) {
            for (var i = 1; i <= 7; i++) {
                if (!findFigure(boardMatrix, position, [i, i])) {
                    Directions.push([i, i]);
                }
                else {
                    break;
                }
            }
            for (var i = 1; i <= 7; i++) {
                if (!findFigure(boardMatrix, position, [i, -i])) {
                    Directions.push([i, -i]);
                }
                else {
                    break;
                }
            }
            for (var i = 1; i <= 7; i++) {
                if (!findFigure(boardMatrix, position, [-i, i])) {
                    Directions.push([-i, i]);
                }
                else {
                    break;
                }
            }
            for (var i = 1; i <= 7; i++) {
                if (!findFigure(boardMatrix, position, [-i, -i])) {
                    Directions.push([-i, -i]);
                }
                else {
                    break;
                }
            }
        }
        return Directions;
    };
    return Queen;
}(Figure));
export { Queen };
