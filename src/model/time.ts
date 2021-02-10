let blackTimeLeft:number;
let whiteTimeLeft:number;
let timeLimit : number = 10;
let blackTimePassed:number = 0;
let whiteTimePassed:number = 0;
const whiteTime = <HTMLElement>document.querySelector(".white_time");
const blackTime = <HTMLElement>document.querySelector(".black_time");
let bubblee= localStorage.getItem("bubble");
console.log(typeof localStorage.getItem("bubble"))
if (typeof bubblee=='string')
   timeLimit = parseFloat(bubblee)*60;
whiteTime.innerHTML = `<p>${formatTime(timeLimit)}</p>`
blackTime.innerHTML = `<p>${formatTime(timeLimit)}</p>`

function formatTime(time:any){
    let minutes = Math.floor(time / 60) > 9 ? `${Math.floor(time / 60)}` : `0${Math.floor(time / 60)}`;
    let seconds = time % 60 > 9 ? `${time % 60}` : `0${time % 60}`;
    return `${minutes}:${seconds}`;
  }

function updateWhiteTimer(){
    whiteTimePassed++;
    whiteTimeLeft = timeLimit - whiteTimePassed;
    whiteTime.innerHTML = `<p>${formatTime(whiteTimeLeft)}</p>`
}

function updateBlackTimer(){
    blackTimePassed++;
    blackTimeLeft = timeLimit - blackTimePassed;
    blackTime.innerHTML = `<p>${formatTime(blackTimeLeft)}</p>`
}

function startTimer():void{
        const timerInterval = setInterval(() => {

            let color = localStorage.getItem("color");
            if(typeof color==='string'){
                if(color==='white') updateWhiteTimer()
                else updateBlackTimer();
            }

            if(blackTimeLeft == 0 || whiteTimeLeft == 0){
                clearInterval(timerInterval)
            }
        }, 1000)
     
}

startTimer();