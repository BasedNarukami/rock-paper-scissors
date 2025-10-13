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

chosenString = console.log(getComputerChoice(randomNumber));

function getHumanChoice()
{
    humanChoice = prompt("Please enter Rock, Paper, or Scissors: ");
    return humanChoice;
}

console.log(getHumanChoice());