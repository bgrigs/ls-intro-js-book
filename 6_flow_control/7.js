// Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. Otherwise, it should return the original string. Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'.

function caps(input) {
  if (input.length > 10) {
    return input.toUpperCase();
  } else {
    return input;
  }
}

console.log(caps('hello world'));
console.log(caps('bye'));

// Another solution:

function capInput(input) {
  return (input.length > 10) ? input.toUpperCase() : input;
}

console.log(capInput('dude'));
console.log(capInput('claire is bear'));