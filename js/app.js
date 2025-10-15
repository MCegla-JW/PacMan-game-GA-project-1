
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
let ghostPositions = [gameBoard.indexOf(5), gameBoard.indexOf(6), gameBoard.indexOf(7), gameBoard.indexOf(8)]; // an array of all 4 ghost postions 
let currentGhostOneIdx = ghostPositions[0];
let previousGhostOneIdx = currentGhostOneIdx;
let previousGhostTwoIdx;
let previousGhostThreeIdx;
let previousGhostFourIdx;

console.log('ghost One current index is', currentGhostOneIdx);
let currentGhostTwoIdx = ghostPositions[1];
console.log('ghost Two current incex is', currentGhostTwoIdx);
let currentGhostThreeIdx = ghostPositions[2]
console.log('ghost Three current index is', currentGhostThreeIdx);
let currentGhostFourIdx = ghostPositions[3]
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
    startGhostMovement(); // start ghost movement 
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

//movePacman();


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
    console.log('ghost is now scared for 7 seconds');
    interval = setTimeout(() => { // schedule scared ghost to last 7 seconds 
        scaredGhost = false;
        boardCell[currentGhostOneIdx].classList.remove('scaredGhost');
        boardCell[currentGhostOneIdx].classList.add('ghostOne');
        boardCell[currentGhostTwoIdx].classList.remove('scaredGhost');
        boardCell[currentGhostTwoIdx].classList.add('ghostTwo');
        boardCell[currentGhostThreeIdx].classList.remove('scaredGhost');
        boardCell[currentGhostThreeIdx].classList.add('ghostThree');
        boardCell[currentGhostFourIdx].classList.remove('scaredGhost');
        boardCell[currentGhostFourIdx].classList.add('ghostFour');
    }, 7000);
    console.log('timer has ran out, ghost no longer scared');
};

// ghost move timer for automatic ghost movement 

let intervalGhost; 

const startGhostMovement = () => {
    clearInterval(intervalGhost); // clear any exisitng timer
    intervalGhost = setInterval(() => {
        console.log('ghost is moving');
        //console.log('next step for ghost', findGhostNextStep());
        ghostOneMove(); // this will be popuated with other ghosts ghostTwoMove() etc. 
    }, 1000);
}

// Dijkstra algorithm attemp for pathfinding 

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

// ghost move function test

const width = 20; // lenght of the board (20 tiles wide)
// x - the column number 
// y - the row number 
// % - modulo operator always returns a whole number 
// using math.floor to round down to the nearest whole number 

const findGhostNextStep = (currentGhostOneIdx) => { // look for all possible paths from current position, since its a grid, theres only four directions
    const neighbourTiles = [];
    const x = currentGhostOneIdx % width;
    const y = Math.floor(currentGhostOneIdx / width); // the column and which tile in the column, that why we need the integer remainder 

    if (x > 0) neighbourTiles.push(currentGhostOneIdx - 1); // left
    if (x < 19) neighbourTiles.push(currentGhostOneIdx + 1); // right
    if (y > 0) neighbourTiles.push(currentGhostOneIdx - width) // up
    if (y < 19) neighbourTiles.push(currentGhostOneIdx + width); // down

    return neighbourTiles;
}

//findGhostNextStep();

// Filter neighbouring paths that are walkable (not walls)
let nextcurrentGhostOneIdx;

const getPaths = (gameBoard, currentGhostOneIdx) => { // find all possible walkable paths out of the array of all neigbouring paths that we got from findGhostNextStep function, filter wheter a fall or not and return only walkable paths array
    return findGhostNextStep(currentGhostOneIdx).filter(nextGhostIdx => gameBoard[nextGhostIdx] != 1);
};

//getPaths();

//ghostMoveTimer(); works, commented out so the ghost is not constantly moving

// ghosts pathfinding 

const findBestPathToPacman = (gameBoard, currentGhostOneIdx, currentPacIdx) => { // gameboard - grid checked, currentGhostOneIdx - startIdx, currentPacIdx - targetIdx
    const queue = [currentGhostOneIdx];
    const visited = new Set();
    const previous = {};

    visited.add(currentGhostOneIdx);

    while (queue.length > 0) {
        const current = queue.shift();

        if (current === currentPacIdx) {
            const path = [];
            let node = currentPacIdx;
            while (node !== currentGhostOneIdx) {
                path.unshift(node);
                node = previous[node];
            }
            return path;
        }
        const walkablePaths = getPaths(gameBoard, current); // show all walkable paths for current Ghost one position that dont include walls 
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

const ghostOneMove = () => { // currently works for one ghost and i dont know if i need it once dijkstra is done 
    const path = findBestPathToPacman(gameBoard, currentGhostOneIdx, currentPacIdx); // find path to pacman 
    if (path.length > 0) { // if there is a path, move ghost to next tile
        const nextGhostStep = path[0]; // start moving along the path from position 0
        boardCell[previousGhostOneIdx].classList.remove('ghostOne'); 
        previousGhostOneIdx = currentGhostOneIdx; 
        currentGhostOneIdx = nextGhostStep;
        boardCell[currentGhostOneIdx].classList.add('ghostOne'); 
    } 
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


console.log('Ghost One can move', findGhostNextStep(currentGhostOneIdx));
console.log('get ghost one paths', getPaths(gameBoard, currentGhostOneIdx));



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
    movePacman();
});

// reset game by clicking the button 
resetGameButton.addEventListener('click', () => {
    clearInterval(intervalGhost); // stop ghost movement
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
    ghostPositions = [gameBoard.indexOf(5), gameBoard.indexOf(6), gameBoard.indexOf(7), gameBoard.indexOf(8)];
    currentGhostOneIdx = ghostPositions[0];
    previousGhostOneIdx = currentGhostOneIdx;
    currentGhostTwoIdx = ghostPositions[1];
    currentGhostThreeIdx = ghostPositions[2];
    currentGhostFourIdx = ghostPositions[3];
    boardCell.forEach(cell => {
        cell.classList.remove('pacman', 'ghostOne', 'ghostTwo', 'ghostThree', 'ghostFour', 'pellets', 'specialPellets', 'wall')
    });
    currentPacIdx = gameBoard.indexOf(3);
    previousPacIdx = currentPacIdx;   
    gameOver = false;
    placeGameElements();
    startGhostMovement();
    console.log('are you reset', resetGameButton);
});


//bug log - 
// reset button - works but when clicked, pacman resumes from his last spot, somehow need to clear pacman and place him at his starting point 
// start button - when clicked at end of game instead of reset, shows pacmans whole journey from previous game 
// on @age load, ghost One visible and moving before start button clicked 

// Pacman is placed at i = 310 at the start of game 
// Ghosts: ghostOne - i = 150, ghostTwo - i = 189, ghostThree - i = 190; ghostFour - i = 191;
// Special pellet is placed at i = 41, 58, 221, 238 

