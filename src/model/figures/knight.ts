import {Figure} from "../figure.js";

export class Knight extends Figure{
    log(){
        console.log("Knight!");
    }
    moveFigure(){
        return true;
    };
    captureFigure(){
        return true;
    };
}