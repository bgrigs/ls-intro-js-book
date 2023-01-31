//Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return.


function evenOrOdd(a) {
  if (!Number.isInteger(a)) {
    console.log('Please enter an integer');
    return;
  }

  if (a % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(10);
evenOrOdd('dude');
