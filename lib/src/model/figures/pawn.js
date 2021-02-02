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
        console.log("Pawn board matrix: ", boardMatrix);
        var Directions = [];
        if (this.getColor() == "white") {
            if (this.getFigurePosition()[1] == 6) {
                Directions.push([0, -2]);
                Directions.push([0, -1]);
            }
            else if (this.getFigurePosition()[1] != 0) {
                Directions.push([0, -1]);
            }
        }
        else {
            if (this.getFigurePosition()[1] == 1) {
                Directions.push([0, 2]);
                Directions.push([0, 1]);
            }
            else if (this.getFigurePosition()[1] != 7) {
                Directions.push([0, 1]);
            }
        }
        return Directions;
    };
    return Pawn;
}(Figure));
export { Pawn };
