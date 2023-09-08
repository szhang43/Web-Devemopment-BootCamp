const player1 = document.querySelector("#playerOne");
const player2 = document.querySelector("#playerTwo");
let p1Score = 0; 
let p2Score = 0;

let gameStatus = true;

const gameRound = document.querySelector("#gameRound");

const playerOneBtn = document.querySelector("#addPlayerOne");
const playerTwoBtn = document.querySelector("#addPlayerTwo");
const resetBtn = document.querySelector("#reset"); 

function reset(){
        p1Score = 0
        p2Score = 0
        player1.innerText = 0;
        player2.innerText = 0;
        return 0
}


function congrats(player){
    const mainContainer = document.createElement("div"); 
    mainContainer.classList.add("congratsContainer")
    const msg = document.createElement("h1"); 
    const exit = document.createElement("button"); 

    exit.innerText = "X";
    msg.innerText = `Congrat ${player}, you won the game!`

    document.body.append(mainContainer);
    mainContainer.append(msg); 
    mainContainer.append(exit);
    
    exit.addEventListener("click", function(e){
        mainContainer.style.display = "none";
    })
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