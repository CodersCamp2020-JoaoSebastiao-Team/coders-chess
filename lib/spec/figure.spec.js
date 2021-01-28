import { Bishop } from "../src/model/figures/bishop";
import { ChessFigure, ChessColor } from '../src/model/figure.js';
var bishop = new Bishop(ChessFigure.Bishop, ChessColor.Black, [0, 0]);
describe("Simple tests of figure class methods", function () {
    it("getFigure() should return string according to figure type", function () {
        expect(bishop.getFigure()).toBe("bishop");
    });
});
