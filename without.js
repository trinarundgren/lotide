// const eqArrays = function(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   } return true;
// };

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`🌻🌻🌻Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`☔☔☔Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const without = function(source, itemsToRemove) {
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        source.splice(i, 1);
      }
    }
  }

  return source;
};

assertArraysEqual(without([1,2,3], [1]), [2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


module.exports = without;