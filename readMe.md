ReadMe Template Worksheet

Your ReadMes are the key deliverable that engineers will want to see as part of your job search. Each engineering team will look at different aspects of your ReadMe and repo. Some will go into the code itself and explore. Others will just want to see the showcase code snippets in the main ReadMe. Some will read the full thing to understand your approach, others will skim to specific sections.

It’s crucial that you cover all the different sections below to ensure that you’ve got the information for all engineers that check these out. 

We regularly have employers discuss the importance of the ReadMes in what they’re looking for and why they interview the grads that they do - so don’t underestimate the importance of writing strong ReadMes! 

For any pair or group project, you cannot share a ReadMe. These must be written independently to ensure that the engineers reading this understands your specific experience and approach. 

It’s a good idea to start your ReadMes during the planning stage as this is the best way to get ahead and save time when it comes to finalising your first draft post-project. As you plan each aspect of your project, note down what you intend to do with screenshots of your plan and anything else you think would be useful, then when you execute this part in your code, you can adjust this part of your ReadMe as needed depending on how your process changed, or if it went as planned then you can leave it as it is.

Make a copy of this document for each project you use throughout the course and fill in each section. 

Once the content has been finalised here, you can then quickly upload these onto your GitHub repository later.




Things To Consider:

That there are no spelling mistakes in your ReadMe - if you see a spelling error highlighted below, edit this. 
Some engineers will reject applicants if their ReadMes are full of mistakes. From their perspective, if your ReadMes are full of mistakes, what is your code like…

That your technologies are capitalised correctly - i.e JavaScript, jQuery, MongoDB

That your formatting is consistent throughout - headers, indentation, full stops in bullets etc

Any hyperlink included works

That you include images throughout - code snippets, pictures of your planning stage, screenshots of the final project.
These can be still screenshots or gifs
This breaks up the text in your ReadMe and helps to keep the reader engaged

That your ReadMe sounds like you - see this as an opportunity to showcase who you are to the engineering community and prospective employers. 
Think back to the Personal Brand session and how employers want to get a sense of who you are. The content you write should sound as if you’re talking through your experience. 


ReadMe Sections

Description

Instructions

Here, give a short description of the project. It can be a couple of sentences where you discuss the point in time during the course that you completed it, the topic of the project and potentially the tech stack.

Insert your Description here:

I have remade a browser based version of the old arcade game PacMan. In my game, you play as a small white dog, trying to collect all food pellets while being chased by four relentless roombas, The dog can temporarily disable the enemies by collecting a special item - his favourite squeaky toy. The game ends when all pellets and toys are collected by the dog or when the dog is caught by a roomba. 

Disclaimer - I first made a fully working PacMan game and only then I changed the styling to include dog elements. Therefore all the code in my code snippets will be referring to Pacman = the player, Ghosts = Roombas, Special Pellet = Squeaky Toy. 

I am currently two weeks into my Software Engineering Bootcamp and this is my first coding project. I built the game in a week, using mainly JavaScript. 

Deployment link

Instructions

Here include the information on where the deployed project can be found. If login details are needed to access the full project, make sure you include them.

If you have not yet deployed your project, you can add this in later.

Insert your Deployment link here:




Getting Started/Code Installation

Instructions

Explain how the reader accesses your code. Include a step by step approach.

Insert your Getting Started/Code Installation here:





Timeframe & Working Team (Solo/Pair/Group)

Instructions

Share the timeframe given for the project and whether you worked independently, in a pair, or in a group.

If you worked in a pair or group, include the names of the people you collaborated with. As a bonus, you can also provide links to their GitHub repo.

Insert your Timeframe & Working Team here:

This was a solo project and I was given a week to complete it. 

Technologies Used

Instructions

List every technology you used to complete the project. This can be in one long list, or broken down into categories (Back End, Front End, Development Tools).

Insert your Technologies Used here:

HTML5 
CSS 
JavaScript (ES6)


Brief
Instructions

Include the brief set by your instructional team here. This sets the context of the project you were working towards and mimics briefs you will be set later in your future roles.

This can either be in bullets or in a paragraph.


Insert your Brief here:

Create a grid based game in the web browser.
The player should be able to clear at least one board.
The player score should be displayed at the end of the game.
Have clear win/lose logic.
Create 4 enemies. 
Create effective game logic for the enemy movement.
Add food items for the player to collect in order to temporarily disable the enemy.
Add sounds.
Include separate HTML / CSS / JavaScript files.
Deploy the game online via GitHub Pages so the rest of the world can play it. 

Planning

Instructions

The planning stage is important, as all projects in your future roles will have detailed plans before any coding happens. It is a great experience to share with potential engineer employers, as this reflects real engineering team practices. 

Start by explaining the initial steps you took in the project. 

