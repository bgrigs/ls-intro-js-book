/* What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]); 

Answer: This code outputs 'Not Empty'. While the array itself is empty, the argument isn't falsy. Falsy values in JS: false, 0, empty string, undefined, null, and NaN.  */
