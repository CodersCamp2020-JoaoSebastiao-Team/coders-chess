import {Figure} from "../figure.js";

export class Rook extends Figure{
    log(){
        console.log("Rook!");
    }
    moveFigure(){
        return true;
    };
    captureFigure(){
        return true;
    };
    showDirections(boardMatrix:Array<[number, number]>){
        console.log("Pawn board matrix: ",boardMatrix);
        let Directions:Array<[number, number]> = [];
        return Directions;
    }
}