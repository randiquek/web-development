// /*
// Exercise: Optional Chaining
// */

// const book = {
//     title: "JavaScript Basics",
//     edition: "5th",
//     author: {
//         name: "John Doe",
//             social: {
//             twitter: "@johndoe"
//             }
//     }
//    };
//    // Use optional chaining to access the Twitter handle
//    console.log(book.author?.social?.twitter);
//    // Try accessing a non-existent property using optional chaining
//    console.log(book.publisher?.name);
   
//    // Challenge 

//    if(book.edition) {
//     console.log(book.edition);
//    }
//    console.log(book.edition ? book.edition : "No book edition");
   

// /*
// Exercise: Optional Short-Hand
// */   

// const title = "Software Engineer";
// const company = "Tech Corp";
// const jobLocation = "New York";


// const job = {
//     title,
//     company,
//     jobLocation,
// };
// console.log(job);


// /*
// Exercise: Optional Destructuring
// */   

// const book = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     year: 1925,
//    };
//    console.log(book.title, book.author, book.year);

//    const { title, author, year, } = book;
//    console.log(title, author, year);

/*
Exercise: Object Assigning/Spread
*/     

const user = {
    name: "Alice",
    age: 28,
   };
   const job = {
    title: "Software Engineer",
    company: "Tech Corp",
    name: "Technical Writer",
   };
   const jobLocation = {
    city: "New York",
    country: "USA",
   };
//  Object.assign() Version

//    const userProfile = Object.assign({}, user, job, jobLocation);
//    console.log(userProfile);

// Refactored Spread Operator

//    const userProfile = {...user, ...job, ...jobLocation };
//    console.log(userProfile);

/*
Challenge
*/  

const userProfile = {...user, ...job, ...jobLocation };
console.log(userProfile); // After adding the name property to job, the job's name property is retained instead og the user's name
