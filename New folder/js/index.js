console.log("Its Snake Game");

// GAME CONSTANTS

let inputDir = {x: 0, y:0};
// For sound 
const foodSound = new Audio('/music/food.mp3');
const gameOverSound = new Audio('/music/gameover.mp3');
const moveSound = new Audio('/music/move.mp3');
const musicSound = new Audio('/music/music.mp3');
let speed = 6;
let score = 0;
lastPaintTime = 0;
let snakeArr = [
    {x: 13, y: 15}
]
let food = {x: 3, y:7}; 


// GAME FUNCTIONS  

function main(ctime){
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    // update lastPaintTime
    lastPaintTime = ctime;
    gameEngine();
}

function isCollide(snake){
    // if snake bump into itself 

    for(let i = 1; i < snakeArr.length; i++ ){
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    }
// if snake bump into wall 
    if(snake[0].x >= 18 || snake[0].x <= 0 ||
       snake[0].y >= 18 || snake[0].y <= 0){
        return true;
    }
}


function gameEngine(){
    //   part 1:  updating the snake array & Food

    if(isCollide(snakeArr)){
        gameOverSound.play();
        musicSound.pause();
        inputDir = {x: 0, y:0};
        alert("game over, press any key to continue!");
        snakeArr = [{x: 13, y: 15}];
        // musicSound.play();
        score = 0;
    }

    //  if snake have eaten the food, increment the score and the food 

    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
        score += 1;
        if(score > highscoreVal){
            highscoreVal = score;
            localStorage.setItem("highscore", JSON.stringify(highscoreVal))
            highScoreBox.innerHTML = "highScore: " + highscoreVal;
        }
        scoreBox.innerHTML = "Score: " + score;
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        foodSound.play();
        let a = 2;
        let b = 16;
        food = {x: Math.round(a +(b-a) * Math.random()), y: Math.round(a +(b-a) * Math.random())}
    }

    // Moving the snake

    for(let i = snakeArr.length - 2; i>=0; i--){
        snakeArr[i+1] = {...snakeArr[i]};
        // console.log("Array index", array[i]);
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;



    // part 2: Display the snake
    // console.log(snakeArr);
    board.innerHTML = "";  //dof first clear (if is) html which is in board div
    snakeArr.forEach((e, index) => {
        // console.log("Element object",e, index);
        let snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        

        if(index === 0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }

        board.appendChild(snakeElement);
    });

    // Display the Food 
        let foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        board.appendChild(foodElement);
}

// GAME LOGICS

// save highscore into localstorage 

let highScore = localStorage.getItem("highScore");
if(highScore === null){
    highscoreVal = 0;
    localStorage.setItem("HignScore", JSON.stringify(highscoreVal))
}
else{
    highscoreVal = JSON.parse()
    highScoreBox.innerHTML = "HighScore: " + highscore;
}

window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    // console.log("keydown object", e);

    inputDir = {x: 0, y: 1}   //start the game 
    moveSound.play();   

    switch (e.key){
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;     
        default:
            break;       
    }


});
