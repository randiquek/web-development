const headsBtn = document.getElementById('heads');

const tailsBtn = document.getElementById('tails');

const resultsSection = document.getElementById('result');

function flipCoin(choice) {
    const flipChoices = ["heads", "tails"];
    const coinFlip = flipChoices[Math.floor(Math.random() * 2)];
    
    const flipChoice = document.createElement('p');
    flipChoice.innerHTML = 'You guessed ' + choice;

    const flipResult = document.createElement('p')
    flipResult.innerHTML = 'The coin flips and comes up ' + coinFlip + '. Good guess!';
    
    resultsSection.innerHTML = '';
    resultsSection.appendChild(flipChoice);
    resultsSection.appendChild(flipResult);
}

headsBtn.addEventListener('click', function() {
    flipCoin('heads');
});

tailsBtn.addEventListener('click', function() {
    flipCoin('tails');
});