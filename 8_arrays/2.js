/* Log all of the even values from myArray to the console. Expected Output:

6
4
2
4
16
0
*/

let myArray = [1, 3, 6, 11, 4, 2,
                4, 9, 17, 16, 0];

for (let i = 0; i < myArray.length; i+= 1) {
  let evenValue = myArray[i];
    if (evenValue % 2 === 0) {
      console.log(evenValue);
    }
}

/* You can also use forEach and let JavaScript take care of the indexing:

myArray.forEach(function(value) {
  if (value % 2 === 0) {
    console.log(value);
  }
}); */
