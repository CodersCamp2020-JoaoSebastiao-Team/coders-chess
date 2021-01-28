const rangeSlider = <HTMLInputElement>document.getElementById("rs-range-line");
const rangeBullet = <HTMLInputElement>document.getElementById("rs-bullet");


if(rangeSlider){
   rangeSlider.addEventListener("input", showSliderValue, false); 
}


function showSliderValue() {
    if (rangeSlider && rangeBullet){
        rangeBullet.innerHTML = (<HTMLInputElement>document.getElementById("rs-range-line")).value;
        const bulletPosition:number = parseFloat(rangeSlider.value) / parseFloat(rangeSlider.max);
        rangeBullet.style.left = (bulletPosition * 578) + "px";
    }
  
}