# 24th Kata -- Find the unique number




by *[isqua](https://www.codewars.com/users/isqua)*


## Task

### Find the unique number


There is an array with some numbers. All numbers are equal except for one. Try to find it!
```
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
```
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique



## Test Examples

```js

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Example Tests", () => {
  it("Tests", () => {
    assert.strictEqual(findUniq([ 1, 0, 0 ]), 1);
    assert.strictEqual(findUniq([ 0, 1, 0 ]), 1);
    assert.strictEqual(findUniq([ 0, 0, 1 ]), 1);
    assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
    assert.strictEqual(findUniq([ 1, 1, 2, 1, 1 ]), 2);
    assert.strictEqual(findUniq([ 3, 10, 3, 3, 3 ]), 10);
  });
});

```


## Notes

I started working in an algorithm so complex it would make my last relationship complexity blush, and then I remembered tha sort exist and left all behind

## My solution with comments:

```js

function findUniq(arr) {
    let array1 = arr.sort((a,b)=> a-b) // sort the array so the unique ends up at the end or beginning of the array
    if (array1[0] != array1[1]){ // check if it is the firs
      return +array1[0]
    } else {
      return +array1[array1.length - 1] // if not the first just return the last element
    }
  }
```


## Results

```js

Time: 2552ms Passed: 9Failed: 0
Test Results:
Fixed Tests
Basic tests 
The last item
The first item
Very big number
Negative number
Float number
Very long array
Infinity and -Infinity
Completed in 1681ms
Random Tests
Tests
Completed in 4ms
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[njohnson7](https://www.codewars.com/users/njohnson7)*

```js

function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}
```

## Notes about the interesting one:

Not really familiar with indexOf utilization I will dig deeper on this one 


---