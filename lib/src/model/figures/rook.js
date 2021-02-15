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
var Rook = /** @class */ (function (_super) {
    __extends(Rook, _super);
    function Rook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rook.prototype.showDirections = function (boardMatrix) {
        var Directions = [];
        straightDirections(boardMatrix, this.getFigurePosition());
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
        return Directions;
    };
    Rook.prototype.showCaptures = function (boardMatrix) {
        var Directions = [];
        straightDirections(boardMatrix, this.getFigurePosition());
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
        function straightDirections(boardMatrix, position) {
            for (var i = 1; i <= 7; i++) {
                if (findFigure(boardMatrix, position, [0, i])[0] && !findFigure(boardMatrix, position, [0, i])[1]) {
                    Directions.push([0, i]);
                    break;
                }
            }
            for (var i = 1; i <= 7; i++) {
                if (findFigure(boardMatrix, position, [0, -i])[0] && !findFigure(boardMatrix, position, [0, -i])[1]) {
                    Directions.push([0, -i]);
                    break;
                }
            }
            for (var i = 1; i <= 7; i++) {
                if (findFigure(boardMatrix, position, [i, 0])[0] && !findFigure(boardMatrix, position, [i, 0])[1]) {
                    Directions.push([i, 0]);
                    break;
                }
            }
            for (var i = 1; i <= 7; i++) {
                if (findFigure(boardMatrix, position, [-i, 0])[0] && !findFigure(boardMatrix, position, [-i, 0])[1]) {
                    Directions.push([-i, 0]);
                    break;
                }
            }
        }
        return Directions;
    };
    return Rook;
}(Figure));
export { Rook };
