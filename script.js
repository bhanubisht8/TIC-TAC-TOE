const cellElement = document.querySelectorAll(".cell");
const player1Element = document.querySelector(".p1");
const player2Element = document.querySelector(".p2");

const player1 = "O";
const player2 = "X";
let toggleTurn = true;

cellElement.forEach(element => {
    element.addEventListener("click", function () {
        let currentPlayer = toggleTurn?player1:player2;
        element.classList.add("disabled");
        if (toggleTurn) {
            player1Element.classList.add("activep");          
            player2Element.classList.remove("activep");          
        }else{
            player2Element.classList.add("activep");          
            player1Element.classList.remove("activep");          
        }        

        playerInput(element, currentPlayer);
        turnSwap();
        
        
    })
});

function turnSwap() {
    toggleTurn = !toggleTurn;
}

function playerInput(a,b) {
    a.innerHTML=b;
}