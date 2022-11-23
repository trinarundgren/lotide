// ARRAYS ARE EQUAL FUNCTION...

const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`🌻🌻🌻 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☔☔☔ Assertion Failed: ${actual} !== ${expected}`);
  }
};



// TEST ARRAYS FOR INPUT...
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];


// TAKE UNTIL FUNCTION...
const takeUntil = function(array, callback) {
  let result = [];
  for (const item of array) {
    if (callback(item) !== true) {
      result.push(item);
    } else {
      return result;
    }
  }
};


// // TEST CODE
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood' ]);

// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual(results1, [1, 2, 5, 7, 2]);