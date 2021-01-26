
 import {ChessFigure, ChessColor} from '../src/model/figure.js';
 import { Bishop } from '../src/model/figures/bishop.js';
 import { Pawn } from '../src/model/figures/pawn.js';
 import { King } from '../src/model/figures/king.js';
 import { Knight } from '../src/model/figures/knight.js';
 import { Queen } from '../src/model/figures/queen.js';
 import { Rook } from '../src/model/figures/rook.js';
const bishop1 = new Bishop(ChessFigure.Bishop, ChessColor.Black, [0,0]);
const pawn1 = new Pawn(ChessFigure.Pawn, ChessColor.Black, [0,0]);
const king1 = new King(ChessFigure.King, ChessColor.Black, [0,0]);
const knight1 = new Knight(ChessFigure.Knight, ChessColor.Black, [0,0]);
const queen1 = new Queen(ChessFigure.Queen, ChessColor.Black, [0,0]);
const rook1 = new Rook(ChessFigure.Rook, ChessColor.Black, [0,0]);

//  bishop1.log();
//  pawn1.log();
//  king1.log();
//  knight1.log();
//  queen1.log();
//  rook1.log();
console.log(pawn1.getColor());
