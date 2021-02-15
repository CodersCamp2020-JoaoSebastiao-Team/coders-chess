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
const time_head = <HTMLElement>document.querySelector(".time_head");
const info = <HTMLElement>document.querySelector(".info");
const whoPlays = <HTMLElement>document.querySelector("#whoPlays");

const time_head_white = <HTMLElement>document.querySelector("#time_head_white");
const time_head_black = <HTMLElement>document.querySelector("#time_head_black");

const nick_black = localStorage.getItem('nick_black')||"Gracz 2";
const nick_white = localStorage.getItem('nick_white')||"Gracz 1";

time_head_white.innerText = nick_white;
time_head_black.innerText = nick_black;

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
    whoPlays.innerText=`${nick_white}, Twoja kolej!`;
    timer_black.style.boxShadow= "none"; 
    whiteTimePassed++;
    whiteTimeLeft = timeLimit - whiteTimePassed;
    whiteTime.innerHTML = `<p>${formatTime(whiteTimeLeft)}</p>`
}

function updateBlackTimer():void{
    whoPlays.innerText=`${nick_black}, Twoja kolej!`;
    timer_white.style.boxShadow= "none"; 
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
                if(blackTimeLeft==0){
                    results.innerHTML = `<p>Koniec czasu. Wygrał ${nick_white}!</p>`;
                }
                else{
                    results.innerHTML = `<p>Koniec czasu. Wygrał ${nick_black}!</p>`;
                }
                clearInterval(timerInterval)
            }
            if (localStorage.getItem('checkmate')){
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
    if(last_move){
        let color = localStorage.getItem('color')=='white'?'black':'white'
        if(color==='black' && last_move.includes('beat')){
            let index:number = last_move.indexOf("beat");
            last_move=last_move.slice(index,last_move.length-1);
            array_of_beat_black_figures.push(returnFigureName(last_move))
        }
        if(color==='white' && last_move.includes('beat')){
        let index:number = last_move.indexOf("beat");
        last_move =last_move.slice(index,last_move.length-1);
        array_of_beat_white_figures.push(returnFigureName(last_move))
    }
    }


    updateDeadFiguresInHTML();
}

function updateDeadFiguresInHTML():void{
    let white_img:string = "";
    let black_img:string = "";
    let value_black:number = 0;
    let value_white:number = 0;
    array_of_beat_white_figures.forEach(element => {
        white_img +=` <img src=${getUrlOfSVG('white',element)}>`
        dead_white.innerHTML = white_img;
        value_white += getValueOfFigure(element);
    });
    array_of_beat_black_figures.forEach(element =>{
        black_img += ` <img src=${getUrlOfSVG('black',element)}>`
        dead_black.innerHTML = black_img;
        value_black -= getValueOfFigure(element);
    });
    if(value_black+value_white!=0){
        value_white+value_black>0 ? time_head.innerHTML =  `<p>${nick_white} +${value_black+value_white}</p><p>${nick_black}</p>`
        : time_head.innerHTML =  `<p>${nick_white}</p><p>${nick_black} +${-value_white-value_black}</p>`;
    }
    else{
        time_head.innerHTML =  `<p>Białe</p><p>Czarne</p>`;
    }
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
}



export function returnFigureName(str:string):string{
    if(str.includes('Pawn')) return 'Pawn';
    else if(str.includes('Queen')) return 'Queen';
    else if(str.includes('Bishop')) return 'Bishop';
    else if(str.includes('Knight')) return 'Knight';
    return 'Rook';
}


function getValueOfFigure(figure:string):number{
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