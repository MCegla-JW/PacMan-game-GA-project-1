/*--------------------------------- GAME BOARD -------------------------------------*/

let gameBoard = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1,
    1, 4, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 4, 1,
    1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
    1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1,
    1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1,
    1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 5, 2, 2, 2, 2, 2, 2, 2, 1, 1,
    1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 0, 1, 1, 2, 1, 1, 1, 2, 1, 1,
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

/*--------------------------------- GAME STATE -------------------------------------*/

let currentPoints = 0;
let totalScore = 2590;
let scaredGhost = false;
let gameOver = false;
let firstTimeGhostRelease = true;
let scaredTimer = null; // set to null to keep track if theres an active timer and prevent conflicts 

/*------------------------------PACMAN STATE -------------------------------------------*/

let previousPacIdx = 310;
let currentPacIdx = gameBoard.indexOf(3); // this is pacmans current index 

/*------------------------------ GHOST STATE ------------------------------------------*/

// an array of all four ghost positions on the board at start of gae¥me
let ghostPositions = [
    gameBoard.indexOf(5),
    gameBoard.indexOf(6),
    gameBoard.indexOf(7),
    gameBoard.indexOf(8)
];


let currentGhostOneIdx = ghostPositions[0];
let previousGhostOneIdx = currentGhostOneIdx;

let currentGhostTwoIdx = ghostPositions[1];
let previousGhostTwoIdx = currentGhostTwoIdx;

let currentGhostThreeIdx = ghostPositions[2]
let previousGhostThreeIdx = currentGhostThreeIdx

let currentGhostFourIdx = ghostPositions[3];
let previousGhostFourIdx = currentGhostFourIdx;

/*-------------------------- TIMERS & INTERVALS --------------------------------*/

let intervalGhost;
let intervalGhostOne;
let intervalGhostTwo;
let intervalGhostThree;
let intervalGhostFour;

let timeoutGhostOne;
let timeoutGhostTwo;
let timeoutGhostThree;
let timeoutGhostFour;

/*------------------------ Cached Element References ------------------------*/

const boardCell = document.querySelectorAll('.cell'); // selecting a square from the grid 400 cells in grid 

const startGameButton = document.querySelector('.start-button'); // Start Game button

const scoreBoard = document.querySelector('.score-board'); // Score Board 

const holdingImage = document.getElementById('opening-image'); // Image that will appear before button is clicked 

const gameInstructions = document.getElementById('instructions'); // Game instructions 

/*------------------------------------- Functions -----------------------------------*/

// place elements on gameBoard - check index and add classlist 
const placeGameElements = () => {
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === 1) {
            boardCell[i].classList.add('wall');
        } else if (gameBoard[i] === 2) {
            boardCell[i].classList.add('pellet');
        } else if (gameBoard[i] === 3) {
            boardCell[i].classList.add('pacman');
        } else if (gameBoard[i] === 4) {
            boardCell[i].classList.add('specialPellet');
        } else if (gameBoard[i] === 5) {
            boardCell[i].classList.add('ghostOne');
        } else if (gameBoard[i] === 6) {
            boardCell[i].classList.add('ghostTwo');
        } else if (gameBoard[i] === 7) {
            boardCell[i].classList.add('ghostThree');
        } else if (gameBoard[i] === 8) {
            boardCell[i].classList.add('ghostFour');
        }
    }
};

// Initialize game on load of page 
const init = () => {
    placeGameElements();
    if (holdingImage) { // checking if holding image exists, null would mean it doesnt 
        holdingImage.remove();
    }
    if (gameInstructions) {
        gameInstructions.remove();
    }
};


