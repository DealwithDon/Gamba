// document.addEventListener('DOMContentLoaded', () => {
    const dzwignia = document.getElementById('dzwignia');
    const startButton = document.getElementById('start');

    startButton.addEventListener('click', () => {
        // Dodaj klasę animacji do dźwigni
        dzwignia.classList.add('animate');
        
        // Usuń klasę po zakończeniu animacji
        dzwignia.addEventListener('animationend', () => {
            dzwignia.classList.remove('animate');
        }, { once: true });
    });
// });
var x;
var slot1 = [];
var slot2 = [];
var slot3 = [];

function losujLiczbe() {
    return Math.floor(Math.random() * 6) + 1;
}

function losujLiczbeObrotow() {
    x = Math.floor(Math.random() * 6) + 4;
}

function dodajLiczbeDoTablicyXrazy(x, tablica) {
    for (var i = 0; i < x; i++) {
        let liczba = losujLiczbe();
        tablica.push(liczba);
    }
}

function losujOwoce() {
    losujLiczbeObrotow();
    dodajLiczbeDoTablicyXrazy(x, slot1);

    losujLiczbeObrotow();
    dodajLiczbeDoTablicyXrazy(x, slot2);

    losujLiczbeObrotow();
    dodajLiczbeDoTablicyXrazy(x, slot3);

    console.log("Slot 1:", slot1);
    console.log("Slot 2:", slot2);
    console.log("Slot 3:", slot3);
}

losujOwoce();
