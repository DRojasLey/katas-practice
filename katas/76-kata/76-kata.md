# 76th Kata -- Convert a Number to a String!


by *[AKJ.IO](https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript)*


## Task

### Convert a Number to a String!

We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

**Examples (input --> output):**

```js
123  --> "123"
999  --> "999"
-100 --> "-100"
```


## Test Examples

```js

const assert = require('chai').assert;
describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(numberToString(67), '67');
  });
});

```


## Notes

I remembered a method after months of not touching Js, so I'm happy :'v
## My solution with comments:

```js

function numberToString(num) {
  return num.toString()
}
```


## Results

```js

Test Results:
Tests
fixed tests
random tests
Completed in 4ms
You have passed all of the tests! :)
```

## Solution:
> by NeetCode at *[YouTube](LINKHERE)*

```js

const numberToString = num => `${num}`;

```

## Notes about the Solution:

this guy uses an arrow function ther eis not much to see in this kata

---