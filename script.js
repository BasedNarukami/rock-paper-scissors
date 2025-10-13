let randomNumber = Math.random();
let chosenString;

function getComputerChoice(Number)
{
    console.log(Number);
    if (Number < 0.33) 
        {
             return "Rock";
        }

    else if (0.33 <= Number && Number < 0.66)
        {
            return "Paper";
        }

    else 
        {
            return "Scissors";
        }
}


function getHumanChoice()
{
    humanChoice = prompt("Please enter Rock, Paper, or Scissors: ");
    return humanChoice;
}

function playRound()
{
    let humanScore = 0;
    let computerScore = 0;

    while (humanScore < 5 && computerScore < 5)
        {
            
           const humanChoice = getHumanChoice();
           const computerChoice = getComputerChoice(randomNumber);

            if (humanChoice == computerChoice)
            {
                console.log("It's a Tie!");
            }

            else if ((humanChoice == "Scissors" && computerChoice == "Paper") || (humanChoice == "Rock" && computerChoice == "Scissors") || (humanChoice == "Paper" && computerChoice == "Rock"))
            {
                console.log("You win this round!!");
                humanScore++;
            }

            else
            {
                console.log("You lose this round!!");
                computerScore++;
            }  
            
            console.log(humanScore);
            console.log(computerScore);
        } 

    if (humanScore > computerScore)
    {
        console.log("You win!");
    }

    else 
    {
        console.log("You lose!");
    }

}


playRound();