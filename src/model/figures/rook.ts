import {Figure} from "../figure.js";

export class Rook extends Figure{
    showDirections(boardMatrix: Array<[number, number]>) {
        let Directions: Array<[number, number]> = [];

        straightDirections(boardMatrix, this.getFigurePosition());

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
        function straightDirections(boardMatrix: Array<[number, number]>, position: [number, number]){
            for (let i = 1 ; i <= 7; i++){
                if (!findFigure(boardMatrix, position, [0, i])) {
                    Directions.push([0, i]);
                }
                else{
                    break;
                }
            }
            for (let i = 1 ; i <= 7; i++){
                if (!findFigure(boardMatrix, position, [0, -i])) {
                    Directions.push([0, -i]);
                }
                else{
                    break;
                }
            }
            for (let i = 1 ; i <= 7; i++){
                if (!findFigure(boardMatrix, position, [i, 0])) {
                    Directions.push([i, 0]);
                }
                else{
                    break;
                }
            }
            for (let i = 1 ; i <= 7; i++){
                if (!findFigure(boardMatrix, position, [-i, 0])) {
                    Directions.push([-i, 0]);
                }
                else{
                    break;
                }
            }

        }
        return Directions;
    }
    showCaptures(boardMatrix: Array<[number, number]>) {
        let Directions: Array<[number, number]> = [];

        straightDirections(boardMatrix, this.getFigurePosition());

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
        function straightDirections(boardMatrix: Array<[number, number]>, position: [number, number]){
            for (let i = 1 ; i <= 7; i++){
                if (findFigure(boardMatrix, position, [0, i])[0] && !findFigure(boardMatrix, position, [0, i])[1]) {
                    Directions.push([0, i]);
                    break;
                }
            }
            for (let i = 1 ; i <= 7; i++){
                if (findFigure(boardMatrix, position, [0, -i])[0] && !findFigure(boardMatrix, position, [0, -i])[1]) {
                    Directions.push([0, -i]);
                    break;
                }
            }
            for (let i = 1 ; i <= 7; i++){
                if (findFigure(boardMatrix, position, [i, 0])[0] && !findFigure(boardMatrix, position, [i, 0])[1]) {
                    Directions.push([i, 0]);
                    break;
                }
            }
            for (let i = 1 ; i <= 7; i++){
                if (findFigure(boardMatrix, position, [-i, 0])[0] && !findFigure(boardMatrix, position, [-i, 0])[1]) {
                    Directions.push([-i, 0]);
                    break;
                }
            }

        }
        return Directions;
    }

}