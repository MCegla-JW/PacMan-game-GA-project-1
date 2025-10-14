
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

let gameBoard = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
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
let totalScore = 2590;
let scaredGhost = false;
let strongPacman = false; // may not need it as scaredGhost will indicate Pacman ate the strong pellet 
let gameOver = false;
let specialPellet = 4; // not sure if needed 
let previousPacIdx;
let previousGhostIdx;
let currentGhostOneIdx = gameBoard.indexOf(5);
console.log('ghost One current index is', currentGhostOneIdx);
let currentGhostTwoIdx = gameBoard.indexOf(6); 
console.log('ghost Two current incex is', currentGhostTwoIdx);
let currentGhostThreeIdx = gameBoard.indexOf(7);
console.log('ghost Three current index is', currentGhostThreeIdx);
let currentGhostFourIdx = gameBoard.indexOf(8); 
console.log('ghost Four current index is', currentGhostFourIdx);
let currentPacIdx = gameBoard.indexOf(3); // this is pacmans current index 
console.log('pacman current index is', currentPacIdx);

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

const scoreBoard = document.querySelector('.score-board'); // Score Board 
console.log('am i selected', scoreBoard);

const holdingImage = document.querySelector('#opening-image'); // Image that will appear before button is clicked 

/*------------------------ Functions ------------------------*/

// place elements on gameBoard - check index and add classlist - if 

const placeGameElements = () => {
    // if (gameOver) return;
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
};

// Function to clear pellet cell and leave empty 

// Getting pacman' current index on board as well as the next index to his left, right, up and down 


const movePacman = () => {
    document.addEventListener('keydown', (evt) => {
        // const pacMan = document.querySelector('.pacman'); // Pacman will be fetched anew everytime this function runs not sure this is working 
        // console.log('am i showing', pacMan);
        previousPacIdx = currentPacIdx; // storing the value of currentPacIndex before any changes are made to it 
        let leftPacIdx = currentPacIdx - 1; // possible pacman index when moving left 
        console.log('current index to pac left', leftPacIdx);
        let rightPacIdx = currentPacIdx + 1; // possible pacman index when moving right 
        console.log('current index to pac right', rightPacIdx)
        let upPacIdx = currentPacIdx - 20; // possible pacman index when moving up 
        console.log('current index to pac up', upPacIdx)
        let downPacIdx = currentPacIdx + 20; // possible pacman index when moving down 
        console.log('current index to pac down', downPacIdx);
        if (evt.key === 'ArrowLeft' && gameBoard[leftPacIdx] != 1) {
            currentPacIdx = leftPacIdx;
            console.log('i have moved left', gameBoard[leftPacIdx])
        } else if (evt.key === 'ArrowRight' && gameBoard[rightPacIdx] != 1) {
            currentPacIdx = rightPacIdx;
            console.log('i have moved right', gameBoard[rightPacIdx])
        } else if (evt.key === 'ArrowUp' && gameBoard[upPacIdx] != 1) {
            console.log('i have moved up', gameBoard[upPacIdx])
            currentPacIdx = upPacIdx;
        } else if (evt.key === 'ArrowDown' && gameBoard[downPacIdx] != 1) {
            currentPacIdx = downPacIdx;
            console.log('i have moved down', gameBoard[downPacIdx])
        };
        gameBoard[currentPacIdx] = 3; // place pacman in new cell - this is the line that makes the path remember that pacman has been there and it changes 2 to 3 on console 
        console.log('pacman has moved', currentPacIdx);
        pelletCollision();
        ghostCollision();
    });

};

movePacman();


const checkWin = () => { // this will be called inside the collison pellet function which in turn will be called in movePacman 
    if (currentPoints === totalScore) {
        scoreBoard.textContent = `You win! Your Score is ${totalScore}`
    }
};



// see if i can include ghost collision in this function and rename it

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
        ghostIsScared();
        scaredGhost = true; // will have to figure out how to set him to scared for a short amount of time    
        strongPacman = true; // might be redundant 
        currentPoints = currentPoints + 200; // adding 200 points to current points
        scoreBoard.textContent = `Your Score: ${currentPoints}`;  // displaying current points 
    } else {
        boardCell[previousPacIdx].classList.remove('pacman'); // remove Pacman image from previous index which is the saved value in here - previousPacIdx = currentPacIdx; 
        boardCell[currentPacIdx].classList.add('pacman'); // adding pacman image ; 
    }
    checkWin();
};

//scared Ghost 

const ghostIsScared = () => { // will have to set ghost change color to white for all 
    //if (gameOver) return; 
    scaredGhost = true;
    boardCell[currentGhostOneIdx].classList.remove('ghostOne');
    boardCell[currentGhostOneIdx].classList.add('scaredGhost');
    console.log('ghost is now scared for 7 seconds');
    interval = setTimeout(() => { // schedule scared ghost to last 7 seconds 
        scaredGhost = false;
        console.log('timer has ran out, ghost no longer scared');
        boardCell[currentGhostOneIdx].classList.remove('scaredGhost');
        boardCell[currentGhostOneIdx].classList.add('ghostOne');
    }, 7000);
}

// ghost move timer for automatic ghost movement 

const ghostMoveTimer = () => {
    intervalGhost = setTimeout(() => {
        console.log('ghost is moving');
        //console.log('next step for ghost', findGhostNextStep());
        ghostOneMove();
        ghostMoveTimer();
    }, 1000);
}

