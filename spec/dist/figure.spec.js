"use strict";
exports.__esModule = true;
var bishop_1 = require("../src/model/figures/bishop");
var figure_js_1 = require("../src/model/figure.js");
var bishop = new bishop_1.Bishop(figure_js_1.ChessFigure.Bishop, figure_js_1.ChessColor.Black, [0, 0]);
describe("Simple tests of figure class methods", function () {
    it("getFigure() should return string according to figure type", function () {
        expect(bishop.getFigure()).toBe("bishop");
    });
});
