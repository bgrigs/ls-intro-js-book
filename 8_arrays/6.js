//Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(strings) {
  let lengths = strings.map(function(letters) {
    return letters.length; 
  });
  let odd = lengths.filter(function(length) {
    return length % 2 === 1;
  }); 
  return odd;
}

console.log(oddLengths(arr)); // => [1, 5, 3]