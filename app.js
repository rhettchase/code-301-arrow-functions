'use strict';

// STEP 1
// This is a standard function expression. You may also be familiar with function declarations, which begin with the "function" keyword.
const theOldWay = function(course) {
  return `I am currently enrolled in ${course}`;
};

// DONE: Uncomment the following line of code to see the output in the browser console
console.log('The old way:', theOldWay('Code 301'));


// STEP 2
// We can refactor our first function to use an arrow function.
// The word "function" is removed and an arrow is added in between the parameter and the opening curly brace
const theNewWay = (course) => {
  return `I am currently enrolled in ${course}`;
};

// DONE: Uncomment the following line of code to see the output in the browser console
console.log('The new way:', theNewWay('Code 301'));


// STEP 3
// When we have one parameter, we can omit the parentheses
const withoutParens = course => {
  return `I am currently enrolled in ${course}`;
};

// DONE: Uncomment the following line of code to see the output in the browser console
console.log('Without parens:', withoutParens('Code 301'));


// STEP 4
// If the code block contains a single line of code, we can write everything on one line
// We no longer need the curly braces and the return is implicit
// Without an arrow function, we need to explicitly type "return"
const oneLiner = course => `I cam currently enrolled in ${course}`;

// DONE: Uncomment the following line of code to see the output in the browser console
console.log('As a one-liner:', oneLiner('Code 301'));


// STEP 5
// What if we have multiple parameters?
// In a function expression, they all go in the parentheses
const add = function(num1, num2) {
  return `${num1} + ${num2} = ${num1 + num2}`;
};

// DONE: Uncomment the following line of code to see the output in the browser console
console.log('Let\'s do some math:', add(4, 5));


// STEP 6
// When we have multiple parameters, they must be wrapped in parentheses
// We can only remove the parentheses when there is a single parameter
const addOneLiner = (num1, num2) => `${num1} + ${num2} = ${num1 + num2}`;

// DONE: Uncomment the following line of code to see the output in the browser console
console.log('Add as a one-liner:', addOneLiner(4, 5));


// STEP 7
// What if we have multiple lines of code?
// We need to use a code block
const multiLiner = word => {
  word = word.toUpperCase();
  return word;
};

// DONE: Uncomment the following line of code to see the output in the browser console
console.log('Multi-line arrow function:', multiLiner('hello'));


// STEP 8
// The way an object is returned is different with an arrow function, too.
// Here is how we return an object without arrow functions
const oldObject = function(array) {
  return {
    firstValue: array[0],
    secondValue: array[1],
    thirdValue: array[2]
  };
};

// DONE: Uncomment the following line of code to see the output in the browser console
console.log('Hello from the old object function', oldObject(['hi', 'hello', 'are you there?']));


// STEP 9
// With an arrow function, we need to wrap our object in parentheses
// Otherwise, it will be interpreted as a code block
const newObject = array => ({
  firstValue: array[0],
  secondValue: array[1],
  thirdValue: array[2]
});

// DONE: Uncomment the following line of code to see the output in the browser console
console.log('Hello from the new object function', newObject(['hi', 'hello', 'are you there?']));


// STEP 10
// Uncomment the console.log lines to view the output of each function in the browser console.
// Refactor each function into an arrow function.
// Write your solutions on a single line wherever possible.

const sum = (a, b, c, d) => a + b + c + d

// let sum = function(a, b, c, d) {
//   return a + b + c + d;
// };

// DONE: Uncomment the following line of code to see the output in the browser console
console.log(sum(1, 2, 3, 4));


const objectLit = () => ({
  key1: 'value1',
  key2: 'value2',
  key3: 'value3'
});

// let objectLit = function() {
//   return {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3',
//   };
// };

// DONE: Uncomment the following line of code to see the output in the browser console
console.log(objectLit());

const sumAndProduct = (a, b) => {
  let sum = a + b;
  let product = a * b;
  return [sum, product];
};

// let sumAndProduct = function(a, b) {
//   let sum = a + b;
//   let product = a * b;
//   return [sum, product];
// };

// DONE: Uncomment the following line of code to see the output in the browser console
console.log(sumAndProduct(3, 9));

const message = name => `Hello, ${name}!`;

// let message = function(name) {
//   return `Hello, ${name}!`;
// };

// DONE: Uncomment the following line of code to see the output in the browser console
console.log(message('Allie'));


let Student = function(name, age, hometown) {
  this.name = name;
  this.age = age;
  this.hometown = hometown;
};

// let joe = (name, age, hometown) => new Student(name, age, hometown); // arrow function doesn't work with Constructor 
let joe = new Student('Joe Schmoe', 100, 'Anytown, USA');

// DONE: Uncomment the following line of code to see the output in the browser console
// Note that the arrow function will cause this code to break!
console.log(joe);

// DONE: After viewing the previous console.log(), return the code to a working state.


// const Student.prototype.greeting = () => `Hi, my name is ${this.name}` // throws error 'Identifier Student has already been declared`

Student.prototype.greeting = function() {
  return `Hi, my name is ${this.name}`;
};

// DONE: Uncomment the following line of code to see the output in the browser console
// Note that the arrow function will cause this method to break!
console.log(joe.greeting());

// DONE: After viewing the previous console.log(), return the code to a working state.



Student.courseName = function() {
  return 'This student is enrolled in Code 301.';
};

// DONE: Uncomment the following line of code to see the output in the browser console
console.log(Student.courseName());



// STEP 11
// How do arrow functions affect constructor functions?
Student.prototype.scope = function() {
  console.log(this);
};

// DONE: Uncomment the following line of code to see the output in the browser console
joe.scope();

Student.prototype.scopeArrow = () => console.log(this);

// DONE: Uncomment the following line of code to see the output in the browser console
joe.scopeArrow();

// DONE: Write a COMMENT below to answer the following questions.
// 1. What is "this" when joe.scope() is invoked?
// "this" refers to the object that called the function. 'joe' is the object calling the 'scope' function, so "this" will refer to the 'joe' object
// output: Student { name: 'Joe', age: 25, hometown: 'City' }

// 2. What is "this" when joe.scopeArrow() is invoked?
// because arrow functions do not have their own 'this' binding. instead, they inherit the 'this' value from the surrounding scope (lexical scoping)
// since scopeArrow function is defined within the prototype of `Student` (in outer scope), 'this' inside 'scopeArrow' will refer to the 'this' value of that outer scope -> often the global object ('window' in a browser environment or 'global' in Node.js)
// Output: [Object: Window]

// 3. Explain why "this" is different when an arrow function is used.
// how arrow functions handle the binding of 'this'
// regular function expressions: value of 'this' is dynamically scoped, which means it's determined by how the function is called. When a function is called as a method of an object, `this` refers to the object the method is called on. 
// Arrow functions: do not have their own `this` binding. Instead, they inherit the `this` value from the surrounding (lexical) scope at the time they are defined. value of `this` inside an arrow function is not influenced by how the function is called but rather by where the function is written in the code.
