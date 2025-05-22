# JavaScript Prototypes and Inheritance — A Quick Guide

### What is a Prototype?
- Every JavaScript object has a prototype — another object it inherits properties and methods from.
- This prototype chain enables inheritance: if a property/method isn’t found on the object itself, JS looks up the chain.

### How to Set Prototypes
- Use `Object.create(protoObj)` to create an object with a specified prototype.

### Example:

```js
const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

const rabbit = Object.create(animal);
rabbit.jumps = true;

console.log(rabbit.eats);  // true (inherited)
rabbit.walk();             // Animal walks (inherited method)
console.log(rabbit.jumps); // true (own property)


Notes:
rabbit doesn’t have eats or walk directly, but can use them via its prototype (animal).

Object.getPrototypeOf(obj) returns the prototype of obj.

### 📝 Task: Prototype Practice

Create an object `car` with a method `start()` that logs `"Car started"`.  
Then create another object `myCar` that inherits from `car` and has its own property `model` set to `"Tesla"`.

Test that `myCar` can call the `start()` method and access its own `model` property.

---

**Example expected output:**

```js
myCar.start();           // Car started
console.log(myCar.model); // Tesla

