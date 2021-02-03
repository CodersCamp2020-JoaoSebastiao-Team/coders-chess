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
    showDirections(boardMatrix: Array<[number, number]>) {
        console.log("Pawn board matrix: ", boardMatrix);
        let Directions: Array<[number, number]> = [];

        diagonalDirections(boardMatrix, this.getFigurePosition());

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
        function diagonalDirections(boardMatrix: Array<[number, number]>, position: [number, number]){
            for (let i = 1 ; i <= 7; i++){
                if (!findFigure(boardMatrix, position, [i, i])) {
                    Directions.push([i, i]);
                }
                else{
                    break;
                }
            }
            for (let i = 1 ; i <= 7; i++){
                if (!findFigure(boardMatrix, position, [i, -i])) {
                    Directions.push([i, -i]);
                }
                else{
                    break;
                }
            }
            for (let i = 1 ; i <= 7; i++){
                if (!findFigure(boardMatrix, position, [-i, i])) {
                    Directions.push([-i, i]);
                }
                else{
                    break;
                }
            }
            for (let i = 1 ; i <= 7; i++){
                if (!findFigure(boardMatrix, position, [-i, -i])) {
                    Directions.push([-i, -i]);
                }
                else{
                    break;
                }
            }

        }
        return Directions;
    }
}