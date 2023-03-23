//What does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

//This function will take a string and divide it into an ordered list of substrings by searching for the pattern (in this case, strings separated by a space) and put them into an array. It will then reverse the order of the elements in the array and return an array that contains the length of each of the words.

console.log(doSomething('This is method chaining'));