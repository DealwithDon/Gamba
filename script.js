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
