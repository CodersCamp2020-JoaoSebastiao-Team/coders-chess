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
}