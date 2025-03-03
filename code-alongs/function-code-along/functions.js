function greeting() {
    console.log("Hello!")
}
greeting();

function name_greeting(name = "Anonymous") {
    console.log("Hello, ", name + "!")
}

name_greeting("Randi");
name_greeting();

function average() { //arguments array that is included with every function
    let sum = 0;
    
    for(let i = 0; i <arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum / arguments.length;
}

console.log("The average of numbers is: ", average(1,2,3,4,5,6,7,8,9));


// Converting dice simulator into functions
function roll(max = 6) {
    return Math.floor(Math.random() * max) + 1;
}

function log_roll(die) {
    console.log("The number that was rolled was: ", die);
}

log_roll(roll());

// get_input(prompt) gets input from the user and validates that it is a valid number
function get_input(prompt) {
    let num_rolls;
    while(isNaN(num_rolls) || num_rolls === undefined || num_rolls < 0) {
    
        let input = window.prompt(prompt);
        num_rolls = Number(input);
        console.log(num_rolls);
    }
    return num_rolls;
}

// initialize_rolls() initialize dice roll storage array
function initialize_rolls(die = 6) {
    let rolls = [];

    for(let i = 0; i < (die * 2 + 1); i++) {
        rolls.push(0);
    }

    return rolls;
}
console.log(initialize_rolls());
console.log(initialize_rolls(8));
console.log(initialize_rolls(20));

// roll() rolls an individual die
function roll(max = 6) {
    return Math.floor(Math.random() * max) + 1;
}

// roll_dice()
function roll_dice(num_rolls, die_size = 6) {
    let rolls = initialize_rolls(die_size)


    let die1;
    let die2;
    let roll;

    for(let i = 0; i < num_rolls; i++) {
        let die1 = this.roll(die_size);
        let die2 = this.roll(die_size);
        let roll = die1 + die2;
        rolls[roll]++;
    }

    return rolls;

}


// roll_results

function roll_results(rolls_array, num_rolls) {
    for(let i = 2; i < rolls_array.length; i++) {
        let count = rolls_array[i];
    
    // calculate percentage of roll
        let percentage = count / num_rolls * 100;
    
    // print count and percentge that result was rolled
        console.log(i, "was rolled", count, "times", percentage.toFixed(2), "%");
    }
}
let num_rolls = get_input("How many dice rolls should we make?");
let rolls = roll_dice(num_rolls, 20);
roll_results(rolls, num_rolls);

