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
}