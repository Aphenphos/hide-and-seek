// import needed modules
import { getRandomItem, score } from './utils.js';

// state
const spots = ['tree', 'boulder', 'shed'];
let total = 0;
let wins = 0;
let losses = 0;
let spot = '';
let guessed = '';
let timeout = 0;

function handleGuess(guess) {

    guessed = guess;

    spot = getRandomItem(spots);
    if (spot === guess) wins++; else losses++;
    total++;

    clearTimeout(timeout);

    displayResults();
    displayHidingSpots();
}


const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

function resetClasses() {
    treeButton.classList.remove('face', 'guessed');
    shedButton.classList.remove('face', 'guessed');
    boulderButton.classList.remove('face', 'guessed');
}

const spotMap = new Map();
spotMap.set('shed', shedButton);
spotMap.set('tree', treeButton);
spotMap.set('boulder', boulderButton);

function displayHidingSpots() {
    resetClasses();

    spotMap.get(spot)?.classList.add('face');
    spotMap.get(guessed).classList.add('guessed');

/* Using element map (learned from david) instead of the messy ifs 
    if (guessed === 'tree') {
        treeButton.classList.add('guessed');
    }
    if (guessed === 'boulder') {
        boulderButton.classList.add('guessed');
    }
    if (guessed === 'shed') {
        shedButton.classList.add('guessed');
    }

    if (spot === 'tree') {
        treeButton.classList.add('face');
    }
    if (spot === 'shed') {
        shedButton.classList.add('face');
    }
    if (spot === 'boulder') {
        boulderButton.classList.add('face');
    }
*/

    timeout = setTimeout(resetClasses, 2000);
}

treeButton.addEventListener('click', () => {
    handleGuess('tree');

});

boulderButton.addEventListener('click', () => {
    handleGuess('boulder');
});

shedButton.addEventListener('click', () => {
    handleGuess('shed');
});

    
const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');
const totalDisplay = document.getElementById('total-display');


function displayResults() {

    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    totalDisplay.textContent = total;

}


displayHidingSpots();
displayResults();
