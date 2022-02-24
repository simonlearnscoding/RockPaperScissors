


 /*   Will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
 We’ll use this function in the game to make the computer’s play.*/
function playerWonRound(playerSelection, computerSelection) {
    playerWon++;
    const score = document.querySelector('#score');
    score.textContent = `you: ${playerWon} - computer: ${computerWon}`;
    const p = document.createElement('p');
    p.textContent = `Congratulations, you won the Round! you played: ${playerSelection } - computer played ${computerSelection}`;
    score.textContent = `you: ${playerWon} - computer: ${computerWon}`;
    Billboard.appendChild(p);
    defineWinner(playerWon, computerWon)
    return true;
}
function computerWonRound(playerSelection, computerSelection) {
    computerWon++;
    const score = document.querySelector('#score');
    score.textContent = `you: ${playerWon} - computer: ${computerWon}`;

    const p = document.createElement('p');
    p.textContent = `Unfortunately you lost the Round! you played: ${playerSelection } - computer played ${computerSelection}`;
    score.textContent = `you: ${playerWon} - computer: ${computerWon}`;
    Billboard.appendChild(p);
    defineWinner(playerWon, computerWon);
    return false;

}
function equalOutcome(playerSelection) {
    const p = document.createElement('p');
    p.textContent = `You Both Played: ${playerSelection } you have to replay this round`;
    Billboard.appendChild(p);
}

function defineWinner(playerWonRound, computerWonRound){
 if (playerWonRound == 5) {
     alert("Congratulations, you won!!");
     }
 else if (computerWonRound == 5) {
     alert("oh no you lost!");
     }
}
function playerSelect() {
let input = (prompt("type rock / paper / scissors")).toLowerCase();
let capitalized = input.charAt(0).toUpperCase() + input.slice(1);
let RPS = ['Rock', 'Paper', 'Scissors'];
if (RPS.includes(capitalized)) {
    return capitalized;
}
else {alert("please type either Rock or Paper or Scissors!");
playerSelect();}
}
function computerPlay()
{
    let RPS = ['Rock', 'Paper', 'Scissors'];

    /* randomNumber = random(0, 2)*/
    let rndInt = Math.floor(Math.random() * 3);
    return RPS[rndInt];
}

function playRound(playerSelection, computerSelection)
{
   /*If the Player Played Paper*/

    if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
        /*Player Won Round */
            playerWonRound(playerSelection, computerSelection)
        }
        else if (computerSelection == "Paper") {
        /*Equal */
           equalOutcome(playerSelection);


        }
        else {
            computerWonRound(playerSelection, computerSelection);
        }

   }
  else if (playerSelection == "Rock") {
    if (computerSelection == "Scissors") {
    /*Player Won Round */
        playerWonRound(playerSelection, computerSelection);
    }
    else if (computerSelection == "Rock") {
    /*Equal */
        equalOutcome(playerSelection);

    }
    else {
        computerWonRound(playerSelection, computerSelection);
    }
}
  else if (playerSelection == "Scissors") {
    if (computerSelection == "Paper") {
    /*Player Won Round */
        playerWonRound(playerSelection, computerSelection);
    }
    else if (computerSelection == "Scissors") {
    /*Equal */
        equalOutcome(playerSelection);


    }
    else {
        computerWonRound(playerSelection, computerSelection);
    }

}



/* keeps score and reports a winner or loser at the end. */



}
const Billboard = document.querySelector('.Billboard');
const buttons = document.querySelectorAll('button');
var playerWon = 0;
var computerWon = 0;
const score = document.createElement('p');
score.setAttribute('id', 'score');
score.textContent = `you: ${playerWon} - computer: ${computerWon}`;
Billboard.appendChild(score);

buttons.forEach(button => button.addEventListener('click',function (e) {playRound(button.textContent, computerPlay())

}));