ghostMoveTimer();

// ghost move function test

// const findGhostNextStep = (currentGhostIdx) => { // very basic level of ghost finding his next step 
//     let ghostNextStep = currentGhostIdx + 1;
//     return ghostNextStep; // this is current ghost index + 1 
// }

const ghostOneMove = () => {
    previousGhostOneIdx = currentGhostOneIdx; 
    let leftGhostOneIdx = currentGhostOneIdx - 1;
    console.log('next index to ghost one to the left is', leftGhostOneIdx);
    let rightGhostOneIdx = currentGhostOneIdx + 1;
    console.log('next index to ghost one to the right is', rightGhostOneIdx);
    let upGhostOneIdx = currentGhostOneIdx - 20;
    console.log('next index to ghost one up is', upGhostOneIdx);
    let downGhostOneIdx = currentGhostOneIdx + 20;
    console.log('next index to ghost one down is', downGhostOneIdx);
    if (gameBoard[leftGhostOneIdx] != 1) {
        currentGhostOneIdx = leftGhostOneIdx;
    } if (gameBoard[rightGhostOneIdx != 1]) {
        currentGhostOneIdx = rightGhostOneIdx 
    } if (gameBoard[upGhostOneIdx != 1]) {
        currentGhostOneIdx = upGhostOneIdx;
    } if (gameBoard[downGhostOneIdx != 1]) {
        currentGhostOneIdx = downGhostOneIdx;
    }
    boardCell[previousGhostOneIdx].classList.remove('ghostOne'); // this wil be removed, just used now to see him visibly move
    boardCell[currentGhostOneIdx].classList.add('ghostOne'); // this will be removed, just used here now to see him visibly move
    //currentGhostOneIdx = findGhostNextStep(currentGhostOneIdx); // currentGhostOneIdx = 150 = 150 + 1
    console.log('Ghost One is here', currentGhostOneIdx);
};


// ghost collision function with Pacman 

const ghostCollision = () => {
    if (boardCell[currentPacIdx].classList.contains('ghostOne') || 
        boardCell[currentPacIdx].classList.contains('ghostTwo') || 
        boardCell[currentPacIdx].classList.contains('ghostThree') || 
        boardCell[currentPacIdx].classList.contains('ghostFour')) {
            boardCell[previousPacIdx].classList.remove('pacman') 
        if (scaredGhost === false) {
            gameOver = true;
            scoreBoard.textContent = `Game Over! Your Score: ${currentPoints}. Click Reset Game to play again!`;
            console.log('touched ghost');
        } else {
            console.log('ghost will be sent to pen for a bit')
        }
};
};

console.log('pac current index', currentPacIdx);

// Dijkstra algorithm attemp for pathfinding 

// const ghostGetClosestPath = (gameBoard, start) => {
//     let distances = {}; // store shortest distance from ghost starting node to Pacman 
//     let visited = new Set(); // keep track of nodes already processed 
//     const nodes = Object.keys(gameBoard); // get all the nodes of the graph 

//     for (let node of nodes) {
//         distances[node] = Infinity;
//     }
//     distances[start] = 0; // the distance from the start node to itself is 0 
//     while (nodes.length) { // loop until all nodes are visited 
//         nodes.sort((a, b) => distances[a] - distances[b]); // sort nodes by distance and pick the closest univisite node (how do i make sure the wall isnt included)
//         let closestNode = nodes.shift();
//         if (distances[closestNode] === Infinity) break; // if the shortest distance to the closest node is still Infinity, then remain
//         visited.add(closestNode); // mark the chosen node as visited 
//         for (let neighbor in gameBoard[closestNode]) { // for each neighbouring node of the current node 
//             if (!visited.has(neighbor)) { //if the neighbour hasnt been visited yet
//                 let newDistance = distances[closestNode] + gameBoard[closestNode] [neighbor]; // calclulate tentative distance to the neighbour node 
//                 if (newDistance < distances[neighbor]) { // if the newly calcualted distance is shorter that the previously known 
//                     distances[neighbor] = newDistance; // update the shortest distance to this neighbour 
//                 }
//             }
//         }
//     }
//     return distances; // return the shortest distance from the start node to all nodes 
// };



/*------------------------ Add Event Listeners ------------------------*/

//start game by clicking button 
startGameButton.addEventListener('click', () => {
    init();
});

// reset game by clicking the button 
resetGameButton.addEventListener('click', () => {
    gameBoard = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
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
    currentPoints = 0;
    scoreBoard.textContent = `Your Score: ${currentPoints}`;
    // boardCell[previousPacIdx].classList.remove('pacman'); // remove Pacman image from previous index which is the saved value in here - previousPacIdx = currentPacIdx;          
    // boardCell[currentPacIdx].classList.add('pacman'); // adding pacman image ;
    init();
    gameOver = false;
    //clearTimeout(interval); - for the scared ghost?
    console.log('are you reset', resetGameButton);
})


//bug log - 
// reset button - works but when clicked, pacman resumes from his last spot, somehow need to clear pacman and place him at his starting point 

// Pacman is placed at i = 310 at the start of game 
// Ghosts: ghostOne - i = 150, ghostTwo - i = 189, ghostThree - i = 190; ghostFour - i = 191;
// Special pellet is placed at i = 41, 58, 221, 238 