// Getting pacman' current index on board as well as the next index to his left, right, up and down 
const movePacman = (evt) => {
    if (gameOver === false) {
        previousPacIdx = currentPacIdx; // storing the value of currentPacIndex before any changes are made to it 
        let leftPacIdx = currentPacIdx - 1; // possible pacman index when moving left 
        let rightPacIdx = currentPacIdx + 1; // possible pacman index when moving right 
        let upPacIdx = currentPacIdx - 20; // possible pacman index when moving up 
        let downPacIdx = currentPacIdx + 20; // possible pacman index when moving down 
        if (evt.key === 'ArrowLeft' && gameBoard[leftPacIdx] != 1) {
            currentPacIdx = leftPacIdx;
            boardCell[previousPacIdx].classList.remove('pacman-right')
        } else if (evt.key === 'ArrowRight' && gameBoard[rightPacIdx] != 1) {
            currentPacIdx = rightPacIdx;
            boardCell[previousPacIdx].classList.remove('pacman-right')
            boardCell[rightPacIdx].classList.add('pacman-right')
        } else if (evt.key === 'ArrowUp' && gameBoard[upPacIdx] != 1) {
            currentPacIdx = upPacIdx;
            boardCell[previousPacIdx].classList.remove('pacman-right')
        } else if (evt.key === 'ArrowDown' && gameBoard[downPacIdx] != 1) {
            currentPacIdx = downPacIdx;
            boardCell[previousPacIdx].classList.remove('pacman-right')
        };
        gameBoard[currentPacIdx] = 3; // place pacman in new cell - this is the line that makes the path remember that pacman has been there and it changes 2 to 3 on console 
        pelletCollision();
        ghostCollision();
    };
};

//check win 
const checkWin = () => { // this will be called inside the collison pellet function which in turn will be called in movePacman 
    if (currentPoints === totalScore) {
        scoreBoard.textContent = `You win! Your Score is ${totalScore}!`
        startGameButton.innerHTML = 'Play Again!'
        gameOver = true;
        stopAllGhosts();
    }
};


//pacman - pellet collision
const pelletCollision = () => {
    if (boardCell[currentPacIdx].classList.contains('pellet')) { // first checking if it contains the pellet 
        boardCell[currentPacIdx].classList.remove('pellet'); // removing pellet image
        boardCell[previousPacIdx].classList.remove('pacman'); // remove Pacman image from previous index which is the saved value in here - previousPacIdx = currentPacIdx;          
        boardCell[currentPacIdx].classList.add('pacman'); // adding pacman image ;
        currentPoints = currentPoints + 10; // adding 10 points to current points
        scoreBoard.textContent = `Your Score: ${currentPoints}`; // displaying current points  
    } else if (boardCell[currentPacIdx].classList.contains('specialPellet')) { // first checking if it contains the special pellet 
        boardCell[currentPacIdx].classList.remove('specialPellet') // removing pellet image
        boardCell[previousPacIdx].classList.remove('pacman'); // remove Pacman image from previous index which is the saved value in here - previousPacIdx = currentPacIdx;          
        boardCell[currentPacIdx].classList.add('pacman'); // adding pacman image ;
        scaredGhost = true;
        ghostIsScared();
        currentPoints = currentPoints + 200; // adding 200 points to current points
        scoreBoard.textContent = `Your Score: ${currentPoints}`;  // displaying current points 
        const toySound = new Audio('./css/assets/audio/toysound.wav');
        toySound.play();
        toySound.volume = .05;
    } else {
        boardCell[previousPacIdx].classList.remove('pacman'); // remove Pacman image from previous index which is the saved value in here - previousPacIdx = currentPacIdx; 
        boardCell[currentPacIdx].classList.add('pacman'); // adding pacman image ; 
    }
    checkWin();
};

//scared Ghost 
const ghostIsScared = () => { // will have to set ghost change color to white for all 
    if (scaredTimer) { // clear any previous timer 
        clearTimeout(scaredTimer);
    }
    if (scaredGhost === true) {
        boardCell[currentGhostOneIdx].classList.remove('ghostOne');
        boardCell[currentGhostOneIdx].classList.add('scaredGhost');
    } if (scaredGhost === true) {
        boardCell[currentGhostTwoIdx].classList.remove('ghostTwo');
        boardCell[currentGhostTwoIdx].classList.add('scaredGhost');
    } if (scaredGhost === true) {
        boardCell[currentGhostThreeIdx].classList.remove('ghostThree');
        boardCell[currentGhostThreeIdx].classList.add('scaredGhost');
    } if (scaredGhost === true) {
        boardCell[currentGhostFourIdx].classList.remove('ghostFour');
        boardCell[currentGhostFourIdx].classList.add('scaredGhost');
    }
    scaredTimer = setTimeout(() => { // schedule scared ghost to last 7 seconds 
        scaredGhost = false;
        boardCell[currentGhostOneIdx].classList.remove('scaredGhost');
        boardCell[currentGhostOneIdx].classList.add('ghostOne');
        boardCell[currentGhostTwoIdx].classList.remove('scaredGhost');
        boardCell[currentGhostTwoIdx].classList.add('ghostTwo');
        boardCell[currentGhostThreeIdx].classList.remove('scaredGhost');
        boardCell[currentGhostThreeIdx].classList.add('ghostThree');
        boardCell[currentGhostFourIdx].classList.remove('scaredGhost');
        boardCell[currentGhostFourIdx].classList.add('ghostFour');
        scaredTimer = null;
    }, 7000);
};

