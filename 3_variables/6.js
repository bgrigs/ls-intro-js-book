//Will this program produce an error when run? Why or why not?

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

//Answer: No, this program will not produce an error because the FOO variable is being delcared in two different blocks/scopes. This program would produce an error if it attempted to reassign the FOO variable vs declaring a FOO variable in another scope.