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

const range = <HTMLInputElement>document.getElementById("range");
const bubble = <HTMLOutputElement>document.getElementById("bubble");
localStorage.setItem("color","white")

if (range) {
    range.addEventListener("input", () => {
        setBubble(range, bubble)
    }, false);
}

function setBubble(range: HTMLInputElement, bubble: HTMLOutputElement) {
    const val: number = parseFloat(range.value);

    const min: number = parseFloat(range.min) || 1;
    const max: number = parseFloat(range.max) || 100;

    const offset = Number(((val - min) * 100) / (max - min));

    bubble.textContent = String(val);

    bubble.style.left = `calc(${offset}% - 10px)`;
    bubble.style.color = 'black';
    localStorage.setItem("bubble", val.toString());
}


