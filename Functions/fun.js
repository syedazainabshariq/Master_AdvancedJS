// SYNTAX:
// function name(params) {
    
// }


// CASE #1
function myfun(){
    const myfun = "This is my function";
}
console.log(myfun);



// CASE #2
function createCounter(start) {
  let count = start;

  return {
    increment: function () {
      return ++count;
    },
    decrement: function () {
      return --count;
    }
  };
}

const counter = createCounter(5);

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement()); 

// TASK:
//⚒️ Create a function that is named as "secretHolder(message)" that:
// 1. stores a secret message privately.
// 2. Returns two functions:
//             * getSecret() -> returns secret
//             * getSecret(NewMessage) -> updates secret


// 📄HINT: 

// function secretHolder(message) {
//   // Step 1: Store the secret message in a local variable
//   let secret = message;

//   // Step 2: Return an object with two methods:
//   return {
//     // Method to get the current secret
//     getSecret: function () {
//       return secret;
//     },

//     // Method to update the secret with a new message
//     setSecret: function (newMessage) {
//       secret = newMessage;
//     }
//   };
// }
