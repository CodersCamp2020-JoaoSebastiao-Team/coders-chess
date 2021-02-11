let blackTimeLeft:number
let whiteTimeLeft:number;
let timeLimit : number = 1;
let blackTimePassed:number = 0;
let whiteTimePassed:number = 0;
const whiteTime = <HTMLElement>document.querySelector(".white_time");
const blackTime = <HTMLElement>document.querySelector(".black_time");
const dead_black = <HTMLElement>document.querySelector(".dead-black-figures");
const dead_white = <HTMLElement>document.querySelector(".dead-white-figures");
const timer_white = <HTMLElement>document.querySelector(".white_time");
const timer_black = <HTMLElement>document.querySelector(".black_time");
const results = <HTMLElement>document.querySelector(".results");
let bubblee= localStorage.getItem("bubble");
let currentColor = "white";
if (typeof bubblee=='string')
   timeLimit = parseFloat(bubblee)*60;
whiteTime.innerHTML = `<p>${formatTime(timeLimit)}</p>`
blackTime.innerHTML = `<p>${formatTime(timeLimit)}</p>`
let array_of_beat_white_figures:string[] = [];
let array_of_beat_black_figures:string[] = [];

function formatTime(time:number):string{
    let minutes = Math.floor(time / 60) > 9 ? `${Math.floor(time / 60)}` : `0${Math.floor(time / 60)}`;
    let seconds = time % 60 > 9 ? `${time % 60}` : `0${time % 60}`;
    return `${minutes}:${seconds}`;
  }

function updateWhiteTimer():void{
    timer_black.style.boxShadow= "none"; 
    timer_white.style.boxShadow= "0 4px 4px rgba(0,0,0,.25), 4px 4px 40px red"; 
    whiteTimePassed++;
    whiteTimeLeft = timeLimit - whiteTimePassed;
    whiteTime.innerHTML = `<p>${formatTime(whiteTimeLeft)}</p>`
}

function updateBlackTimer():void{
    timer_white.style.boxShadow= "none"; 
    timer_black.style.boxShadow= "0 4px 4px rgba(0,0,0,.25), 4px 4px 40px red"; 
    blackTimePassed++;
    blackTimeLeft = timeLimit - blackTimePassed;
    blackTime.innerHTML = `<p>${formatTime(blackTimeLeft)}</p>`
}

function startTimer():void{
        const timerInterval = setInterval(() => {
          
            let color = localStorage.getItem("color");
            if(typeof color==='string'){
                if(currentColor!==color){
                    currentColor = color;
                }
                if(color==='white') updateWhiteTimer()
                else updateBlackTimer();
            }

            if(blackTimeLeft == 0 || whiteTimeLeft == 0){
                localStorage.setItem('koniec','koniec');
                if(blackTimeLeft==0) results.innerHTML = `<p>WHITE WON BY TIME!!!</p>`;
                results.innerHTML = `<p>BLACK WON BY TIME!!!</p>`;
                clearInterval(timerInterval)
            }
        }, 1000)
}

startTimer();



export function getBeatFigures():void{
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
    updateDeadFiguresInHTML();
}

function updateDeadFiguresInHTML():void{
    let white_img:string = "";
    let black_img:string = "";
    array_of_beat_white_figures.forEach(element => {
        white_img +=` <img src=${getUrlOfSVG('white',element)}>`
        dead_white.innerHTML = white_img;
    });
    array_of_beat_black_figures.forEach(element =>{
        black_img += ` <img src=${getUrlOfSVG('black',element)}>`
        dead_black.innerHTML = black_img;
    });

}

function getUrlOfSVG(color:string,figure:string):string{
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
};


function returnFigureName(str:string):string{
    if(str.includes('Pawn')) return 'Pawn';
    else if(str.includes('Queen')) return 'Queen';
    else if(str.includes('Bishop')) return 'Bishop';
    else if(str.includes('Knight')) return 'Knight';
    return 'Rook';
}


