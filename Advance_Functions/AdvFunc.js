// Advance Function in JavaScript:

// Closures

function outer() {
  let count = 0; // private variable
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2




// Currying

function add(a){
    return function (b){
        return a + b;
    };
}
const add5 = add(5);
console.log(add(3)); // OUTPUT: 8



// Partial Application

function multiply(a, b) {
    return a*b;
}
const double = multiply.bind(null, 2);
console.log(double(4));


// IIFE (Immediately Invoked Functions Expression)

(function () {
    console.log("This runs immediately!")
})(); 


// Function Composition

const add2 = (x) => x + 2;
const multiply3 = (x) => x*3;

const compose = (f, g) => (x) => f(g(x));
const add2ThenMultiply3 = compose(multiply3, add2);

console.log(add2ThenMultiply3(4))
