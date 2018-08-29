
var guessedLetters = []; //what youve guessed so far
var wordPool = ["monday","tuesday","wednesday","apple","watermelon", "raisin"]; //wordlist
//Getting a random word from the pool
var wordIndex = [Math.floor(Math.random()*wordPool.length)]; //random index of a word in the list
var theWord = wordPool[wordIndex]; //the actual answer
var wordLength = theWord.length; //how long the answer is 
var lettersRemain = theWord.length;
var onScreen = [wordLength]; //array of the length of the answer
var currentGuess = ""; //displayed word progress
var guess = ""; //user input
var letters = theWord.split(''); //individual letters of the word

var emptyWordVisible = document.getElementById("emptyWord");  //make things shorters
var guessesLeftVisible = document.getElementById("guessesLeft");
var guessedLettersVisible = document.getElementById("guessedLetters");

var guessesLeft = 8; //number of guesses
var loseCounter = 0; //number of losses
var winCounter = 0; //number of wins

var gameStarted = false;

function resetGame()
{   
    gameStarted = true;
    guessesLeft = 8;
    for (var i = 0; i < theWord.length; i++){
        onScreen[i] = "_ ";
        currentGuess = currentGuess + onScreen[i];
    }
    emptyWordVisible.textContent = currentGuess;
    guessesLeftVisible.textContent = guessesLeft + " guesses left.";
    currentGuess = "";
}
function gameStatus() {
    if (guessesLeft >= 0 && lettersRemain === 0) {
        gameVictory();
    }else if (guessesLeft === 0 && lettersRemain > 0){
        gameLost();
    }
}
function gameVictory() {
        winCounter++;
        document.getElementById("won").textContent = "Won: " + winCounter;
        guessedLetters = [];
        guessedLettersVisible.textContent = "You have guessed: " + guessedLetters;
        resetGame();
}

function gameLost() {
        loseCounter++;
        document.getElementById("lost").textContent = "Lost: " + loseCounter;
        guessedLetters = [];
        guessedLettersVisible.textContent = "You have guessed: " + guessedLetters;
        resetGame();
}

window.onload = function(){
    resetGame();
}

document.onkeyup = function (event)
{
if (gameStarted)
    {
    guess = event.key.toLowerCase();
    if (letters.indexOf(guess) > -1) // check if guess is in the answer
    { 
        if (guessedLetters.indexOf(guess) < 0) //check if the guess is already guessed
        {  
            for (var i = 0; i < theWord.length; i++)
            {
                if (letters[i] === guess)
                {
                    onScreen[i] = guess;
                    lettersRemain--;
                }
                currentGuess = currentGuess + onScreen[i] + " ";
                emptyWordVisible.textContent = currentGuess;
            }
            currentGuess = "";
        }
    }else   
        {
        if (guessedLetters.indexOf(guess) < 0) 
            {
                guessedLetters.push(guess);
                guessedLettersVisible.textContent = "You have guessed: " + guessedLetters;
                guessesLeft--;
                guessesLeftVisible.textContent = guessesLeft + " guesses left!";
            }
        gameStatus();
        }
    }else{
        resetGame();
    }
}
