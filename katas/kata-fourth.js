/* The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.

*/

function areYouPlayingBanjo(name) {
  //check name initial:
  const lasErres = [82,114];
  
  if (lasErres.includes(name.charCodeAt(0))){
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`
  }
}
/*
test examples:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
    assert.strictEqual(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");
  })
})
*/
