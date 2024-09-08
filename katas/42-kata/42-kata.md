# 42th Kata -- Sum of odd numbers


by *[hhelwich](https://www.codewars.com/users/hhelwich)*


## Task

### Sum of odd numbers


Given the triangle of consecutive odd numbers:

```
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
```
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
```
1 -->  1
2 --> 3 + 5 = 8
```



## Test Examples

```js
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(rowSumOddNumbers(1), 1);
    assert.strictEqual(rowSumOddNumbers(42), 74088);
  });
});
```


## Notes

I learned from a search the the pyramid corresponds to the cube of the given row number
so I tested the Math.pow and worked, I didn't really got it immediatelly, but later understood the relationship.

## My solution with comments:

```js
function rowSumOddNumbers(n) {
  return Math.pow(n, 3); //use the method to return the cube
};
```


## Results

```js
Time: 774ms Passed: 2Failed: 0
Test Results:
Basic tests
Tests
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[callejon](https://www.codewars.com/users/callejon)*

```js
function rowSumOddNumbers(n) {
	return n*n*n;
}
```

## Notes about the interesting one:

Nothing much to say, it is the same but now using the method.


---