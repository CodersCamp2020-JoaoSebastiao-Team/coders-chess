import {Figure} from "../figure.js";

export class Pawn extends Figure{
    log(){
        console.log("Pawn!");
    }
    moveFigure(position: [number,number]){
        const actualPosition = this.getFigurePosition();
        this.setFigurePosition([actualPosition[0]+position[0],actualPosition[1]-position[1]]);
        return true;
    };
    captureFigure(){
        return true;
    };
}