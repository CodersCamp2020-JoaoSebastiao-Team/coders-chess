import {Figure} from "../figure.js";

export class King extends Figure{
    log(){
        console.log("King!");
    }
    moveFigure(){
        return true;
    };
    captureFigure(){
        return true;
    };
}