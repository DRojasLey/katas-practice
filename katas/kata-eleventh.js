// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!


// INITIALLY SUBMITTED CODE
function oddOrEven(array) {
    const even = 'even';
    const odd = 'odd';
    if (array.length === 0){
        return even;
    } else {
        const accm = 0;
        const sumTheArray = array.reduce((accm, currVal) => accm + currVal)
        return sumTheArray%2 === 0 ? even : odd;
    }

}


/*Notes:

Within the kata solutions the first one is:
*/
function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
  }

/*
This made me notice that my code has an unnecesary if for the event of empty arrays so it can be rewritten;
 like this, by adding an initial value for the reduce method:
*/


function oddOrEven(array) {
    const initialZero = 0; // the previou version of this was completely and utterly unnecessary not even used correctly so updated to be the initial value
    const sumTheArray = array.reduce((accm, currVal) => accm + currVal, initialZero); // by adding this 0 at the end as initial value we make sure the empty arrays always get 0 and then the modulo will do the rest
    return sumTheArray%2 === 0 ? 'even' : 'odd'; // even here the modulo check agaisnt === 0 is unnecessary as 0 (no residue therefore even) would evaluate to false whilst any other number would evaluate to true meaning it is odd
}







// Tests:

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe('Fixed tests', () => {
//   it('Edge tests', () => {
//     assert.strictEqual(oddOrEven([0]), 'even')
//     assert.strictEqual(oddOrEven([1]), 'odd')
//     assert.strictEqual(oddOrEven([]), 'even')
//   });

//   it('Even tests', () => {
//     assert.strictEqual(oddOrEven([0, 1, 5]), 'even')
//     assert.strictEqual(oddOrEven([0, 1, 3]), 'even')
//     assert.strictEqual(oddOrEven([1023, 1, 2]), 'even')
//   });

//   it('Negative Even tests', () => {
//     assert.strictEqual(oddOrEven([0, -1, -5]), 'even')
//     assert.strictEqual(oddOrEven([0, -1, -3]), 'even')
//     assert.strictEqual(oddOrEven([-1023, 1, -2]), 'even')
//   });

//   it('Odd tests', () => {
//     assert.strictEqual(oddOrEven([0, 1, 2]), 'odd')
//     assert.strictEqual(oddOrEven([0, 1, 4]), 'odd')
//     assert.strictEqual(oddOrEven([1023, 1, 3]), 'odd')
//   });

//   it('Negative Odd tests', () => {
//     assert.strictEqual(oddOrEven([0, -1, 2]), 'odd')
//     assert.strictEqual(oddOrEven([0, 1, -4]), 'odd')
//     assert.strictEqual(oddOrEven([-1023, -1, 3]), 'odd')
//   });
// });