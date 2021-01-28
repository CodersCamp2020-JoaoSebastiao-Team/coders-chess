
import { Bishop } from "../src/model/figures/bishop"
import {ChessFigure, ChessColor} from '../src/model/figure.js';
const bishop = new Bishop(ChessFigure.Bishop,ChessColor.Black, [0,0]);

describe("Simple tests of figure class methods", () => {
    it("getFigure() should return string according to figure type", () => {
        expect(bishop.getFigure()).toBe("bishop");
    })
})