// ghost move timer for automatic ghost movement 
const startGhostMovement = () => {
    stopAllGhosts();
    if (firstTimeGhostRelease === true) {
        timeoutGhostOne = setTimeout(() => {
            intervalGhostOne = setInterval(() => {
                ghostOneMove();
            }, 500); // this is the ghost speed while other ghosts are leaving the pen 
        }, 1000); // delay before he starts moving
        timeoutGhostTwo = setTimeout(() => {
            intervalGhostTwo = setInterval(() => {
                ghostTwoMove();
            }, 700); // this is the ghost speed while other ghosts are leaving the pen 
        }, 3000); // delay before he starts moving
        timeoutGhostThree = setTimeout(() => {
            intervalGhostThree = setInterval(() => {
                ghostThreeMove();
            }, 600); // this is the ghost speed while other ghosts are leaving the pen 
        }, 2500); // delay before he starts moving 
        timeoutGhostFour = setTimeout(() => {
            intervalGhostFour = setInterval(() => {
                ghostFourMove();
            }, 800); // this is the ghost speed while other ghosts are leaving the pen 
        }, 6000); // delay before he starts moving 
        firstTimeGhostRelease = false;
    }
};

// stop all ghost movement (to be used in gameOver)
const stopAllGhosts = () => {
    clearInterval(intervalGhost); // clear any exisitng intervals and timeouts
    clearInterval(intervalGhostOne);
    clearInterval(intervalGhostTwo);
    clearInterval(intervalGhostThree);
    clearInterval(intervalGhostFour);
    clearTimeout(timeoutGhostOne);
    clearTimeout(timeoutGhostTwo);
    clearTimeout(timeoutGhostThree);
    clearTimeout(timeoutGhostFour);
};

// gameBoard - is the graph, its a list of nodes (400) = tiles 
// each index is a vertex (vertices for plural) and its a point in the graph - location, node etc.
// vertex is one positon in the graph where edges (connections) can start or end eg. currentGhostOneIdx  and is a vertex = one position 
// my walls are still vertices, they just cant have edges - value 1 = wall - so the alogrithm will have to know where the walls are (will be able to tell because no edges there)
// value 2 = paths 
// walkable path tiles are connected to other walkable tiles with edges (edge says - from this vertex you can make it to that vertex)
// so (vertex, edge) - is a move - defines how the player can move 
// value 1 = wall - not a valid neighbour
// value 2 = path - valid neighbour, can move there 
// each valid neighbour vertex is connected to the current vertex by an edge (road)

// x - the column number 
// y - the row number 
// % - modulo operator always returns a whole number 
// using math.floor to round down to the nearest whole number 

// find ghost next step 
const width = 20; // lenght of the board (20 tiles wide)
const findGhostNextStep = (currentGhostIdx) => { // look for all possible paths from current position, since its a grid, theres only four directions
    const neighbourTiles = [];
    const x = currentGhostIdx % width;
    const y = Math.floor(currentGhostIdx / width); // the column and which tile in the column, that why we need the integer remainder 

    if (x > 0) neighbourTiles.push(currentGhostIdx - 1); // left
    if (x < 19) neighbourTiles.push(currentGhostIdx + 1); // right
    if (y > 0) neighbourTiles.push(currentGhostIdx - width) // up
    if (y < 19) neighbourTiles.push(currentGhostIdx + width); // down

    return neighbourTiles;
};

// Filter neighbouring paths that are walkable (not walls)
const getPaths = (gameBoard, currentGhostIdx) => { // find all possible walkable paths out of the array of all neigbouring paths that we got from findGhostNextStep function, filter wheter a fall or not and return only walkable paths array
    return findGhostNextStep(currentGhostIdx).filter(nextGhostIdx => gameBoard[nextGhostIdx] != 1);
};

