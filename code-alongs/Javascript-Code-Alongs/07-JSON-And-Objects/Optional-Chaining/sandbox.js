// // Optional Chaining

const person = {
    name: 'Alex',
    age: 25,
    contact: {
        email: 'alex@example.com'
    }
};

// // If statement to check for undefined/null

// if(person.socialMedia) {
//     console.log(person.socialMedia.twitter);
// }

// // Using && operator to avoid errors with short-circuiting 

// console.log(person.socialMedia && person.socialMedia.twitter);

// Use a ternary operator ? to choose between a specific or default option

// console.log(person.socialMedia ? person.socialMedia.twitter : "No Twitter account");

// // Optional chaining with ? before the dot operator when accessing data in an object 

// console.log(person.socialMedia?.twitter);

// // Arrow functions in javascript
// let sum = (x, y) => x + y;

// let greeting = name => console.log('Hello', name);
// greeting('Randi');

// console.log('test sum function', sum(3, 2));

// const user = [
//     { name: 'John', profile: {website: 'johnsblog.com'}},
//     { name: 'Emma'},
//     { name: 'Mike', profile: {website: 'mikesite.net'}}
// ]


// user.forEach(user => {console.log(user.name, user.profile?.website || 'No website available');

// });

// Object Shorthand

// const firstName = 'Mark';
// const lastName = 'Scott';
// const status = 'retired';

// const wrestler1 = {
//     firstName: firstName,
//     lastName: lastName,
//     status: status,
// };

// console.log(wrestler1);
// console.log(JSON.stringify(wrestler1, null, 4));

// const wrestler2 = {
//     firstName,
//     lastName,
//     status,
//     person,
// };
// console.log(wrestler2);
// console.log(JSON.stringify(wrestler2, null, 2));

// Object Destructuring

const me = {
    name: 'randiquek@gmail.com',
    age: 20,
    stats: {
        mileTime: '3:55',
        maxBench: 500,
    }, 
    isLying: true,
}

// console.log(me.name, me.age);

// // const { name, age } = me;
// // name = 'Jojo';
// // console.log(name, age);

// // Destructuring embedded object data

// const { stats: { mileTime, maxBench } } = me;
// console.log(mileTime, maxBench);


// If you don't use const to initialize a variable from a deconstructured object and modify it, the original object is unchanged
// let { name } = me;
// name = 'Jojo';
// console.log(name, me.name);

// Renaming variables while destructuring an object
const { name: email } = me;
console.log(email);

const you = {
    name: 'your name',
    myOwnKey: 'hi',
};

const someoneElse = {
    name: 'Unknown',
    age: 500,
};

// Object.assign(me, you, someoneElse);

// console.log('me', me);
// console.log('you', you);
// console.log('someoneElse', someoneElse);



// const newObject = Object.assign({}, me, you, someoneElse);
// console.log('New Object', newObject);
// console.log('me', me);
// console.log('you', you);
// console.log('someoneElse', someoneElse);

// This might be an easier way of combining objects, depends on use case
const benObject = {
    me: me,
    you: you,
    someoneElse: someoneElse,
}
// console.log(benObject.me);

// Spread operator
const newObject = {...me, ...you, ...someoneElse };
// console.log(newObject);

const obj = {
name: 'randiquek@gmail.com',
address: {
        street: '123 Main St.',
        city: 'Any Town',
        state: 'IL',
        country: 'USA',
    }
};

// const objCopy = { ...obj};

// objCopy.address.street = '456 Main St.';
// console.log(obj);
// console.log(objCopy);

const objDeepCopy = JSON.parse(JSON.stringify(obj));
objDeepCopy.address.street = "456 Main St.";
console.log(obj);
console.log(objDeepCopy);

