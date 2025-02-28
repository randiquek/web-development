// console.log("Hello, world! " , "My name is Randi.");

// let y = 5;
// const x = 10;

// let z = x * (y + 2);


// console.log(x + y);
// console.log(x - y);
// console.log(x % y)

// console.log(z)

// /*
//     this is a multi line comment

// */

// let a = .5, b = 7, c = "some kind of string";

// console.log(a, b, c);

// var _name;      // using var to instantiate variables can lead to scoping issues
// console.log(_name)

// var name = "RANDI"; 
// console.log(name);

// // String functions

 //let testString = "\"Randi's String\""; // you can use the \ character to escape 
//let testString2 = 'testing " " " " " string';

// console.log(testString, testString.length);
// console.log(testString2);

// let position = 5;
// console.log("the character at position", position, "is", testString.charAt(position));

// console.log(testString.indexOf("ri"));

 //let randiIndex = testString.indexOf("Randi");
 //let text = testString.substring(randiIndex, randiIndex + 5);

 //console.log(randiIndex, text);

// let textWithSlice = testString.slice(9);
// console.log(textWithSlice);

// console.log("cHArleSRohUS@Gmail.com".toUpperCase());

//let testString3 = testString2.replace('"', "exciting");

//console.log(testString3);


// Using math 
let number = 1.5;
console.log(Math.floor(1.5), Math.ceil(number));
console.log(Math.hypot(10,10));
console.log(Math.pow(2, 8));
console.log(Math.sqrt(49));
console.log(Math.round(3.4));
console.log(123.123456.toFixed(2));

// Rounding

console.log("A number between 0 and 3: ", Math.floor(Math.random()*4));

console.log("A number between 1 and 3: ", Math.floor(Math.random()*3)+1);


// Part 1: String Manipulation

let message = "Welcome to Javascript!"
console.log("Length of message: ", message.length)

let first = message.charAt(0);
let last = message.charAt(message.length - 1);
console.log("First character is: ", first, "and the last character is ", last);

console.log(message.toUpperCase());

let position = "Javascript";
console.log("Position is: ", message.indexOf(position));

let javascriptIndex = message.indexOf("Javascript");
let js = message.substring(javascriptIndex, javascriptIndex + 10);
console.log(js)

let replacment = message.replace("Javascript", "Coding");
console.log(replacment);

// Part 2: Work with the Math Object
//Calculate and print the cosine of 45 degrees

console.log("A number between 1 and 100: ", Math.floor(Math.random()*101));

console.log(Math.sqrt(144));

console.log(Math.pow(3, 4));

console.log(Math.abs(-25));

console.log(Math.round(7.8));

console.log(Math.ceil(7.8));

console.log(Math.floor(7.8));

console.log(Math.trunc(7.8));

// Bonus Challenge 

let userName = prompt("Please Enter Your Name: ");
let nameLength = userName.length;
console.log("Hi there, ", + userName, ". Your name has ", nameLength, " characters.");

// Calculate degrees to radians
// let radians = 45 * (Math.PI/180);
// console.log(radians);


// console.log(Math.cos(Math.PI))