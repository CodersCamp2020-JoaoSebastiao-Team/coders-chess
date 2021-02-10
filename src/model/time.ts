let blackTimeLeft:number;
let whiteTimeLeft:number;
let timeLimit : number = 10;
let blackTimePassed:number = 0;
let whiteTimePassed:number = 0;
const whiteTime = <HTMLElement>document.querySelector(".white_time");
const blackTime = <HTMLElement>document.querySelector(".black_time");
const dead_black = document.querySelector(".dead-black-figures");
const dead_white = document.querySelector(".dead-white-figures");
let bubblee= localStorage.getItem("bubble");
console.log(typeof localStorage.getItem("bubble"))
let currentColor = "white";
if (typeof bubblee=='string')
   timeLimit = parseFloat(bubblee)*60;
whiteTime.innerHTML = `<p>${formatTime(timeLimit)}</p>`
blackTime.innerHTML = `<p>${formatTime(timeLimit)}</p>`

let array_of_beat_white_figures:string[] = [];
let array_of_beat_black_figures:string[] = [];

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
                if(currentColor!==color){
                    getBeatFigures();
                    currentColor = color;
                }
                if(color==='white') updateWhiteTimer()
                else updateBlackTimer();
            }

            if(blackTimeLeft == 0 || whiteTimeLeft == 0){
                clearInterval(timerInterval)
            }
        }, 1000)
     
}

startTimer();


function getBeatFigures():void{
    let moveText:string|null = localStorage.getItem("movesText");
    let array_moves_texts;
    if(typeof moveText=='string'){
        array_moves_texts = moveText.split(","); 
    }
  
    let last_move:string|undefined;
    if(typeof array_moves_texts==='object'){
       last_move = array_moves_texts[array_moves_texts.length-1]
    }
  
    if(last_move?.includes('black') && last_move.includes('beat')){
        let index:number = last_move.indexOf("beat");
        last_move=last_move.slice(index,last_move.length-1);
        array_of_beat_black_figures.push(returnFigureName(last_move))
    }
      if(last_move?.includes('white') && last_move.includes('beat')){
        let index:number = last_move.indexOf("beat");
        last_move =last_move.slice(index,last_move.length-1);
        array_of_beat_white_figures.push(returnFigureName(last_move))
    }

}



function returnFigureName(str:string):string{
    if(str.includes('Pawn')) return 'Pawn';
    else if(str.includes('Queen')) return 'Queen';
    else if(str.includes('Bishop')) return 'Bishop';
    else if(str.includes('Knight')) return 'Knight';
    return 'Rook';
}


