const guessBtn = document.getElementById('guess');
const inputElement = document.getElementById('user_input');
const printResult = document.getElementById('results');

function randomNumberGenerator(min = 1, max = 20) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber = randomNumberGenerator();

guessBtn.addEventListener('click', function() {
    const guess = parseInt(inputElement.value);

    printResult.innerHTML = '';

    if(isNaN(guess) || guess < 1 || guess > 20) {
        const invalidGuess = document.createElement('p');
        invalidGuess.innerHTML = 'Please enter a valid number that is between 1 and 20';
        printResult.appendChild(invalidGuess);
    } 
    else {
        if(guess === randomNumber) {
            const correctGuess = document.createElement('p');
            correctGuess.innerHTML = 'You got it!';
            printResult.appendChild(correctGuess);
            randomNumber = randomNumberGenerator();
        }
        else if(guess > randomNumber) {
            const highGuess = document.createElement('p');
            highGuess.innerHTML = 'No, try a lower number';
            printResult.appendChild(highGuess);
        }
        else {
            const lowGuess = document.createElement('p');
            lowGuess.innerHTML = 'No, try a higher number.';
            printResult.appendChild(lowGuess);
        }
    }

    inputElement.value = '';

});
