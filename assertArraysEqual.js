// EQUAL ARRAYS...
const eqArrays = require('./eqArrays');


// ASSERT ARRAYS EQUAL FUNCTION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`🌻🌻🌻 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☔☔☔ Assertion Failed: ${actual} !== ${expected}`);
  }
};


module.exports = assertArraysEqual;