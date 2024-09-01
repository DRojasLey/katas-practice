# 36th Kata -- Sum of the first nth term of Series


by *[DivyanshBatham](https://www.codewars.com/users/DivyanshBatham)*


## Task

### Sum of the first nth term of Series


Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

![series](image.png)

You will need to figure out the rule of the series to complete this.

Rules

You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return "0.00".

You will only be given Natural Numbers as arguments.

Examples (Input --> Output)
```
n
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
```

## Test Examples

```js

const { assert } = require('chai');

describe("Sample tests", () => {
  it("n = 1", () => {
    let actual = SeriesSum(1);
    checkReturnValue(actual);
    assert.strictEqual(actual,  "1.00", "n = 1")
  });
  it("n = 2", () => assert.strictEqual(SeriesSum(2),  "1.25", "n = 2"));
  it("n = 3", () => assert.strictEqual(SeriesSum(3),  "1.39", "n = 3"));
  it("n = 4", () => assert.strictEqual(SeriesSum(4),  "1.49", "n = 4"));
});

function checkReturnValue(actual) {
  assert.isDefined(actual, "Your function did not return a value. Did you log it to console instead?");
}
```


## Notes

Lerned a new numeric method, toFixed, which is interesting, as it converts a float into a string with the decimal places we provide

## My solution with comments:

```js

function SeriesSum(n) {
    if (n === 0) { // 0 case handled
      return "0.00";
    }
    let sum = 1; // to store the sum
    let denominator = 1; //so we can iterate nth times using the 'rule'
    for (let i = 1; i < n; i++) {
      denominator += 3; // add three
      sum += 1/denominator; //add everyting
    }
    return sum.toFixed(2); //return the string with only 2 decimal places
  }
```


## Results

```js

Time: 774ms Passed: 2Failed: 0
Test Results:
Solution tests
Fixed tests
Random tests
Completed in 4ms
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[flynntsc](https://www.codewars.com/users/flynntsc)*

```js

function SeriesSum(n, s = 0) {
    return n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2)
}
```

## Notes about the interesting one:

This seems to be a recursive function taking from the recently seen recursive function, but I could not understand everything here.


---