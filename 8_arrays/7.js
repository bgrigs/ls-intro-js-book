//Use reduce to compute the sum of the squares of all of the numbers in an array:

let array = [3, 5, 7];

/*function sumOfSquares(numbers) {
  return numbers.reduce(function(accumulator, element) {
    return accumulator + element * element;
  }, 0); 
}*/

function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, element) => {
    return accumulator + element * element;
  }, 0)
}


console.log(sumOfSquares(array)); // => 83