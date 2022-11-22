// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`🌻🌻🌻Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`☔☔☔Assertion Failed: ${actual} !== ${expected}`);
//   }
// };


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

// const countLetters = function(str) {
//   let counter = {};

//   for (let value of str) {
//     if (value === ' ') {
//       continue;
//     } else {
//       counter[value] = (counter[value] || 0) + 1;
//     }
//   }
//   return counter;
// };
// countLetters("Trina Rundgren is a Web Developer");
// console.log(countLetters("Trina Rundgren is a Web Developer"));
