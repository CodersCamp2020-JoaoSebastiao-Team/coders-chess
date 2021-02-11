import { movesTextHTML, movesNotationHTML } from "./stats";
var notationButton = window.document.getElementById("notation-button");
var cancelButton = window.document.getElementById("cancel-move");
localStorage.setItem('notationText', JSON.stringify(notationButton.textContent));
localStorage.removeItem('koniec');
localStorage.removeItem('movesText');
localStorage.removeItem('movesNotation');
var list = window.document.getElementById("history-list");
notationButton.addEventListener('click', function (event) {
    if (event.target.textContent == 'Notacja') {
        event.target.textContent = 'Tekst';
        var movesNotation = JSON.parse(localStorage.getItem("movesNotation")) || [];
        list.innerHTML = movesNotationHTML(movesNotation);
        localStorage.setItem('notationText', JSON.stringify('Tekst'));
    }
    else {
        event.target.textContent = 'Notacja';
        var movesText = JSON.parse(localStorage.getItem("movesText")) || [];
        list.innerHTML = movesTextHTML(movesText);
        localStorage.setItem('notationText', JSON.stringify('Notacja'));
    }
});
cancelButton.addEventListener('click', function (event) {
});
