"use strict";
// primitives
Object.defineProperty(exports, "__esModule", { value: true });
let age;
age = 25;
let userName;
userName = "Alice";
let isStudent;
isStudent = true;
//Objects and arrays
let hobbies;
hobbies = ["Reading", "Traveling", "Gaming"];
let any;
any = { name: "Bob", age: 30 };
any = 60;
let person;
person = { name: "Charlie", age: 28 };
let people;
people = [
    { name: "Dave", age: 22 },
    { name: "Eve", age: 24 },
];
// Type inference
let course = "TypeScript Basics";
// course = 1234; // Error: Type 'number' is not assignable to type 'string'.
// Union types
let score;
score = 95;
score = "A+";
let person1;
person = { name: "Charlie", age: 28 };
let people1;
people = [
    { name: "Dave", age: 22 },
    { name: "Eve", age: 24 },
];
//Functions & Types
function add(a, b) {
    return a + b;
}
const result11 = add(2, 3);
console.log(`The result is ${result11}`);
// Generics
function insertAtTheBeginning(arr, value) {
    return [value, ...arr];
}
const numbers = [1, 2, 3];
const updatedNumbers = insertAtTheBeginning(numbers, 0);
const strings = ["a", "b", "c"];
const updatedStrings = insertAtTheBeginning(strings, "z");
function identity(arg) {
    return arg;
}
const output = identity("Hello, TypeScript!");
console.log(output); // Output: Hello, TypeScript!
const numberOutput = identity(42);
console.log(numberOutput); // Output: 42
//Class
class Student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
const student1 = new Student("Frank", 21);
console.log(student1.introduce());
let human1 = {
    name: "Grace",
    age: 26,
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};
class Teacher {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
//# sourceMappingURL=basics.js.map