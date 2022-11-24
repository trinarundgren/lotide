// TAIL...
const tail = require("../tail");

const assert = require("chai").assert;

describe("tail()", () => {
  it('should return ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const words1 = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words1), ["Lighthouse", "Labs"]);
  });


});