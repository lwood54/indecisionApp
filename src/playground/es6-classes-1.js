
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

const me = new Person('Logan Wood', 35);

console.log(me.getGreeting(), me.getDescription());

const other = new Person();
console.log(other.getGreeting(), other.getDescription());
