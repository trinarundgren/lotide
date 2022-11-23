// ASSERT EQUAL
const assertEqual = require('./assertEqual').default;

const head = (array) => {
  if (array.length >= 1) {
    let headElement = array[0];
    return headElement;
  } else if (array.length === 0) {
    return undefined;
  }
};

module.exports = head;


// const assertEqual = function(actual, expected) {
//     if (actual === expected) {
//         console.log(`🌻🌻🌻 Assertion Passed: ${actual} === ${expected}`);
//     } else {
//         console.log(`☔☔☔ Assertion Failed: ${actual} !== ${expected}`);
//     }
// };