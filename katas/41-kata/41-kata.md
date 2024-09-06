# 41th Kata -- The highest profit wins!


by *[bkaes](https://www.codewars.com/users/bkaes)*


## Task

### The highest profit wins!


#### Story

Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

#### Task
Write a function that returns both the minimum and maximum number of the given list/array.

#### Examples (Input --> Output)
```
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
```

#### Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.


## Test Examples

```js
const assert = require('chai').assert;

describe("minMax", () => {
  const testCases = [
    [[1, 2, 3, 4, 5], [1, 5]],
    [[2334454, 5], [5, 2334454]],
    [[5], [5, 5]]
  ];
  for(const [input, expected] of testCases) {
    it(`should work for ${JSON.stringify(input)}`, () => {
      assert.deepEqual(minMax(input), expected);
    });
  }
});
```


## Notes

I've seen this before... but I see it clearly now.

## My solution with comments:

```js
function minMax(arr){
    let result = arr.sort((a,b)=>a-b); // sort min to max
    return [result[0], result[result.length - 1]]; // return the first and last element
  }
```


## Results

```js
Time: 754ms Passed: 4Failed: 0
Test Results:
minMax
should work for [1,2,3,4,5]
should work for [2334454,5]
should work for [5]
should work for random lists
Completed in 17ms
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[myTerminal](https://www.codewars.com/users/myTerminal)*

```js
function minMax(arr){
  return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];
}
```

## Notes about the interesting one:

This one uses some methods I haven't seen before, I will look into them

---













