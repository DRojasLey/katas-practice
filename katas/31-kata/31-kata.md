# 31th Kata -- Square Every Digit






by *[MysteriousMagenta](https://www.codewars.com/users/MysteriousMagenta)*


## Task

### Square Every Digit


Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!



## Test Examples

```js

const { assert } = require("chai")

describe("Basic tests", () => {

  it("squareDigits(3212) should equal 9414", () => {
    assert.strictEqual(squareDigits(3212), 9414);
  });

  it("squareDigits(2112) should equal 4114", () => {
    assert.strictEqual(squareDigits(2112), 4114);
  });

  it("squareDigits(0) should equal 0", () => {
    assert.strictEqual(squareDigits(0), 0);
  });
})

```


## Notes

Quick kata that would cost me a lot some weeks ago


## My solution with comments:

```js

function squareDigits(num){
    let result = ''; // initialize the result variable
    num = num.toString().split(''); // get an array from the number so we can iterate on each digit
    num.forEach(number => {
        result += +number * +number ; // square the number
    });
    return  +result // return a number
  }
```


## Results

```js

Time: 774ms Passed: 103Failed: 0
Test Results:
Basic tests
Random tests
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[gitauharrison](https://www.codewars.com/users/gitauharrison)*

```js

  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));

```

## Notes about the interesting one:

not really interesting, almost everyone does something similar just changing the array iterator method and the way top convert the result into a number
---