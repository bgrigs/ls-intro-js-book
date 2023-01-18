// In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. Add a function to this program that solicits the user's first and last names in separate invocations; the function should return the appropriate name as a string. Use the return values to greet the user with their full name.

/*
let rlSync = require('readline-sync');
let firstName = rlSync.question("What's your first name?\n");
let lastName = rlSync.question("What's your last name?\n");

console.log(`Hello, ${firstName} ${lastName}!`);*/


function greeter(prompt) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return name;
}

let firstName = greeter("What's your first name?\n");
let lastName = greeter("What's your last name?\n");

console.log(`Hello, ${firstName} ${lastName}!`)

