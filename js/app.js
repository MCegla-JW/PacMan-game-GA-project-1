
/*-------------------------------- Constants --------------------------------*/
/*
Game Board elements: 
1 - wall 
2 - pellet 
3 - Pacman
4 - specialPellet 
5 - ghostOne - red 
6 - ghostTwo - blue 
7 - ghostThree - pink
8 - ghostFour - orange
 */

const gameBoard = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1,
    1, 4, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 4, 1,
    1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
    1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1,
    1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1,
    1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 5, 2, 2, 2, 2, 2, 2, 2, 1, 1,
    1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1,
    1, 2, 2, 2, 2, 2, 2, 2, 1, 6, 7, 8, 1, 2, 1, 1, 1, 2, 1, 1,
    1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1,
    1, 4, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 4, 1,
    1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1,
    1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1,
    1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 2, 2, 1, 1,
    1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 1, 2, 1, 1,
    1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 1,
    1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1,
    1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

/*---------------------------- Variables (state) ----------------------------*/
//let pacman = { name: "Pacman" };
let currentPoints = 0;
let scaredGhost = false;
let strongPacman = false; // may not need it as scaredGhost will indicate Pacman ate the strong pellet 
let gameOver = false;
let specialPellet = 4;

//let ghost = 
//let pellet = 
//let specialPellet = 

/*------------------------ Cached Element References ------------------------*/
const boardCell = document.querySelectorAll('.cell'); // selecting a square from the grid
console.log('cell id', boardCell); // 400 cells in grid 

const startGameButton = document.querySelector('.start-button'); // Start Game button
console.log('am i selected', startGameButton);

const resetGameButton = document.querySelector('.reset-button'); // Reset Game button 
console.log('am i selected', resetGameButton);

const scoreBoard = document.querySelector('.score-board');
console.log('am i selected', scoreBoard);


/*------------------------ Functions ------------------------*/

// place elements on gameBoard - check index and add classlist - if 

const placeGameElements = () => {
    if (gameOver) return;
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === 1) {
            boardCell[i].classList.add('wall');
            console.log(`Placed wall element at ${i}`);
        } else if (gameBoard[i] === 2) {
            boardCell[i].classList.add('pellet');
            console.log(`Placed pellet element at ${i}`);
        } else if (gameBoard[i] === 3) {
            boardCell[i].classList.add('pacman');
            console.log(`Placed pacman element at ${i}`);
        } else if (gameBoard[i] === 4) {
            boardCell[i].classList.add('specialPellet');
            console.log(`Placed special pellet element at ${i}`);
        } else if (gameBoard[i] === 5) {
            boardCell[i].classList.add('ghostOne');
            console.log(`Placed ghost one element at ${i}`);
        } else if (gameBoard[i] === 6) {
            boardCell[i].classList.add('ghostTwo');
            console.log(`Placed ghost two element at ${i}`);
        } else if (gameBoard[i] === 7) {
            boardCell[i].classList.add('ghostThree');
            console.log(`Placed ghost three element at ${i}`);
        } else if (gameBoard[i] === 8) {
            boardCell[i].classList.add('ghostFour');
            console.log(`Placed ghost four element at ${i}`);
        }
    }
};

// Initialize game on load of page 
const init = () => {
    placeGameElements();
    currentPoints = 0; // not sure if needed
};
init();



/*------------------------ Add Event Listeners ------------------------*/

//start game by clicking button 
startGameButton.addEventListener('click', ()=> {
    init();
});


// Pacman is placed at i = 310 at the start of game 
// Ghosts: ghostOne - i = 150, ghostTwo - i = 189, ghostThree - i = 190; ghostFour - i = 191;
// Special pellet is placed at i = 41, 58, 221, 238 



