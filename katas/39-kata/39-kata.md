# 39th Kata -- Descending Order


by *[TastyOs](https://www.codewars.com/users/TastyOs)*


## Task

### Descending Order


Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: ```42145``` Output: ```54421```

Input: ```145263``` Output: ```654321```

Input: ```123456789``` Output: ```987654321```




## Test Examples

```js

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(descendingOrder(0), 0)
    assert.strictEqual(descendingOrder(1), 1)
    assert.strictEqual(descendingOrder(111), 111)
    assert.strictEqual(descendingOrder(15), 51)
    assert.strictEqual(descendingOrder(1021), 2110)
    assert.strictEqual(descendingOrder(123456789), 987654321)
    })
  })
```


## Notes

This is by far my most hideous one liner, but I love it.

We will return the ternary result, if it is a single digit, just the digit
if not, we will convert the number to string, then we will split the number into an array, then we sort the array, in descending order, after that we join the array into a string, and finally we use the unary operator to convert it into a number, horrible, but I like how it looks.


## My solution with comments:

```js

function descendingOrder(n){
    return n.length === 1 ? n : +(n.toString().split('').sort((a,b) => b - a).join(''));
  }
```


## Results

```js

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(descendingOrder(0), 0)
    assert.strictEqual(descendingOrder(1), 1)
    assert.strictEqual(descendingOrder(111), 111)
    assert.strictEqual(descendingOrder(15), 51)
    assert.strictEqual(descendingOrder(1021), 2110)
    assert.strictEqual(descendingOrder(123456789), 987654321)
    })
  })
```

## Interesting Kata solution:
> by *[afer31](https://www.codewars.com/users/afer31)*

```js

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}
```

## Notes about the interesting one:

Not that interesting honestly, everybody did the same one line thing with slight variations on how to convert the data type and not much other changes.


---