Did you do any sketches? If so, discuss this and include images.
Any wireframes of the front end and UI? You did? Then explain this and include images.
Any ERDs? Same here, explain and include images.
Use a project management tool to plan the sprint? If so, talk through this - what tool did you use? How you allocated tickets/responsibilities, sprint timeline etc. Also include screenshots of this.
Any pseudocode? 
If it was a group or pair project - Discuss who was designated which tasks. This is very important, as engineers want to understand who owned the different code elements when looking at a group project.

For each project, review the above bullets and discuss every step you took in the planning stage, including the relevant images.

Not every project will include the above, but it’s important to discuss any of the bullets that you did implement.

Insert your Planning here:

I started the planning phase by writing down my User Story to make sure I understood the player journey from start to finish. I then moved onto writing out the pseudocode. In my pseudocode, I named most of my functions and then dissected each one of them by really diving deep into what their purpose is and what logic needs to be captured in them. 

After that, I wrote multiple pages of flow diagrams until I landed on the final one that created a perfect closed circle game loop. My final flow diagram helped me visualise how my functions are meant to interact with each other. It also helped me keep track of my work as I would tick off the functions I already created. 

I also drew out a quick grid to help me visualise where I should put the game components: walls, paths, special pellets, enemies and the player sprite. This was very helpful when I was building the grid on the page. 

Build/Code Process

Instructions

The Build/Code Process will be the longest section of your ReadMe and will be most insightful to the engineers that review them. This is where you will discuss the steps you took to code the project.

You want to see your ReadMes as a way to walk the engineers through your approach and problem solving from the start of the project through to the end.

You'll need to include a minimum of 3-4 code snippets, highlighting code you're particularly proud of and these code snippets will have descriptions on what you did, how and why to set the context of the snippet you include. These explanations are important for the engineers, as they will want to understand what you did and the reasoning behind the steps you took.

You don't need to document every single thing you coded, but walk them through the key sections of the project build.

For any group project, you will just focus on your contributions. 

Some people will document the build/code process by discussing the key stages they worked on. Others will do a day by day guide. It’s entirely up to you how you structure this, as long as you discuss all the key things above.

Insert your Build/Code Process here:

Grid Layout

The first step was to make a 20 x 20 game board which would make the base of the game. I then created a gameBoard variable which would get populated with different classes including walls, paths, player, enemies and special items. 

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


I then placed the game elements on the board using a loop 

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


Moving PacMan

In order to move PacMan on the board, I used the addEventListener method on the arrow keys and applied that to my movePacman function. 

To move PacMan, the function would first store the current PacMan position index and then check what his immediate next indexes are and store them in a variable:
left position - current position - 1 
Right position - current position + 1
Up position - current position - 20 (20 being the width of the board) 
Down position - current position + 20 

Before making a move, Pacman had to check whether the next available index was a wall or not. If it was a path, Pacman would then move there and his previous index would get cleared 

// add event listener to listen for key press and apply to movePacman function
document.addEventListener('keydown', movePacman);

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



Challenges

Instructions

Challenges are great for showing your learning journey and problem solving, and this is a section that many engineers will check out. Every day of your engineering career you’ll encounter challenges, this is part of your growth and development. It’s the challenges you encounter that helps you become a stronger and more competent engineer. 

Here you will detail any particular challenges you encountered as you were coding the project. 

Questions to answer here:

What technical challenges did you come across? 
Why were these challenges? 
What problem solving did you do to rectify them?
Team dynamics/ Project management
Tools/Tech you used

Insert your Challenges here:




Wins

Instructions

The Wins section is your opportunity to highlight the aspects of your project you are most proud of. See this as your chance to showcase these parts of your projects to the engineers reading your ReadMes.

Things you could discuss here:

Interesting problem solving you did
Strong sections of code
Collaboration with other team members
Visual design of the project

Insert your Wins here:


Key Learnings/Takeaways

Instructions

This section is one of the other most important parts of your ReadMe from an engineers’ perspective and helps to differentiate each of you from your classmates and team members. 

Engineers love to understand what you learn from each project and how it has shaped you as an engineer. 

See this as your opportunity to show the engineers how your skills grew during each project sprint. 

Things you could discuss here:

What Technologies/Tools do you now feel more confident with? Tell them specifically what you learnt about these. 
What engineering processes did you become more comfortable with? Standups? Pair programming? Project management? Tell them what you learnt from these processes?

Insert your Key Learnings/Takeaways here:





Bugs

Instructions

If you have any bugs in your project, it’s important that you flag them in your ReadMe. This helps the engineers reviewing your projects to understand that you are aware that there are issues - if you don’t flag these, then they won’t have that visibility that you know these problems are in your code and it can result in them not having a full understanding of your technical knowledge. 

In either sentences or bullets, explain what the bugs are.

If you have no bugs, you can leave this section blank.

Insert your Bugs here:



Future Improvements

Instructions

It’s common to get to the end of your project and have ideas on what you would do if you have more time, as well as how you might improve it. 

If you do, you should detail this here. It’s great to give that context on potential future improvements, to share your creative or technical ideas with the engineers reading your ReadMes.

In either sentences or bullets, explain what your future improvements would be.

Insert your Future Improvements here: