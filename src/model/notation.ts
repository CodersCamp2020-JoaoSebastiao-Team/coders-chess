import {movesTextHTML, movesNotationHTML} from "./stats"


const notationButton = window.document.getElementById("notation-button")!;

localStorage.setItem('notationText', JSON.stringify(notationButton.textContent));
localStorage.removeItem('koniec');
localStorage.setItem('movesText',JSON.stringify([]));
localStorage.setItem('movesNotation',JSON.stringify([]));
localStorage.setItem('boardFiguresByMove',JSON.stringify([]));
localStorage.setItem('whiteBeatenFigures',JSON.stringify([]));
localStorage.setItem('blackBeatenFigures',JSON.stringify([]));
const list = window.document.getElementById("history-list")!;



notationButton.addEventListener('click', (event: MouseEvent) => {
    if ((event.target as HTMLElement).textContent == 'Notacja') {
        (event.target as HTMLElement).textContent = 'Tekst'
        let movesNotation = JSON.parse(<string>localStorage.getItem("movesNotation")) || [];
        list.innerHTML = movesNotationHTML(movesNotation)
        localStorage.setItem('notationText', JSON.stringify('Tekst'));
    } else {
        (event.target as HTMLElement).textContent = 'Notacja'
        let movesText = JSON.parse(<string>localStorage.getItem("movesText")) || [];
        list.innerHTML = movesTextHTML(movesText)
        localStorage.setItem('notationText', JSON.stringify('Notacja'));
    }
});