"use strict";
var blackTimeLeft;
var whiteTimeLeft;
var timeLimit = 10;
var blackTimePassed = 0;
var whiteTimePassed = 0;
var whiteTime = document.querySelector(".white_time");
var blackTime = document.querySelector(".black_time");
var dead_black = document.querySelector(".dead-black-figures");
var dead_white = document.querySelector(".dead-white-figures");
var bubblee = localStorage.getItem("bubble");
console.log(typeof localStorage.getItem("bubble"));
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
    whiteTimePassed++;
    whiteTimeLeft = timeLimit - whiteTimePassed;
    whiteTime.innerHTML = "<p>" + formatTime(whiteTimeLeft) + "</p>";
}
function updateBlackTimer() {
    blackTimePassed++;
    blackTimeLeft = timeLimit - blackTimePassed;
    blackTime.innerHTML = "<p>" + formatTime(blackTimeLeft) + "</p>";
}
function startTimer() {
    var timerInterval = setInterval(function () {
        var color = localStorage.getItem("color");
        if (typeof color === 'string') {
            if (currentColor !== color) {
                getBeatFigures();
                currentColor = color;
            }
            if (color === 'white')
                updateWhiteTimer();
            else
                updateBlackTimer();
        }
        if (blackTimeLeft == 0 || whiteTimeLeft == 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}
startTimer();
function getBeatFigures() {
    var moveText = localStorage.getItem("movesText");
    var array_moves_texts;
    if (typeof moveText == 'string') {
        array_moves_texts = moveText.split(",");
    }
    var last_move;
    if (typeof array_moves_texts === 'object') {
        last_move = array_moves_texts[array_moves_texts.length - 1];
    }
    if ((last_move === null || last_move === void 0 ? void 0 : last_move.includes('black')) && last_move.includes('beat')) {
        var index = last_move.indexOf("beat");
        last_move = last_move.slice(index, last_move.length - 1);
        array_of_beat_black_figures.push(returnFigureName(last_move));
    }
    if ((last_move === null || last_move === void 0 ? void 0 : last_move.includes('white')) && last_move.includes('beat')) {
        var index = last_move.indexOf("beat");
        last_move = last_move.slice(index, last_move.length - 1);
        array_of_beat_white_figures.push(returnFigureName(last_move));
    }
    console.log(array_of_beat_white_figures);
    console.log(array_of_beat_black_figures);
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
