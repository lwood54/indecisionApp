// import './utils.js';

// import a single named export item, in this case, a function
import {square, add, times3, objToExport} from './utils.js';

console.log('app.js is running now');

console.log(square(5));
console.log(add(5, 10));
console.log(times3(8));

console.log(objToExport.name, 'is ', objToExport.age, ' years old.');

// person.js
import {isAdult, canDrink} from './person.js';
console.log("I'm 17, so I'm an adult right? ", isAdult(17));
console.log("I am indeed 35, so I can drink right? ", canDrink(35));

