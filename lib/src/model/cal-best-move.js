export var calcBestMove = function (figuresInGame, color, boardMatrix) {
    // List all possible moves
    var possibleMoves = [];
    var color2 = color == 'white' ? 0 : 1;
    var newArray = figuresInGame.filter(function (piece) { return piece.color == color2; });
    console.log('only good color =' + JSON.stringify(newArray));
    newArray.forEach(function (figure) {
        var moves = figure.showDirections(boardMatrix);
        if (moves !== null) {
            possibleMoves.push(moves);
        }
        console.log('pos moves' + possibleMoves);
    });
    // exit if the game is over
    // if (game.game_over() === true || possibleMoves.length === 0) return;
    // // Search for move with highest value
    // let bestMoveSoFar = null;
    // let bestMoveValue = Number.NEGATIVE_INFINITY;
    // possibleMoves.forEach(function(move) {
    //   game.move(move);
    //   var moveValue = evaluateBoard(game.board(), playerColor);
    //   if (moveValue > bestMoveValue) {
    //     bestMoveSoFar = move;
    //     bestMoveValue = moveValue;
    //   }
    //   game.undo();
    // });
    return newArray;
};
