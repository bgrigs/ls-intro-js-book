//Using arithmetic operators, get the individual digits of a 4-digit number like 4936:

let number = 4936;
let ones = number % 10;
console.log(ones);

number = (number - ones) / 10;
console.log(number);

let tens = number % 10;
console.log(tens);

number = (number - tens) / 10;
console.log(number);

let hundreds = number % 10;
console.log(hundreds);

let thousands = (number - hundreds) / 10;
console.log(thousands);