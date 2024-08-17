console.log("Welcome to tic tac toe");
let music =new Audio("one.mp3");
let audioturn =new Audio("one.mp3");
let gameover =new Audio("one.mp3");
let turn ="X";
let isgameover=false;
//fucntion to chage the turn
const changeTurn =()=>{
    if(turn==='X') turn='0';
    else turn="X";
    return turn;
    // return turn==="X"?"0":"X";
}

// Function to check for a win 
const checkwin =()=>{
    let boxtext=document.getElementsByClassName("boxtext");
    let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=="")){
            document.querySelector(".info").innerText=boxtext[e[0]].innerText+" wins";
            isgameover=true;
        }
    })
}

//game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext =element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText= turn;
            changeTurn();
            // audioturn.play();
            checkwin();
            if(isgameover===false){
                document.querySelector(".info").innerText="Turn for "+turn;
            } 
        }
    })
})


//resetting the game
document.getElementById('reset').addEventListener('click',()=>{
    let boxtext=document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(e=>{
        e.innerText="";
        turn="X";
        isgameover=false;
        document.querySelector(".info").innerText="Turn for "+turn;
    })
})