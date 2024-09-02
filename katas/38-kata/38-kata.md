# 38th Kata -- Sort the odd


by *[fyvfyv](https://www.codewars.com/users/fyvfyv)*


## Task

### Sort the odd


Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
```
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
```


## Test Examples

```js

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", () => {
  it("should pass some sample tests", () => {
    assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
    assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
    assert.deepEqual(sortArray([]),[]);
  });
});
```


## Notes

I had to read a bit to get this one going, not that easy honestly


## My solution with comments:

```js
function sortArray(arr) {
  let index = 0; //set an index for later use
  const odds = arr.filter(num => num % 2 !== 0); // filter the odd numbers into a new array
  odds.sort((a, b) => a - b); // sort the new array
  for (let i = 0; i < arr.length; i++) { // iterate through the original array
    if (arr[i] % 2 !== 0) { // if the element of the array is odd
      arr[i] = odds[index++]; // replace it with the current element of the sorted array
    }
  }
  return arr;
}
```


## Results

```js

Time: 983ms Passed: 2Failed: 0
Test Results:
Fixed Tests
should pass some fixed tests
Completed in 2ms
Random Tests
should pass some random tests
Completed in 4ms
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[fyvfyv](https://www.codewars.com/users/fyvfyv)*

```js

function sortArray(array) {
  var odd = array.filter(elem => elem % 2 !== 0).sort((a, b) => a - b);
  return array.map(elem => elem % 2 === 0 ? elem : odd.shift());
}
```

## Notes about the interesting one:

The original kata creator made this one :
filters and sorts the same
Then uses .map and a ternary to construct the resulting array on  the go


---