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
    Rook.prototype.log = function () {
        console.log("Rook!");
    };
    Rook.prototype.moveFigure = function () {
        return true;
    };
    ;
    Rook.prototype.captureFigure = function () {
        return true;
    };
    ;
    Rook.prototype.showDirections = function (boardMatrix) {
        console.log("Pawn board matrix: ", boardMatrix);
        var Directions = [];
        return Directions;
    };
    return Rook;
}(Figure));
export { Rook };
