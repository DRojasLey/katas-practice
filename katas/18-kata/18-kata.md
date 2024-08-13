# 18th Kata -- Unique In Order




by *[pinelopi](https://www.codewars.com/users/pinelopi)*


## Task

### Unique In Order



Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:
```js
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

```

## Test Examples

```js

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
  });
});
```


## Notes

I found the solution unexpectedly quickly using .reduce()
Katas on free days will not use the reduce method again, so I can push myself to learn other iterators

## My solution with comments:

```js

var uniqueInOrder=function(iterable){
    let inputProce = iterable // for my own/clarity sanity I like to see the input as a declared variable
    if (typeof iterable === 'string'){
        inputProce = inputProce.split('');
    }; // This ensures we always work on arrays
    const main = inputProce.reduce((resultArr, currEle, index)=>{ // initialize the reduce
        if (index === 0){ // just want to make sure the first element is always pushed to the resulting array
            resultArr.push(currEle);
        } else if (currEle != inputProce[index - 1]) { // check if the current element is equal to the previous element
            resultArr.push(currEle);
        };
        return resultArr; // always return the reduce accumulator
    }, [/* empty array as initial value for the accumulator*/]);

    return main//main function return here, returning the main variable

};

```


## Results

```js

Test Results:
  lets test it
  should work with empty array
  should work with one element
  should reduce duplicates
  and treat lowercase as different from uppercase
  and work with int arrays
  and work with char arrays
Completed in 3ms
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[halcarleton](https://www.codewars.com/users/halcarleton)*

```js

var uniqueInOrder=function(iterable){
  iterable = typeof iterable === 'string' ? iterable.split('') : iterable;
  return iterable.filter(function(e, i, arr) {
    return e !== arr[i-1];
  });
}

```

## Notes about the interesting one:

This one does the same check of the iterable type, just changes the if for a ternay operator to reassign the iterable as an array in case it is a string
it directly returns the result of filter, I suspected filter would be the ideal method here, but the use he gives it with the  ```     return e !== arr[i-1]; ``` is very nice
return element that are different to the previous one, that all is assigned to the iterable by the filter method, and then the iterable is returned as a solution, very clever.

I will try learning from filter.

---