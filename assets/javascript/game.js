var answer = []; //the array that displays what youve guessed and the blanks
var guessedLetters = []; //what youve guessed so far
var wordPool = ["monday","tuesday","wednesday","apple","watermelon", "raisin"]; //wordlist
//Getting a random word from the pool
var wordIndex = [Math.floor(Math.random()*wordPool.length)]; //random index of a word in the list
var theWord = wordPool[wordIndex]; //the actual answer
var wordLength = theWord.length; //how long the answer is 
var onScreen = [wordLength]; //array of the length of the answer
var currentGuess = "";
var guess = "";
var letters = theWord.split('');
// //Number of guesses'
var guessesLeft = 8;
var loseCounter = 0;
var winCounter = 0;

function resetGame() {
    guessesLeft = 8;
        for (var i = 0; i < theWord.length; i++){
        onScreen[i] = "_ ";
        currentGuess = currentGuess + onScreen[i];
    }
    document.getElementById("emptyWord").textContent = currentGuess;
    document.getElementById("guessesLeft").textContent = guessesLeft + " guesses left.";
    currentGuess = "";  
}
function gameStatus() {
    if (guessesLeft > 0 && wordLength === 0) {
        gameVictory();
    }else if (guessesLeft === 0 && wordLength){
        gameLost();
    }
}
function gameVictory() {
        winCounter++;
        document.getElementById("won").textContent = "Won: " + winCounter;
        guessedLetters = [];
        document.getElementById("guessedLetters").textContent = "You have guessed: " + guessedLetters;
        resetGame();
}

function gameLost() {
        loseCounter++;
        document.getElementById("lost").textContent = "Lost: " + loseCounter;
        guessedLetters = [];
        document.getElementById("guessedLetters").textContent = "You have guessed: " + guessedLetters;
        resetGame();
}

window.onload = function(){
    resetGame();
}
// var gameBegan = false;
// var gameEnded = false;
// //Make an array with x # of "_" to represent a blank word
// for (var i = 0; i < word.length; i++) {
//     answer[i] = "_";
//     currentGuess = answer.join(" ");
//     document.getElementById("emptyWord").textContent = currentGuess;
//     document.getElementById("guessesLeft").textContent = guessesLeft + " guesses left!";
// }

// if (wordProgress = 0){
//     alert("Win");
// }else if (guessesLeft = 0){
//     alert("You Lose");
// }
//main function, when a key is pressed

document.onkeyup = function (event) {
    guess = event.key.toLowerCase();
    // guessesLeft--;
    // document.getElementById("guessesLeft").textContent = guessesLeft + " guesses left!";
    // if (guess.keyCode >= 65 && event.keyCode <= 90){
        if (guessedLetters.indexOf(guess) === -1){
                guessedLetters.push(guess);
                document.getElementById("guessedLetters").textContent = "You have guessed: " + guessedLetters;
                guessesLeft--;
                document.getElementById("guessesLeft").textContent = guessesLeft + " guesses left!";
            for (var i = 0; i < theWord.length; i++){
                if (letters[i] === guess){
                    onScreen[i] = guess;
                    wordLength--;
                }
                currentGuess = currentGuess + onScreen[i] + " ";
            }
            document.getElementById("emptyWord").textContent = currentGuess;
            currentGuess = "";
        }
        gameStatus();
    }
    // }       
    // for (var i = 0; i < word.length; i++){
    //     if (guessedLetters.indexOf(guess) === -1){
    //         guessedLetters.push(guess);
    //         document.getElementById("guessedLetters").textContent = "You have guessed: " + guessedLetters;
    //         guessesLeft--;
    //         document.getElementById("guessesLeft").textContent = guessesLeft + " guesses left!";
    //     }
    //     else if (word[i] === guess){
    //         answer[i] = guess;
    //         currentGuess = answer.join(" ");
    //         wordProgress--;
    //         document.getElementById("emptyWord").textContent = answer;
    //     }
    // }

