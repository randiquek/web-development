// Read input from user, 
// validate input, 
// generate random dice rolls, 
// add to array,
// print results

let num_rolls;

let valid_input = false;

while(isNaN(num_rolls) || num_rolls === undefined || num_rolls < 0) {
    
    let input = window.prompt("How many dice rolls should we make?");
    num_rolls = Number(input);
    console.log(num_rolls);
}

let rolls = [0,0,0,0,0,0,0,0,0,0,0,0,0];

let die1;
let die2;
let roll;

// loop through dice rolling num_rolls times
for(let i = 0; i < num_rolls; i++) {

// generate a random number (1-6) for each die
die1 = Math.floor(Math.random() * 6) + 1;
die2 = Math.floor(Math.random() * 6) + 1;

// add dice rolls together and add it to the roll variable
roll = die1 + die2;

//increment an element in our array based on value of roll
rolls[roll]++;

}
console.log("We rolled the dice", num_rolls, "times...");

// loop 2-12
for(let i = 0; i < rolls.length; i++) {
    let count = rolls[i];

// calculate percentage of roll
    let percentage = count / num_rolls * 100;

// print count and percentge that result was rolled
    console.log(i, "was rolled", count, "times", percentage.toFixed(2), "%");

}
console.log("end");