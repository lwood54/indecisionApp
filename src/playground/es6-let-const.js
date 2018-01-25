var nameVar = 'Logan';
console.log('nameVar', nameVar);

nameVar = 'Tiffany';
console.log('nameVar', nameVar);

let nameLet = 'Amrynn';
console.log('nameLet', nameLet);

nameLet = 'Eisley';
console.log('nameLet', nameLet);

// let nameLet = 'another name'; // will not work

const nameConst = 'React';
console.log('nameConst: ', nameConst);

// const nameConst = 'VueJS'; // won't work
// nameConst = 'Redux'; // won't work

function getPetName() {
    var petName = 'Holly';
    return petName;
}

console.log(getPetName());
// console.log(petName);    // doesn't work, 'petName is not defined'
// NOTE: same is true for let and const

// let and const are function level scope, but ALSO 'BLOCK' level scope:
// BLOCK SCOPING
var fullName = 'Logan Wood';

if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log('firstName inside if: ', firstName);
    let lastName = fullName.split(' ')[1];
    console.log('lastName inside if: ', lastName);
}
console.log('will also run outside of if: ', firstName);
// console.log('will NOT run outside of if: ', lastName);   // error: 'lastName is not defined'
// same is true of both let and const



