// Create an array from the keys of the object obj below, with all of the keys converted to uppercase. Your implementation must not mutate obj.

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);

let upperKeys = objKeys.map((key) => key.toUpperCase());

/*let upperKeys = objKeys.map(function(key) {
  return key.toUpperCase();
})*/

console.log(upperKeys);
console.log(obj);

