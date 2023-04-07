console.log("Welcome to Tic tok toe");
let music = new Audio("music.mp3");
let audionTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let newTurn = "X";
let isgameOver = false;

const changeTurn = ()=>{
    return  newTurn === "X" ? "0":"X"
}

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach((e)=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) ){
            document.querySelector('.info').innerText == boxtext[e[0]].innerText + "Won";  
            isgameOver = true;
        }

    });

}


// Game logic 
let boxes = document.getElementsByClassName('box');

Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxtext');
    console.log("clicked and worked");
    element.addEventListener('click',() => {
        if(boxText.innerText === ''){
            boxText.innerText = newTurn;
            newTurn = changeTurn();
            audionTurn.play();
            checkWin();
            if(!isgameOver){
                document.getElementsByClassName('info')[0].innerText = 'Turn for' + newTurn;
            }
        }
    });
});