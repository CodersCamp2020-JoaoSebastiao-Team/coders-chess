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
var info = document.querySelector(".info");
var whoPlays = document.querySelector("#whoPlays");
var time_head_white = document.querySelector("#time_head_white");
var time_head_black = document.querySelector("#time_head_black");
var nick_black = localStorage.getItem('nick_black') || "Gracz 2";
var nick_white = localStorage.getItem('nick_white') || "Gracz 1";
time_head_white.innerText = nick_white;
time_head_black.innerText = nick_black;
var bubblee = localStorage.getItem("bubble");
var currentColor = "white";
if (typeof bubblee == 'string')
    timeLimit = parseFloat(bubblee) * 60;
whiteTime.innerHTML = "<p>" + formatTime(timeLimit) + "</p>";
blackTime.innerHTML = "<p>" + formatTime(timeLimit) + "</p>";
function formatTime(time) {
    var minutes = Math.floor(time / 60) > 9 ? "" + Math.floor(time / 60) : "0" + Math.floor(time / 60);
    var seconds = time % 60 > 9 ? "" + time % 60 : "0" + time % 60;
    return minutes + ":" + seconds;
}
function updateWhiteTimer() {
    whoPlays.innerText = nick_white + ", Twoja kolej!";
    timer_black.style.boxShadow = "none";
    whiteTimePassed++;
    whiteTimeLeft = timeLimit - whiteTimePassed;
    whiteTime.innerHTML = "<p>" + formatTime(whiteTimeLeft) + "</p>";
}
function updateBlackTimer() {
    whoPlays.innerText = nick_black + ", Twoja kolej!";
    timer_white.style.boxShadow = "none";
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
                results.innerHTML = "<p>Koniec czasu. Wygra\u0142 " + nick_white + "!</p>";
            }
            else {
                results.innerHTML = "<p>Koniec czasu. Wygra\u0142 " + nick_black + "!</p>";
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
    var beatenWhite = JSON.parse(localStorage.getItem("whiteBeatenFigures")) || [];
    var beatenBlack = JSON.parse(localStorage.getItem("blackBeatenFigures")) || [];
    var white_img = "";
    var black_img = "";
    var value_black = 0;
    var value_white = 0;
    if (beatenWhite.length > 0) {
        beatenWhite.forEach(function (element) {
            white_img += " <img src=" + getUrlOfSVG('black', element) + ">";
            dead_white.innerHTML = white_img;
            value_white += getValueOfFigure(element);
        });
    }
    else {
        dead_white.innerHTML = '<p></p>';
    }
    if (beatenBlack.length > 0) {
        beatenBlack.forEach(function (element) {
            black_img += " <img src=" + getUrlOfSVG('white', element) + ">";
            dead_black.innerHTML = black_img;
            value_black -= getValueOfFigure(element);
        });
    }
    else {
        dead_black.innerHTML = '<p></p>';
    }
    if (value_black + value_white != 0) {
        value_white + value_black > 0 ? time_head.innerHTML = "<p>" + nick_white + " +" + (value_black + value_white) + "</p><p>" + nick_black + "</p>"
            : time_head.innerHTML = "<p>" + nick_white + "</p><p>" + nick_black + " +" + (-value_white - value_black) + "</p>";
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
export function returnFigureName(str) {
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
