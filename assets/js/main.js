let playerName = "";
let playerScore = 0;
let computerScore = 0;


function startGame() {
    let gameAudio = document.getElementById("gameAudio");
    gameAudio.play();

    gameAudio.addEventListener("ended", function() {
        this.play();  
    }, false);

    playerName = document.getElementById("playerName").value;
    if (playerName) {
        document.getElementById("game").classList.remove("hidden");
    } else {
        alert("Por favor, insira seu nome!");
    }
}


function playerChoice(choice) {
    const choices = ["PEDRA", "PAPEL", "TESOURA"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const result = checkWinner(choice, computerChoice);
    displayResult(choice, computerChoice, result);
}

function checkWinner(player, computer) {
    if (player === computer) return "EMPATE!";
    if ((player === "PEDRA" && computer === "TESOURA") || (player === "TESOURA" && computer === "PAPEL") || (player === "PAPEL" && computer === "PEDRA")) {
        playerScore++;
        return `${playerName} VENCEU!`;
    } else {
        computerScore++;
        return "COMPUTADOR VENCEU!";
    }
}

function displayResult(player, computer, result) {
    document.getElementById("result").innerHTML = `
    <span style="color: pink;">${playerName}</span>: ESCOLHEU <span style="color: lightgreen;">${player}</span> E 
    <span style="color: pink;">COMPUTADOR:</span> ESCOLHEU: <span style="color: lightgreen;">${computer}</span> <br><br>
    <span style="color: red;">${result}</span>
    
    `;
    document.getElementById("playerScore").innerText = `${playerName}: ${playerScore}`;
    document.getElementById("computerScore").innerText = `Computador: ${computerScore}`;
}