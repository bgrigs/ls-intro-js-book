//What does the following code log to the console, and why?

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

// The output is 'Product 2', 'Product 3', and 'Product not found'. This occurs due to the lack of break statements, each subsequent case to fall through once a case is met. 