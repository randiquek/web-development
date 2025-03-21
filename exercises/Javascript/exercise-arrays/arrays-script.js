// Part 1: Declaring and Accessing Arrays

let fruits = ["apple", "banana", "cherry", "date"];

console.log("The array of fruits contains: ", fruits)

console.log("The first item in the array is: ", fruits[0]);  

console.log("The last item in the array is: ", fruits[3]);  

// Part 2: Modifying Arrays

fruits[1] = "blueberry";
console.log("Banana has been replaced with", fruits[1]);

fruits.push("elderberry");
console.log(fruits);

fruits.unshift("apricot");
console.log(fruits);

console.log(fruits[0], "was removed from the list");
fruits.shift([0]);

console.log(fruits[4], "was removed from the list");
fruits.pop([4]);

console.log("The updated array is now ", fruits);

// Part 3: Looping Through an Array

let i = 0;

for(i = 0; i < fruits.length; i += 2) {
    console.log(fruits[i], "is contained in the array list every other item");
}

// Part 4: Advanced Array Methods

let cherryIndex = fruits.indexOf("cherry");
console.log("The index of cherry is at index ", cherryIndex);

let cherrySplice = fruits.splice(2, 1);
console.log("Cherry was spliced from the list: ", fruits);

let fruits2 = ["fig", "grape", "honeydew"];
fruits = fruits.concat(fruits2);

console.log("The new list of fruits is now: ", fruits);

// Bonus Challenge: Finding the Most Frequent Element

let randomNumbers = [1, 3, 2, 5, 4, 2, 1, 4, 3, 1]; // I could also have it random generate numbers for this array
let count = [0,0,0,0,0];

for(let i = 0; i < randomNumbers.length; i++) {
    let number = randomNumbers[i];
    count[number - 1]++;
}
let maxCount = 0;
let mostFrequentElement;

for(let i = 0; i <count.length; i++) {
    if(count[i] > maxCount) {
        maxCount = count[i]
        mostFrequentElement = i + 1;
    }
}
 console.log("The most freuqent number is:", mostFrequentElement);
    

