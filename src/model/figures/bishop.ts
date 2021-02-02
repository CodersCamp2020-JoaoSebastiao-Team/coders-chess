import {Figure} from "../figure.js";

export class Bishop extends Figure{
    log(){
        console.log("Bishop!");
    }
    moveFigure(){
        return true;
    };
    captureFigure(){
        return true;
    };
    showDirections(boardMatrix:Array<[number, number]>){
        //console.log("Pawn board matrix: ",boardMatrix);
        let Directions:Array<[number, number]> = [];
        return Directions;
    }
}