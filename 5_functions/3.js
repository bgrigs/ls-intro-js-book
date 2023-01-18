// Write a program that uses a multiply function to multiply two numbers and returns the result. Ask the user to enter the two numbers, then output the numbers and result as a simple equation.

function getNumber(prompt) {
  let rlSync = require('readline-sync');
  return Number(rlSync.question(prompt));
}

function multiply(inputOne, inputTwo) {
  return inputOne * inputTwo;
}

let first = getNumber("Enter a number: ");
let second = getNumber("Enter another number: ");

console.log(`${first} * ${second} = ${multiply(first, second)}`);