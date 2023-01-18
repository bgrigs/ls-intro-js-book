// What does the following code log to the console?

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

/*

Answer: Nothing will be logged to the console. The return line terminated the function before logging anything. The following would have returned Yipeee!!!! to the console:

function scream(words) {
  words = words + '!!!!';
  return console.log(words);
}

scream('Yipeee');

*/