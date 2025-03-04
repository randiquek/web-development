// Part 1: Function Basics

function greetUser(name) {
    console.log("Hello, " + name);
}
greetUser("Jane");
greetUser("John");

// Part 2: Returning Values

function squareNumber(number) {
    console.log(Math.pow(number, 2));
}

squareNumber(4);
squareNumber(7);

// Part 3: Multiple Parameters

function addNumbers(num1, num2) {
    sum = num1 + num2;
    console.log("The sum is:", sum);
}

addNumbers(10, 5);
addNumbers(3, 8);

// Part 4: Random Color Generator

let colors = ["red", "blue", "green", "yellow", "purple", "orange"];

function getRandomColor() {

    let colorIndex = Math.floor(Math.random() * colors.length);
    let chosenColor = colors[colorIndex];
    console.log(chosenColor);

}

getRandomColor();
getRandomColor();
getRandomColor();

// Part 5: Random Fortune Teller

let fortunes = [
    "You will have a great day!",
    "A surprise is waiting for you.",
    "Something exciting is coming soon.",
    "Be cautious with your decisions today.",
    "Happiness is around the corner."
   ];

function tellFortune() {
    let fortuneIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[fortuneIndex];
    console.log("Your fortune for today is: ", randomFortune);
}

tellFortune();