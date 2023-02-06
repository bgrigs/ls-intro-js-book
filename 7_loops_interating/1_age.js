//Modify the age.js program you wrote in the exercises for the Input/Output chapter. The updated code should use a for loop to display the future ages.

let readlineSync = require('readline-sync');
let age = Number(readlineSync.question('How old are you? '));
console.log(`You are ${age} years old.`);

for (let future = 10; future <= 40; future += 10) {
  console.log(`In ${future} years, you will be ${age + future} years old.`);
}



