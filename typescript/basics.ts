// primitives

let age: number;
age = 25;
let userName: string;
userName = "Alice";
let isStudent: boolean;
isStudent = true;


//Objects and arrays

let hobbies: string[];

hobbies = ["Reading", "Traveling", "Gaming"];

let any: any;
any = { name: "Bob", age: 30 };

any = 60;

let person:
  {
    name: string;
    age: number;
  };

person = { name: "Charlie", age: 28 };

let people: { name: string; age: number }[];
people = [
  { name: "Dave", age: 22 },
  { name: "Eve", age: 24 },
];

// Type inference

let course = "TypeScript Basics";
// course = 1234; // Error: Type 'number' is not assignable to type 'string'.


// Union types

let score: number | string;
score = 95;
score = "A+";
// score = true; // Error: Type 'boolean' is not assignable to type 'number | string'.


//Type Aliases
type Person = {
  name: string;
  age: number;
};

let person1: Person;

person = { name: "Charlie", age: 28 };

let people1: Person[];
people = [
  { name: "Dave", age: 22 },
  { name: "Eve", age: 24 },
];

//Functions & Types
function add(a: number, b: number): number {
  return a + b;
}
const result11 = add(2, 3);
console.log(`The result is ${result11}`);


// Generics

function insertAtTheBeginning<T>(arr: T[], value: T): T[] {
  return [value, ...arr];
}
const numbers = [1, 2, 3];
const updatedNumbers = insertAtTheBeginning(numbers, 0);

const strings = ["a", "b", "c"];
const updatedStrings = insertAtTheBeginning(strings, "z");

function identity<T>(arg: T): T {
  return arg;
}
const output = identity<string>("Hello, TypeScript!");
console.log(output); // Output: Hello, TypeScript!
const numberOutput = identity<number>(42);
console.log(numberOutput); // Output: 42

//Class

class Student {

  constructor(public name: string, public age: number) { }

  introduce(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
const student1 = new Student("Frank", 21);
console.log(student1.introduce());


// Interface

interface Human {
  name: string;
  age: number;
  introduce(): string;
}

let human1: Human = {
  name: "Grace",
  age: 26,
  introduce(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Teacher implements Human {
  constructor(public name: string, public age: number) { }

  introduce(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}