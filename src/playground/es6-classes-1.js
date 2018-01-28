
class Person {
    constructor(name='Anonymous', age=0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return 'Hi, I am ' + this.name + '!';
        // using a template string is new and way better!
        return `Hi. I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        // must call parent constructor function with the super() function
        // supply name, age for parent class.
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        // turns truthy into "true" and falsy into "false"
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        
        if (this.hasMajor()) {
            description += `Their major is ${this.major}.`;
        }
        return description;
    }
}

// Traveler --> Person
class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let parentGreeting = super.getGreeting();
        if (this.hasHomeLocation()) {
            parentGreeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return parentGreeting;
    }
}
// add support for homeLocation
// Override getGreeting
// 1. if homeLocation, include in message "Hi. I am Logan Wood. I'm visiting from Fort Worth."
// 2. else Hi. I am Logan Wood. (original parent string)
// const me = new Student('Logan Wood', 35, 'Sociology');
// console.log(me.getDescription());
// console.log(me.getGreeting());

const meAsTraveler = new Traveler('Logan Wood', 35, 'Fort Worth');
console.log(meAsTraveler.getDescription(),meAsTraveler.getGreeting());



// const other = new Student();
// console.log(other.getDescription());
// console.log(other.getGreeting());
const otherTraveler = new Traveler();
console.log(otherTraveler.getDescription(), otherTraveler.getGreeting());

