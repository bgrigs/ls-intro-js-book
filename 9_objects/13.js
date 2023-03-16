/* As written, this code will raise an error on line 5. Without modifying foo, update this code to print the desired text.*/

function foo(bar) {
  console.log(bar());
}

foo(() => 'Welcome');    // Should print 'Welcome'
foo(() => 3.1415);    // Should print 3.1415
foo(() => [1, 2, 3]);    // Should print [1, 2, 3]

/*
foo(function() { return "Welcome" });
foo(function() { return 3.1415 });
foo(function() { return [1, 2, 3] }); */
