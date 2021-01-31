import {Figure} from "../figure.js";

export class Queen extends Figure{
    log(){
        console.log("Queen!");
    }
    moveFigure(){
        return true;
    };
    captureFigure(){
        return true;
    };
}