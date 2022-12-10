//Take a look at this code snippet. What does this program log to the console? Why?

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

/*Answer: 'foo' will be logged to the console. Foo is initialized on line 3. Then in line 5, a new foo variable is declared however its scope is limited to its block and thus its value is not printed to the console. Had foo been resassigned (foo = 'qux'), 'qux' would be printed to the console. Using the let keyword caused a new foo variable to be declared.*/