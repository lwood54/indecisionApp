console.log('utils.js is running');

const square = (x) => x * x;
const add = (a, b) => a + b;

// can export an individual item:
// export {square]};

// can export multiple named items:
export {square, add};

// can export in-line with item:
export const times3 = (x) => x * 3;

// can you export an object?
const objToExport = {
    name: 'me',
    age: '35'
}

export {objToExport};