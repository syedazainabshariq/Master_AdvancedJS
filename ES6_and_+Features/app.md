# 📘 Day 5: ES6+ Features in JavaScript

This covers the most important ES6+ features every JavaScript developer should know.

---

## ✅ 1. `let`, `const` vs `var`

- `let` and `const` are **block-scoped**.
- `var` is **function-scoped** (avoid it in modern JS).
- `const` variables **can't be reassigned**, but **objects/arrays can be mutated**.

```js
const person = { name: "Ali" };
person.name = "Zara"; // ✅ allowed

// Arrow functions are shorter and do not bind their own 'this'

const add = (a, b) => a + b;

const sayHello = name => `Hello, ${name}`;
console.log(sayHello("Ali")); // Hello, Ali

// Extract values from objects or arrays

// Object destructuring
const user = { name: "Zara", age: 22 };
const { name, age } = user;

// Array destructuring
const arr = [1, 2, 3];
const [first, second] = arr;

console.log(name, age); // Zara 22
console.log(first, second); // 1 2


// Spread: expands elements
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

// Rest: collects remaining elements
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3)); // 6


// Use backticks `` for multi-line strings and variable interpolation

const name = "Ali";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Ali!


// Set default values in function parameters

function greet(name = "Guest") {
  return `Hi, ${name}`;
}

console.log(greet()); // Hi, Guest


// If key and variable name are the same, use shorthand

const age = 25;
const person = { age }; // same as { age: age }

console.log(person); // { age: 25 }


// ?. allows safe access to nested properties
// ?? provides a fallback for null or undefined

const user = {};
console.log(user?.profile?.email); // undefined (no error)

const name = user.name ?? "Anonymous";
console.log(name); // Anonymous


## 🧠 Day 5 Quiz
1. "What's the difference between let and const?"
2. "What does this output?"

const arr = [1, 2];
const newArr = [...arr, 3];
console.log(newArr);

3. "What does this return?"
const greet = (name = "Guest") => `Hi ${name}`;
greet();


4. "What is optional chaining used for?"
5. "How is this handled in arrow functions?"