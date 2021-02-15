var blackTimeLeft;
var whiteTimeLeft;
var timeLimit = 1;
var blackTimePassed = 0;
var whiteTimePassed = 0;
var whiteTime = document.querySelector(".white_time");
var blackTime = document.querySelector(".black_time");
var dead_black = document.querySelector(".dead-black-figures");
var dead_white = document.querySelector(".dead-white-figures");
var timer_white = document.querySelector(".white_time");
var timer_black = document.querySelector(".black_time");
var results = document.querySelector(".results");
var time_head = document.querySelector(".time_head");
var bubblee = localStorage.getItem("bubble");
var currentColor = "white";
if (typeof bubblee == 'string')
    timeLimit = parseFloat(bubblee) * 60;
whiteTime.innerHTML = "<p>" + formatTime(timeLimit) + "</p>";
blackTime.innerHTML = "<p>" + formatTime(timeLimit) + "</p>";
var array_of_beat_white_figures = [];
var array_of_beat_black_figures = [];
function formatTime(time) {
    var minutes = Math.floor(time / 60) > 9 ? "" + Math.floor(time / 60) : "0" + Math.floor(time / 60);
    var seconds = time % 60 > 9 ? "" + time % 60 : "0" + time % 60;
    return minutes + ":" + seconds;
}
function updateWhiteTimer() {
    timer_black.style.boxShadow = "none";
    timer_white.style.boxShadow = "0 4px 4px rgba(0,0,0,.25), 4px 4px 40px red";
    whiteTimePassed++;
    whiteTimeLeft = timeLimit - whiteTimePassed;
    whiteTime.innerHTML = "<p>" + formatTime(whiteTimeLeft) + "</p>";
}
function updateBlackTimer() {
    timer_white.style.boxShadow = "none";
    timer_black.style.boxShadow = "0 4px 4px rgba(0,0,0,.25), 4px 4px 40px red";
    blackTimePassed++;
    blackTimeLeft = timeLimit - blackTimePassed;
    blackTime.innerHTML = "<p>" + formatTime(blackTimeLeft) + "</p>";
}
function startTimer() {
    var timerInterval = setInterval(function () {
        var color = localStorage.getItem("color");
        if (typeof color === 'string') {
            if (currentColor !== color) {
                currentColor = color;
            }
            if (color === 'white')
                updateWhiteTimer();
            else
                updateBlackTimer();
        }
        if (blackTimeLeft == 0 || whiteTimeLeft == 0) {
            localStorage.setItem('koniec', 'koniec');
            if (blackTimeLeft == 0) {
                results.innerHTML = "<p>WHITE WON BY TIME!!!</p>";
            }
            else {
                results.innerHTML = "<p>BLACK WON BY TIME!!!</p>";
            }
            clearInterval(timerInterval);
        }
        if (localStorage.getItem('checkmate')) {
            clearInterval(timerInterval);
        }
    }, 1000);
}
startTimer();
export function getBeatFigures() {
    var moveText = localStorage.getItem("movesText");
    var array_moves_texts;
    if (typeof moveText == 'string') {
        array_moves_texts = moveText.split(",");
    }
    var last_move;
    if (typeof array_moves_texts === 'object') {
        last_move = array_moves_texts[array_moves_texts.length - 1];
    }
    console.log(last_move);
    if (last_move) {
        var color = localStorage.getItem('color') == 'white' ? 'black' : 'white';
        if (color === 'black' && last_move.includes('beat')) {
            var index = last_move.indexOf("beat");
            last_move = last_move.slice(index, last_move.length - 1);
            console.log(last_move);
            array_of_beat_black_figures.push(returnFigureName(last_move));
        }
        if (color === 'white' && last_move.includes('beat')) {
            var index = last_move.indexOf("beat");
            last_move = last_move.slice(index, last_move.length - 1);
            console.log(last_move);
            array_of_beat_white_figures.push(returnFigureName(last_move));
        }
    }
    updateDeadFiguresInHTML();
}
function updateDeadFiguresInHTML() {
    var white_img = "";
    var black_img = "";
    var value_black = 0;
    var value_white = 0;
    array_of_beat_white_figures.forEach(function (element) {
        white_img += " <img src=" + getUrlOfSVG('white', element) + ">";
        dead_white.innerHTML = white_img;
        value_white += getValueOfFigure(element);
    });
    array_of_beat_black_figures.forEach(function (element) {
        black_img += " <img src=" + getUrlOfSVG('black', element) + ">";
        dead_black.innerHTML = black_img;
        value_black -= getValueOfFigure(element);
    });
    if (value_black + value_white != 0) {
        value_white + value_black > 0 ? time_head.innerHTML = "<p>Bia\u0142e +" + (value_black + value_white) + "</p><p>Czarne</p>"
            : time_head.innerHTML = "<p>Bia\u0142e</p><p>Czarne +" + (-value_white - value_black) + "</p>";
    }
    else {
        time_head.innerHTML = "<p>Bia\u0142e</p><p>Czarne</p>";
    }
}
function getUrlOfSVG(color, figure) {
    if (color == "black") {
        switch (figure) {
            case "Pawn":
                return "./figures/pawnOrange.svg";
            case "Bishop":
                return "./figures/bishopOrange.svg";
            case "Knight":
                return "./figures/knightOrange.svg";
            case "Queen":
                return "./figures/queenOrange.svg";
            case "Rook":
                return "./figures/rookOrange.svg";
            default:
                return "";
        }
    }
    if (color == "white") {
        switch (figure) {
            case "Pawn":
                return "./figures/pawnPink.svg";
            case "Bishop":
                return "./figures/bishopPink.svg";
            case "Knight":
                return "./figures/knightPink.svg";
            case "Queen":
                return "./figures/queenPink.svg";
            case "Rook":
                return "./figures/rookPink.svg";
            default:
                return "";
        }
    }
    return "";
}
function returnFigureName(str) {
    if (str.includes('Pawn'))
        return 'Pawn';
    else if (str.includes('Queen'))
        return 'Queen';
    else if (str.includes('Bishop'))
        return 'Bishop';
    else if (str.includes('Knight'))
        return 'Knight';
    return 'Rook';
}
function getValueOfFigure(figure) {
    switch (figure) {
        case "Pawn":
            return 1;
        case "Bishop":
            return 3;
        case "Knight":
            return 3;
        case "Queen":
            return 9;
        case "Rook":
            return 5;
        default:
            return 0;
    }
}