// ghosts pathfinding 
const findBestPathToPacman = (gameGrid, currentGhostIdx, targetPacIdx) => { // gameboard - grid checked, currentGhostOneIdx - startIdx, currentPacIdx - targetIdx
    const queue = [currentGhostIdx];
    const visited = new Set();
    const previous = {};

    visited.add(currentGhostIdx);

    while (queue.length > 0) {
        const current = queue.shift();

        if (current === targetPacIdx) {
            const path = [];
            let node = targetPacIdx;
            while (node !== currentGhostIdx) {
                path.unshift(node);
                node = previous[node];
            }
            return path;
        }
        const walkablePaths = getPaths(gameGrid, current); // show all walkable paths for current Ghost one position that dont include walls 
        // looping through each walkable path 
        for (let i = 0; i < walkablePaths.length; i++) {
            const walkablePath = walkablePaths[i];
            if (!visited.has(walkablePath)) { // check if this path has already been visited
                visited.add(walkablePath); // mark is as visited so it wont be used again 
                previous[walkablePath] = current; // rememeber the path ghost came from so it can be reconstructed later 
                queue.push(walkablePath); // add this walkable path to the queue array to have saved for future moves 
            }
        }
    }
    return [];
};

// ghost movement function - one per ghost
//ghost One
const ghostOneMove = () => {
    const path = findBestPathToPacman(gameBoard, currentGhostOneIdx, currentPacIdx); // find path to pacman 
    if (path.length > 0) { // if there is a path, move ghost to next tile
        const nextGhostStep = path[0]; // start moving along the path from position 0
        boardCell[previousGhostOneIdx].classList.remove('ghostOne', 'scaredGhost');
        previousGhostOneIdx = currentGhostOneIdx;
        currentGhostOneIdx = nextGhostStep;
        if (scaredGhost === true) {
            boardCell[currentGhostOneIdx].classList.add('scaredGhost');
            boardCell[previousGhostOneIdx].classList.remove('ghostOne');
            boardCell[previousGhostOneIdx].classList.remove('scaredGhost');
        } else {
            boardCell[previousGhostOneIdx].classList.remove('ghostOne');
            boardCell[currentGhostOneIdx].classList.add('ghostOne');
        }
    }
    ghostCollision();
};

// ghost Two 
const ghostTwoMove = () => {
    const path = findBestPathToPacman(gameBoard, currentGhostTwoIdx, currentPacIdx); // find path to pacman 
    if (path.length > 0) { // if there is a path, move ghost to next tile
        const nextGhostStep = path[0]; // start moving along the path from position 0
        boardCell[previousGhostTwoIdx].classList.remove('ghostTwo', 'scaredGhost');
        previousGhostTwoIdx = currentGhostTwoIdx;
        currentGhostTwoIdx = nextGhostStep;
        if (scaredGhost) {
            boardCell[currentGhostTwoIdx].classList.add('scaredGhost');
            boardCell[previousGhostTwoIdx].classList.remove('ghostTwo');
            boardCell[previousGhostTwoIdx].classList.remove('scaredGhost');
        } else {
            boardCell[previousGhostTwoIdx].classList.remove('ghostTwo');
            boardCell[currentGhostTwoIdx].classList.add('ghostTwo');
        }
    }
    ghostCollision();
};

// ghost Three
const ghostThreeMove = () => {
    const path = findBestPathToPacman(gameBoard, currentGhostThreeIdx, currentPacIdx); // find path to pacman 
    if (path.length > 0) { // if there is a path, move ghost to next tile
        const nextGhostStep = path[0]; // start moving along the path from position 0
        boardCell[previousGhostThreeIdx].classList.remove('ghostThree', 'scaredGhost');
        previousGhostThreeIdx = currentGhostThreeIdx;
        currentGhostThreeIdx = nextGhostStep;
        if (scaredGhost) {
            boardCell[currentGhostThreeIdx].classList.add('scaredGhost');
            boardCell[previousGhostThreeIdx].classList.remove('ghostThree');
            boardCell[previousGhostThreeIdx].classList.remove('scaredGhost');
        } else {
            boardCell[previousGhostThreeIdx].classList.remove('ghostThree');
            boardCell[currentGhostThreeIdx].classList.add('ghostThree');
        }
    }
    ghostCollision();
};

