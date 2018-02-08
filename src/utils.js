console.log('utils.js is running');

const square = (x) => x * x;
const add = (a, b) => a + b;

// can export an individual item:
// export {square};


const subtract = (a, b) => a - b;

// can export multiple named items:
// export {square, add, subtract as default};
// YOU CAN ALSO EXPORT DEFAULT THE FOLLOWING 2 WAYS:
    // 1. const timesNums = (a, b) => a * b;
    //      export default timesNums;
    //  NOTE: export default const timesNums = (a, b) => a * b; WILL NOT WORK
    
    // 2. export default (a, b) => a * b;
    // NOTE: We don't really need to name it here because when you export
    // a default, you can name it on the import side.



// can export in-line with item:
export const times3 = (x) => x * 3;

// can you export an object?
const objToExport = {
    name: 'me',
    age: '35'
}

export {objToExport};

import validator from 'validator';

const oppositeOfValid = !(validator.isEmail('abc@123.com'));

export default oppositeOfValid;