# 14th Kata -- Create Phone Number

by *[xDranik](https://www.codewars.com/users/xDranik)*


## Task

### Create Phone Number

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example

```js
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
```

The returned format must be correct in order to complete this challenge.


Don't forget the space after the closing parentheses!

## Test Examples

```js
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Create Phone Number", () => {
  it("Fixed tests", () => {
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
  });
});
```

## Interesting voted solution

#### By *[Madstorm](https://www.codewars.com/users/madstorm)*

```js
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx"; // this is the data we will return so it is defined as a string
  
  for(var i = 0; i < numbers.length; i++) // standard loop
  {
    format = format.replace('x', numbers[i]); // with this piece of code I learnt this new string method, very useful
  }
  
  return format;
}

```

## Notes


My solution is the worst, overengineered piece of code, just because I wanted to practice more with reduce, scopes and for loops.

At the end I'm pretty sure it was unnecessary, but  I learned a lot by making this abomination and it was fun playing with the methods used, so enjoy.




---