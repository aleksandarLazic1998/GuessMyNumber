'use strict';
// Variable for getting the random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Variable that will hold the score on begining
let score = 20;
// Variable that will hold the maximum score that the user get
let highScore = 0;

// Selecting the element with the .check class and adding event listener to it
document.querySelector('.check').addEventListener('click', function () {

    // Selecting the element with the guess class and getting the value from it that is in number data type
    const guess = Number(document.querySelector('.guess').value);

    // If the input is empty
    if (!guess) {
        // Selecting the element with class message that will be shown on the page
        document.querySelector('.message').textContent = 'No Number🚫';

        // If the user guessed the number
    } else if (guess === secretNumber) {

        // Display the messages '🎉Correct Number🎊' and the SecretNumber, and change styles of the elements on the page
        document.querySelector('.message').textContent = '🎉Correct Number🎊';
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = "30rem";

        //Check if the score is bigger than the high score and replace it if it is
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } //If the user is wrong and the score is larger than 1
    else if (guess !== secretNumber) {
        if (score > 1) {
            // Display the message that will help the user to guess better
            document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High 📈' : '📉 Too Low 📉';

            //For every wrong try decrement the score for 1
            score--;
            document.querySelector('.score').textContent = score;

            //  If the score is 0 the game is over and the message will dispplay
        } else {
            document.querySelector('.message').textContent = '😕Game lost ';
            document.querySelector('.score').textContent = 0;
        }
    }
});

// Selecting the element with the class again and adding the Event Listener on it; This event listener will restart the game from the beggining
document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = " ";
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = "15rem";
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
});