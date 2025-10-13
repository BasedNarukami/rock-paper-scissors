let randomNumber = Math.random();
let randomString;

function getComputerChoice(randomString)
{
    if (randomNumber < 0.33) 
        {
             return "Rock";
        }

    else if (0.33 < randomNumber < 0.66)
        {
            return "Paper";
        }

    else 
        {
            return "Scissors";
        }
}

console.log(randomString);

function getHumanChoice()
{

}

