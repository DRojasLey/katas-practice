# 10th Kata -- Sum of two lowest positive integers






by *[emporio](https://www.codewars.com/users/emporio)*


## Task

### Sum of two lowest positive integers


Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like ```[19, 5, 42, 2, 77]```, the output should be```7```.

```[10, 343445353, 3453445, 3453545353453]``` should return ```3453455```.




## Test Examples

```js

const chai = require("chai");
const assert = chai.assert;

describe("Your function", function() {
  it("should work for basic tests", function() {
    assert.strictEqual(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
    assert.strictEqual(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
    assert.strictEqual(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
    assert.strictEqual(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
    assert.strictEqual(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");
  });
}); 

```


## Notes

Quite simple solution using sort principles

## My solution with comments:

```js

function sumTwoSmallestNumbers(numbers) {
    let organizedArray =   numbers.sort((a, b) => a - b);
    return organizedArray[0] + organizedArray[1];
  }

```


## Results

```js

Time: 800ms Passed: 3Failed: 0
Test Results:
Your function
should work for basic tests
should work for more fixed tests as well
should finally work for random tests
Completed in 3ms
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[run9e](https://www.codewars.com/users/run9e)*

```js

function sumTwoSmallestNumbers(numbers) {

  const [a, b] = [...numbers].filter(e => e>= 0).sort((a,b) => a - b);

  return a + b;

};
```

## Notes about the interesting one:

The spread operator (...) is very interesting, allows to pass just the elements of an array not the array itself, the spread will pass something like:
[1,2,3,4] will be passed as 1,2,3,4 so the code does:
creates a new array [...theothearrayelement] that can be modified without manipulating the original array

```filter(e => e>= 0)``` only non negative numbers are added to the new array [a,b]

 ```const [a, b] =``` is a destructuring assignement

 Overall very interesting

---