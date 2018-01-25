// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1));


// this keyword - no longer bound

const user = {
    name: 'Logan',
    cities: [
        'Conroe',
        'Austin',
        'Fort Worth'
    ],
    // OLD WAY OF DEFINING METHODS
    // printPlacesLived: function() { // don't want arrow function here
    //     console.log(this.name);     // because of the same reason, it doesn't
    //     console.log(this.cities);   // bind to its own object, so it goes to parent object, which is in the global scope
        
    //     // arrow functions don't bind its own "this" value
    //     this.cities.forEach((city) => {
    //         console.log(this.name + ' has lived in ' + city); 
    //     });

        // a regular anonymous function can't access the "this" that is desired
        // DOESN'T WORK
        // this.cities.forEach(function(city) {
        //     console.log(this.name + ' has lived in ' + city);
        //     // this.name now refers to a different object
        // });
    // }

    // NEW WAY OF DEFINING METHODS
    printPlacesLived() {
        // USING .map()
        // return this.cities.map((city) => {
        //     return this.name + ' has lived in ' + city;
        // });
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        // return the results of mapping 'cities' which was an array with
        // a list of concatenated items.
    }
}

console.log(user.printPlacesLived());

// CHALLENGE:
const multiplier = {
    // define an array of numbers that will be multiplied
    nums: [1,1,2,3,5,8,13,21,34],
    // multiplyBy - a single number
    multiplyBy: 3,
    // multiply - return a new array where the numbers have been multiplied
    multiply() {
        return this.nums.map((num) => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
