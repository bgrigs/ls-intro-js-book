// What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// Answer: 1 will be logged to the console. Because the let keyword is used in foo(), a new, local variable named bar is being created in the function's inner scope. This does not affect the outer scope/ the global variable bar. 