// ghost Four
const ghostFourMove = () => {
    const path = findBestPathToPacman(gameBoard, currentGhostFourIdx, currentPacIdx); // find path to pacman 
    if (path.length > 0) { // if there is a path, move ghost to next tile
        const nextGhostStep = path[0]; // start moving along the path from position 0
        boardCell[previousGhostFourIdx].classList.remove('ghostFour', 'scaredGhost');
        previousGhostFourIdx = currentGhostFourIdx;
        currentGhostFourIdx = nextGhostStep;
        if (scaredGhost) {
            boardCell[currentGhostFourIdx].classList.add('scaredGhost');
            boardCell[previousGhostFourIdx].classList.remove('ghostFour');
            boardCell[previousGhostFourIdx].classList.remove('scaredGhost');
        } else {
            boardCell[previousGhostFourIdx].classList.remove('ghostFour');
            boardCell[currentGhostFourIdx].classList.add('ghostFour');
        }
    }
    ghostCollision();
};

// ghost collision function with Pacman 
const ghostCollision = () => {
    if (scaredGhost === true) {
        if (boardCell[currentPacIdx].classList.contains('scaredGhost')) {
            boardCell[currentPacIdx].classList.remove('scaredGhost');
            boardCell[currentPacIdx].classList.add('pacman');
        } else {
            boardCell[currentGhostOneIdx].classList.add('scaredGhost');
            boardCell[currentGhostTwoIdx].classList.add('scaredGhost');
            boardCell[currentGhostThreeIdx].classList.add('scaredGhost');
            boardCell[currentGhostFourIdx].classList.add('scaredGhost');
        }
    }
    if (boardCell[currentPacIdx].classList.contains('ghostOne') ||
        boardCell[currentPacIdx].classList.contains('ghostTwo') ||
        boardCell[currentPacIdx].classList.contains('ghostThree') ||
        boardCell[currentPacIdx].classList.contains('ghostFour')) {
        boardCell[previousPacIdx].classList.remove('pacman');
        boardCell[currentPacIdx].classList.add('pacman');
        if (scaredGhost === false) {
            gameOver = true;
            stopAllGhosts();
            scoreBoard.textContent = `Game Over! Your Final Score Is: ${currentPoints}. Play again?`;
            startGameButton.innerHTML = 'Play Again!'
        }
    }
};

/*------------------------ Add Event Listeners ------------------------*/

startGameButton.addEventListener('click', () => {
    if (gameOver === false) {
        gameOver = false;
        resetGame();
        startGameButton.innerHTML = 'Go!'
        init();
    } else if (gameOver === true) {
        resetGame();
        startGameButton.innerHTML = 'Go!'
    }
});

// add event listener to listen for key press and apply to movePacman function
document.addEventListener('keydown', movePacman);

//function to reset game state
const resetGame = () => {
    clearInterval(intervalGhost); // stop ghost movement
    clearInterval(intervalGhostOne);
    clearInterval(intervalGhostTwo);
    clearInterval(intervalGhostThree);
    clearInterval(intervalGhostFour);
    gameBoard = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1,
        1, 4, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 4, 1,
        1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
        1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1,
        1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1,
        1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 5, 2, 2, 2, 2, 2, 2, 2, 1, 1,
        1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 0, 1, 1, 2, 1, 1, 1, 2, 1, 1,
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
    currentPoints = 0;
    scaredGhost = false;
    firstTimeGhostRelease = true;
    scoreBoard.textContent = `Your Score: ${currentPoints}`;
    currentGhostOneIdx = ghostPositions[0];
    previousGhostOneIdx = currentGhostOneIdx;
    currentGhostTwoIdx = ghostPositions[1];
    currentGhostThreeIdx = ghostPositions[2];
    currentGhostFourIdx = ghostPositions[3];
    boardCell.forEach(cell => {
        cell.classList.remove(
            'pacman',
            'pacman-right',
            'ghostOne',
            'ghostTwo',
            'ghostThree',
            'ghostFour',
            'pellet',
            'specialPellet',
            'wall',
            'scaredGhost')
    });
    currentPacIdx = gameBoard.indexOf(3);
    gameOver = false;
    placeGameElements();
    startGhostMovement();
    startGameButton.innerHTML = 'Start Game';
};
