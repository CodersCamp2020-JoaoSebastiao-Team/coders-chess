import { Figure } from "../figure.js";

export class Pawn extends Figure {
    moveFigure(position: [number, number]) {
        const actualPosition = this.getFigurePosition();
        this.setFigurePosition([actualPosition[0] + position[0], actualPosition[1] - position[1]]);
        return true;
    };
    showDirections(boardMatrix: Array<[number, number]>) {
        let Directions: Array<[number, number]> = [];
        if (this.getColor() == "white") {
            if (this.getFigurePosition()[1] == 6) {
                if (!findFigure(boardMatrix, this.getFigurePosition(), [0, -2]) && !findFigure(boardMatrix, this.getFigurePosition(), [0, -1])){
                    Directions.push([0, -2]);
                }
                if (!findFigure(boardMatrix, this.getFigurePosition(), [0, -1])){
                    Directions.push([0, -1]);
                }
            }
            else if (this.getFigurePosition()[1] != 0) {
                if (!findFigure(boardMatrix, this.getFigurePosition(), [0, -1])){
                    Directions.push([0, -1]);
                }
            }
        }
        else {
            if (this.getFigurePosition()[1] == 1) {
                if (!findFigure(boardMatrix, this.getFigurePosition(), [0, 2]) && !findFigure(boardMatrix, this.getFigurePosition(), [0, 1])){
                    Directions.push([0, 2]);
                }
                if (!findFigure(boardMatrix, this.getFigurePosition(), [0, 1])){
                    Directions.push([0, 1]);
                }
            }
            else if (this.getFigurePosition()[1] != 7) {
                if (!findFigure(boardMatrix, this.getFigurePosition(), [0, 1])){
                    Directions.push([0, 1]);
                }
            }
        }
        function findFigure(boardMatrix: Array<[number, number]>, position: [number,number], value: [number, number]): boolean{
            let elementExist = false;
            boardMatrix.forEach(element => {
                if ((element[0] === (position[0]+value[0])) && (element[1] === (position[1]+value[1]))){
                    elementExist = true;
                }
                if(position[0]+value[0]>7 || position[0]+value[0]<0 || position[1]+value[1]>7 || position[1]+value[1]<0){
                    elementExist = true;
                }
            });
            if (elementExist){
                return true;
            }
            else{
                return false;
            }
        }

        return Directions;
    }
    showCaptures(boardMatrix: Array<[number, number]>) {
        let Directions: Array<[number, number]> = [];
        if (this.getColor() == "white") {
                if (findFigure(boardMatrix, this.getFigurePosition(), [-1, -1])[0] && !findFigure(boardMatrix, this.getFigurePosition(), [-1, -1])[1]){
                    Directions.push([-1, -1]);
                }
                if (findFigure(boardMatrix, this.getFigurePosition(), [1, -1])[0] && !findFigure(boardMatrix, this.getFigurePosition(), [1, -1])[1]){
                    Directions.push([1, -1]);
                }
        }
        else {
            if (findFigure(boardMatrix, this.getFigurePosition(), [-1, 1])[0] && !findFigure(boardMatrix, this.getFigurePosition(), [-1, 1])[1]){
                Directions.push([-1, 1]);
            }
            if (findFigure(boardMatrix, this.getFigurePosition(), [1, 1])[0] && !findFigure(boardMatrix, this.getFigurePosition(), [1, 1])[1]){
                Directions.push([1, 1]);
            }
        }
        function findFigure(boardMatrix: Array<[number, number]>, position: [number, number], value: [number, number]): [boolean,boolean] {
            let elementExist = false;
            let elementOutOfRange = false;
            boardMatrix.forEach(element => {
                if ((element[0] === (position[0] + value[0])) && (element[1] === (position[1] + value[1]))) {
                    elementExist = true;
                }
                if (position[0] + value[0] > 7 || position[0] + value[0] < 0 || position[1] + value[1] > 7 || position[1] + value[1] < 0) {
                    elementOutOfRange = true;
                }
            });
            if (elementExist && elementOutOfRange) {
                return [true,true];
            }
            else if(elementExist && !elementOutOfRange) {
                return [true,false];
            }
            else if(!elementExist && elementOutOfRange) {
                return [false,true]
            }
            else{
                return [false,false]
            }
        }
        return Directions;
    }
}