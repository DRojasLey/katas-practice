

# 16th Kata -- Write Number in Expanded Form


by *[Belax8](https://www.codewars.com/users/Belax8)*


## Task

### Write Number in Expanded Form


You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!

## Test Examples

```js
const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(expandedForm(12), '10 + 2');
    assert.strictEqual(expandedForm(42), '40 + 2');
    assert.strictEqual(expandedForm(70304), '70000 + 300 + 4');
  });
});

```


## Notes


I have failed to do this on my own, this should have been something I could do, for some reason, I brain't  it enough


## Results

```js
Test Results:
  Full tests
    Basic tests
    Zeros
  Test Passed
    Big Numbers
      Incorrect answer for num=92093403034573: expected '90000000000000 + 20000000000009000000…' to equal '90000000000000 + 2000000000000 + 9000…'

    Completed in 1ms
    Random Tests
      Incorrect answer for num=70010537: expected '70000000 + 10000 + 500 + 307' to equal '70000000 + 10000 + 500 + 30 + 7'
      
    Completed in 1ms
    Completed in 3ms
```

---