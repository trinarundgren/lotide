// ASSERT EQUAL...
const assertEqual = require('./assertEqual');

// COUNT LETTERS FUNCTION

const countLetters = function(str) {
const result = {};

  for (const letter of str) {

    if (!result[letter]) {
      result[letter] = 0;
    }
    result[letter]++;
  }

  return result;
};

console.log(countLetters("Hello World"));

countLetters("Trina Rundgren is a Web Developer");
console.log(countLetters("Trina Rundgren is a Web Developer"));
