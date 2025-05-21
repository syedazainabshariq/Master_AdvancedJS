// Function Context and Invocation — this, call, apply, and bind


//⚡IMPORTANT: When using this code please do remember that the whole code can't be uncommented altogether, 
// since it would cause errors, and bugs. 




//------------------------------------------------------------------------------------------------------------------------------------------------//



// this

// const person = {
//     name: "Alex",
//     greet(){
//         console.log("Hello, " + this.name);
//     }
// };
// person.greet(); //OUTPUT: Hello, Alex




 //------------------------------------------------------------------------------------------------------------------------------------------------//



// call() and apply()

// function greet(){
//     console.log("Hi, " + this.name);
// }

// const human = { name: "Sam" };

// greet.call(user); //OUTPUT: Hi, Sam
// greet.apply(user) //OUTPUT: Hi, Sam




//------------------------------------------------------------------------------------------------------------------------------------------------//



//bind()

// const user = { name: "Alex" };

// function sayHi() {
//     console.log("Hi " + this.name);
// }

// const sayHiAlex = sayHi.bind(user);
// sayHiAlex(); //OUTPUT: Hi, Alex

// PRACTICE:
//  this, call, apply, bind
// Create a function introduce(city, hobby) that logs:
// "My name is (name). I live in (city) and I like (hobby)."
// Use the function with different this objects by calling it with call(), apply(), and bind().

// SOLUTION: 
// function introduce(city, hobby) {
//     //using this
//   console.log(`My name is ${this.name}. I live in ${city} and I like ${hobby}.`);
// }

// const person1 = { name: "Alice" };
// const person2 = { name: "Bob" };

// // Using call
// introduce.call(person1, "New York", "painting");

// // Using apply
// introduce.apply(person2, ["Los Angeles", "cycling"]);

// // Using bind
// const introduceAlice = introduce.bind(person1);
// introduceAlice("Chicago", "reading");

// const introduceBob = introduce.bind(person2);
// introduceBob("Miami", "swimming");
//OUTPUT:
//My name is Alice. I live in New York and I like painting.
// My name is Bob. I live in Los Angeles and I like cycling.
// My name is Alice. I live in Chicago and I like reading.
// My name is Bob. I live in Miami and I like swimming.




//------------------------------------------------------------------------------------------------------------------------------------------------//



//Bonus Concept: Losing this – Common Mistake


//❌ Problem:
// const person = {
//   name: "Zara",
//   greet() {
//     console.log("Hello, " + this.name);
//   }
// };

// const greetFunc = person.greet;
// greetFunc(); // OUTPUT: Hello, undefined (or error in strict mode)


// //✅ Fix it with bind():
// const boundGreet = person.greet.bind(person);
// boundGreet(); // OUTPUT: Hello, Zara


//------------------------------------------------------------------------------------------------------------------------------------------------//



//TASK:
// You have an object calculator with a method add().
//  ✅ Your job:
// * Store calculator.add in a variable sum.

// * Call sum() and fix the this problem using bind().

// Here’s your hint:

// * When you do const sum = calculator.add;, the method loses its connection to calculator.

// * So when you call sum(), this.a and this.b become undefined.

// * To fix it, you need to bind calculator to the function:

// HELP:
const sum = calculator.add.bind(calculator);

//------x---------------x-----------------x------------x-------------------------x-----------------x-----------------x--------------x----------------x---------x---//