import {Figure} from "../figure.js";

export class Pawn extends Figure{
    log(){
        console.log("Pawn!");
    }
    moveFigure(){
        return true;
    };
    captureFigure(){
        return true;
    };
}