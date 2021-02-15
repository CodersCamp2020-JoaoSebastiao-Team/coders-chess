
const range = <HTMLInputElement>document.getElementById("range");
const bubble = <HTMLOutputElement>document.getElementById("bubble");
const button = <HTMLButtonElement>document.querySelector('.btn');

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
button.addEventListener('click',() =>{
    let nick_white =  (<HTMLInputElement>document.getElementById("player1")).value || '';
    let nick_black =  (<HTMLInputElement>document.getElementById("player2")).value || '';
    localStorage.setItem('nick_black',nick_black);
    localStorage.setItem('nick_white',nick_white);
})




