// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcissistic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = c
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

// This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.






function narcissistic(value) {
    let numberAsArray = value.toString().split(''); // we convert it into a string to then separate each element to an element on an array
    let elevatedArray = numberAsArray.map((x) => (+x)** numberAsArray.length); // we elevate each number in each element to the length of the array
    let sumOfNumber = 0; // initialize the sum variable
    elevatedArray.forEach( num =>{ sumOfNumber += num}) // we sum the elements to get the final comparation
    if (sumOfNumber === value){ return true} else { return false}; //we check if the result is equal to the given number, if so the number is narcissistic
}










// const { assert } = require("chai")

// describe( "Example tests", function() {

//   function dotest(input, expected) {
//     const actual = narcissistic(input);
//     assert.strictEqual(actual, expected, `Incorrect answer for value=${input}`)
//   }

//   it("Narcissistic numbers", function() {
//     dotest(  7, true);
//     dotest(153, true);
//   });

//   it("Not narcissistic numbers", function() {
//     dotest(122, false);
//     dotest(487, false);
//   });
// });