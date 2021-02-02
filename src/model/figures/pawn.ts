import { Figure } from "../figure.js";

export class Pawn extends Figure {
    log() {
        console.log("Pawn!");
    }
    moveFigure(position: [number, number]) {
        const actualPosition = this.getFigurePosition();
        this.setFigurePosition([actualPosition[0] + position[0], actualPosition[1] - position[1]]);
        return true;
    };
    captureFigure() {
        return true;
    };
    showDirections(boardMatrix: Array<[number, number]>) {
        //console.log("Pawn board matrix: ", boardMatrix);
        let Directions: Array<[number, number]> = [];
        if (this.getColor() == "white") {
            if (this.getFigurePosition()[1] == 6) {
                Directions.push([0, -2]);
                Directions.push([0, -1]);
            }
            else if (this.getFigurePosition()[1] != 0) {
                Directions.push([0, -1]);
            }
        }
        else {
            if (this.getFigurePosition()[1] == 1) {
                Directions.push([0, 2]);
                Directions.push([0, 1]);
            }
            else if (this.getFigurePosition()[1] != 7) {
                Directions.push([0, 1]);
            }
        }
        return Directions;
    }
}