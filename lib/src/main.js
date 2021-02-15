"use strict";
// const rangeSlider = <HTMLInputElement>document.getElementById("rs-range-line");
// const rangeBullet = <HTMLInputElement>document.getElementById("rs-bullet");
// if(rangeSlider){
//    rangeSlider.addEventListener("input", showSliderValue, false); 
// }
// function showSliderValue() {
//     if (rangeSlider && rangeBullet){
//         rangeBullet.innerHTML = (<HTMLInputElement>document.getElementById("rs-range-line")).value;
//         const bulletPosition:number = parseFloat(rangeSlider.value) / parseFloat(rangeSlider.max);
//         rangeBullet.style.left = (bulletPosition * 487) + "px";
//     }
// }
var range = document.getElementById("range");
var bubble = document.getElementById("bubble");
var button = document.querySelector('.btn');
localStorage.setItem("color", "white");
if (range) {
    range.addEventListener("input", function () {
        setBubble(range, bubble);
    }, false);
}
function setBubble(range, bubble) {
    var val = parseFloat(range.value);
    var min = parseFloat(range.min) || 1;
    var max = parseFloat(range.max) || 100;
    var offset = Number(((val - min) * 100) / (max - min));
    bubble.textContent = String(val);
    bubble.style.left = "calc(" + offset + "% - 10px)";
    bubble.style.color = 'black';
    localStorage.setItem("bubble", val.toString());
}
button.addEventListener('click', function () {
    var nick_white = document.getElementById("player1").value || '';
    var nick_black = document.getElementById("player2").value || '';
    localStorage.setItem('nick_black', nick_black);
    localStorage.setItem('nick_white', nick_white);
});
