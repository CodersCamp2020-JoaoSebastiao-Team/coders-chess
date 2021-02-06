import { Figure } from "../figure.js";

export class Knight extends Figure {
    log() {
        console.log("Knight!");
    }
    moveFigure() {
        return true;
    };
    captureFigure() {
        return true;
    };
    showDirections(boardMatrix: Array<[number, number]>) {
        let Directions: Array<[number, number]> = [];

        if (!findFigure(boardMatrix, this.getFigurePosition(), [2, 1])) {
            Directions.push([2, 1]);
        }
        if (!findFigure(boardMatrix, this.getFigurePosition(), [1, 2])) {
            Directions.push([1, 2]);
        }
        if (!findFigure(boardMatrix, this.getFigurePosition(), [-1, 2])) {
            Directions.push([-1, 2]);
        }
        if (!findFigure(boardMatrix, this.getFigurePosition(), [-2, 1])) {
            Directions.push([-2, 1]);
        }
        if (!findFigure(boardMatrix, this.getFigurePosition(), [-2, -1])) {
            Directions.push([-2, -1]);
        }
        if (!findFigure(boardMatrix, this.getFigurePosition(), [-1, -2])) {
            Directions.push([-1, -2]);
        }
        if (!findFigure(boardMatrix, this.getFigurePosition(), [1, -2])) {
            Directions.push([1, -2]);
        }
        if (!findFigure(boardMatrix, this.getFigurePosition(), [2, -1])) {
            Directions.push([2, -1]);
        }


        function findFigure(boardMatrix: Array<[number, number]>, position: [number, number], value: [number, number]): boolean {
            let elementExist = false;
            boardMatrix.forEach(element => {
                if ((element[0] === (position[0] + value[0])) && (element[1] === (position[1] + value[1]))) {
                    elementExist = true;
                }
                if (position[0] + value[0] > 7 || position[0] + value[0] < 0 || position[1] + value[1] > 7 || position[1] + value[1] < 0) {
                    elementExist = true;
                }
            });
            if (elementExist) {
                return true;
            }
            else {
                return false;
            }
        }
        return Directions;
    }
    showCaptures(boardMatrix: Array<[number, number]>) {
        let Directions: Array<[number, number]> = [];

        if (findFigure(boardMatrix, this.getFigurePosition(), [2, 1])[0] == true && findFigure(boardMatrix, this.getFigurePosition(), [2, 1])[1] == false) {
            Directions.push([2, 1]);
        }
        if (findFigure(boardMatrix, this.getFigurePosition(), [1, 2])[0] == true && findFigure(boardMatrix, this.getFigurePosition(), [1, 2])[1] == false) {
            Directions.push([1, 2]);
        }
        if (findFigure(boardMatrix, this.getFigurePosition(), [-1, 2])[0] == true && findFigure(boardMatrix, this.getFigurePosition(), [-1, 2])[1] == false) {
            Directions.push([-1, 2]);
        }
        if (findFigure(boardMatrix, this.getFigurePosition(), [-2, 1])[0] == true && findFigure(boardMatrix, this.getFigurePosition(), [-2, 1])[1] == false) {
            Directions.push([-2, 1]);
        }
        if (findFigure(boardMatrix, this.getFigurePosition(), [-2, -1])[0] == true && findFigure(boardMatrix, this.getFigurePosition(), [-2, -1])[1] == false) {
            Directions.push([-2, -1]);
        }
        if (findFigure(boardMatrix, this.getFigurePosition(), [-1, -2])[0] == true && findFigure(boardMatrix, this.getFigurePosition(), [-1, -2])[1] == false) {
            Directions.push([-1, -2]);
        }
        if (findFigure(boardMatrix, this.getFigurePosition(), [1, -2])[0] == true && findFigure(boardMatrix, this.getFigurePosition(), [1, -2])[1] == false) {
            Directions.push([1, -2]);
        }
        if (findFigure(boardMatrix, this.getFigurePosition(), [2, -1])[0] == true && findFigure(boardMatrix, this.getFigurePosition(), [2, -1])[1] == false) {
            Directions.push([2, -1]);
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