"use strict";
var blackTimeLeft;
var whiteTimeLeft;
var timeLimit = 10;
var blackTimePassed = 0;
var whiteTimePassed = 0;
var whiteTime = document.querySelector(".white_time");
var blackTime = document.querySelector(".black_time");
var bubblee = localStorage.getItem("bubble");
console.log(typeof localStorage.getItem("bubble"));
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
