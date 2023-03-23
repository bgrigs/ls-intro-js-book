//What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// This code logs [1, 4, 3] to the console. This is because array1 and array2 reference the same array. Assignment of an array to another doesn't create a new array, but rather copies a reference from the original array into the target.

