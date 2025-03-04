// create a cat object

let cat = {
    name: 'Fluffy', 
    breed: 'Bombay Cat',
    age: 3,
    meow: function() {
        console.log(this.name, "says 'Meow!'");
    }
}

console.log(cat.name);
console.log(cat.age);

cat.meow();

cat.age = 4;

console.log(cat.age);

cat.color = "Black";

console.log(cat.color);

delete cat.color;

console.log(cat.color);

// create owner object

let owner = {
    name: "Randi",
    city: "Somewhere"
};

cat.owner = owner;

console.log(cat.owner.name);
console.log(cat.owner.city);


// compare objects 

let cup1 = {color: "blue", vol: 12};
let cup2 = {color: "blue", vol: 12};

console.log(cup1 == cup2);

let cup3 = cup2;

console.log(cup3 == cup2);

cup2.color = 'red';
cup2.material = "glass";

console.log(cup3.color);
console.log(cup3.material);

cup3.material = 'wood';
console.log(cup2.material);