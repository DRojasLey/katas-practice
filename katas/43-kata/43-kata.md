# 43th Kata -- Isograms

by *[chunjef](https://www.codewars.com/users/chunjef)*


## Task

### Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)
```
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
```

## Test Examples

```js
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual( isIsogram("Dermatoglyphics"), true );
    assert.strictEqual( isIsogram("isogram"), true );
    assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
    assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
    assert.strictEqual( isIsogram("isIsogram"), false );
    assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
  });
});
```


## Notes

Took me a while to figure out that the every method was the most suitable for this

## My solution with comments:

```js

function isIsogram(str) {
    return str.toLowerCase()
    .split('')
    .every((char, i, arr) => arr.indexOf(char) === i); // I've used this twice now, maybe we found a new reduce?
}
```


## Results

```js

Time: 794ms Passed: 4Failed: 0
Test Results:
Basic tests
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[Xuke](://www.codewars.com/users/Xuke)*

```js

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

```

## Notes about the interesting one:

Looks like using new Set is the best option

---