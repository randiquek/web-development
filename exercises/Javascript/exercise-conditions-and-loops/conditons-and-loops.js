// If Statements

let randomNumber = Math.floor(Math.random()*50) + 1;

if(randomNumber % 2 === 0) {
    console.log(randomNumber, " is even.");
}
else {
    console.log(randomNumber, " is odd.")
}

// Switch Statements


// let dayOfWeek = parseInt(prompt("Enter a number between 0 and 6:"));
// let day;

// switch(dayOfWeek) {
//     case 0: 
//         day = "Sunday";
//         break;
//     case 1: 
//         day = "Monday";
//         break;
//     case 2: 
//         day = "Tuesday";
//         break;
//     case 3: 
//         day = "Wednesday";
//         break;
//     case 4: 
//         day = "Thursday";
//         break;
//     case 5: 
//         day = "Friday";
//         break;
//     case 6: 
//         day= "Saturday";
//         break;  
//     default: 
//         day = "Unknown";            
// }

// console.log("Today is: ", day);

// While loop (dice)

let diceRoll = 0;

while(diceRoll !=6) {
    diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log("Rolled: ", diceRoll);
}
