


 /*   Will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
 We’ll use this function in the game to make the computer’s play.*/
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
            alert(`Congratulations, you won the Round! you played: ${playerSelection } - computer played ${computerSelection}`);
            return true;
        }
        else if (computerSelection == "Paper") {
        /*Equal */
            alert(`You Both Played: ${playerSelection } you have to replay this round`);

        }
        else {
            alert(`Unfortunately you lost the Round! you played: ${playerSelection } - computer played ${computerSelection}`);
            return false;
        }

   }
  else if (playerSelection == "Rock") {
    if (computerSelection == "Scissors") {
    /*Player Won Round */
        alert(`Congratulations, you won the Round! you played: ${playerSelection } - computer played ${computerSelection}`);
        return true;
    }
    else if (computerSelection == "Rock") {
    /*Equal */
        alert(`You Both Played: ${playerSelection } you have to replay this round`);

    }
    else {
        alert(`Unfortunately you lost the Round! you played: ${playerSelection } - computer played ${computerSelection}`);
        return false;
    }

}
  else if (playerSelection == "Scissors") {
    if (computerSelection == "Paper") {
    /*Player Won Round */
        alert(`Congratulations, you won the Round! you played: ${playerSelection } - computer played ${computerSelection}`);
        return true;
    }
    else if (computerSelection == "Scissors") {
    /*Equal */
        alert(`You Both Played: ${playerSelection } you have to replay this round`);

    }
    else {
        alert(`Unfortunately you lost the Round! you played: ${playerSelection } - computer played ${computerSelection}`);
        return false;
    }

}


}
/* keeps score and reports a winner or loser at the end. */
function game() {

    /*Starts with the score at zero*/
    let wonTime = 0;
    let lostTime = 0;

    /*Plays five rounds*/
    for (let i = 0; i < 5; i++) {
        let playerSelection = playerSelect();
        let computerSelection = computerPlay();
        let won = playRound(playerSelection, computerSelection);
        if (won == true) {
         wonTime ++;
        }
        else if (won == false) {
            lostTime ++;
        }
    /*check who won the game*/
    }
    if (wonTime > lostTime) {
        alert(`congratulations! you won! Score: you - ${wonTime} / computer - ${lostTime}`);
    }
    else if (wonTime === lostTime) {
        alert(`it's a draw you - ${wonTime} / computer - ${lostTime}`);
    }
    else {
        alert(`unfortunately you lost! Score: you - ${wonTime} / computer - ${lostTime}`);
    }




}
game();

