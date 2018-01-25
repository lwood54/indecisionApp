const square = function (x) {
    return x * x;
};

console.log(square(8));

// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x;
// const squareArrow = x => x * x;
console.log(squareArrow(3));

// Arrow function expression syntax:

// NOTE: ES6 Arrow functions are ALWAYS anonymous.

// CHALLENGE:
//  - user arrow functions
//  - getFirstName()
//  create regular arrow function
//  create 2nd function using expression syntax
const fullName = 'Logan Wood';

// REGULAR ARROW FUNCTION
// const getFirstName = (name) => {
//     return name.split(' ')[0];
// }

// EXPRESSON ARROW FUNCTION SYNTAX
const getFirstName = (name) => name.split(' ')[0];
console.log('first name: ', getFirstName(fullName));


