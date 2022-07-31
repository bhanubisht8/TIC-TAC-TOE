const cellElement = document.querySelectorAll(".cell");
const player1Element = document.querySelector(".p1");
const player2Element = document.querySelector(".p2");
const displayWinner = document.querySelector(".resultdiv");
const gameDraw  = document.querySelector(".draw");
let soundWin = new Audio('win.mp3');
let soundP = new Audio('player.wav');
const player1 = "O";
const player2 = "X";
let toggleTurn = true;
const winCond = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]



cellElement.forEach(element => {
    element.addEventListener("click", function () {
        let currentPlayer = toggleTurn?player1:player2;
        element.classList.add("disabled");
        
        if (toggleTurn) {
            soundP.play();
            player2Element.classList.add("activep");          
            player1Element.classList.remove("activep");          
        }else{
            soundP.play();
            player1Element.classList.add("activep");          
            player2Element.classList.remove("activep");          
        }        

        playerInput(element, currentPlayer);
        turnSwap();
        

        if(winnerCheck(currentPlayer)){
            document.querySelector(".result").innerHTML = currentPlayer + " is the Winner";
            // console.log(currentPlayer + " is winner");
            displayWinner.classList.remove("inactive");
            soundWin.play();
            
        }else if(checkDraw()){
            // console.log("Game is Draw");
            document.querySelector(".drawResult").innerHTML = " The Game is Draw";
            gameDraw.classList.remove("inactive");

        }    
        

        
    })
});

function winnerCheck(COM_CL){
    return winCond.some(condtion=>{
        // console.log(condtion);
        return condtion.every(inde=>{
            // console.log(inde);
            return cellElement[inde].classList.contains(COM_CL);
            // console.log(cellElement[inde].classList.contains(COM_CL));

        })
    })
}

function checkDraw(){
    return [...cellElement].every(include=>{
        return include.classList.contains(player1) || include.classList.contains(player2);
    })
}


function turnSwap() {
    toggleTurn = !toggleTurn;
    
}

function playerInput(a,b) {
    a.innerHTML=b;
    a.classList.add(b);
}

function restart() {
    window.location.reload();
}