const player1 = document.querySelector("#playerOne");
const player2 = document.querySelector("#playerTwo");
let p1Score = 0; 
let p2Score = 0;

const popup = document.querySelector(".popup")

const gameRound = document.querySelector("#gameRound");

const playerOneBtn = document.querySelector("#addPlayerOne");
const playerTwoBtn = document.querySelector("#addPlayerTwo");
const resetBtn = document.querySelector("#reset"); 

const mainContainer = document.querySelector(".mainContainer");
const win = document.querySelector("#msg");
function reset(){
        p1Score = 0
        p2Score = 0
        player1.innerText = 0;
        player2.innerText = 0;
        return 0
}


function congrats(player){
    popup.style.display = "block";
    popup.style.border = "solid 2px black";
    win.innerText = `Congrats ${player}, you won the game!`
}

function closeCongratsPopup(){
    popup.style.display = "none";
}
function addPoints(player, score){
    const rounds = parseInt(gameRound.value); 
    score += 1; 
    player.innerText = score;
    if(score == rounds){
        score = reset();
        congrats(player == player1 ? "Player1" : "Player2");
        // check player, if player == player 1, first condition is true second is false
    }
    return score;
}


playerOneBtn.addEventListener("click", function(e){
    p1Score = addPoints(player1, p1Score);
})

playerTwoBtn.addEventListener("click", function(e){
    p2Score = addPoints(player2, p2Score);
}) 
resetBtn.addEventListener("click", function(e){
    reset();
})