# 19th Kata -- What century is it?





by *[user1511460](https://www.codewars.com/users/user1511460)*


## Task

### What century is it?


Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

Examples

```
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"
```


## Test Examples

```js

const chai = require("chai");
const assert = chai.assert;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(whatCentury("1999"), "20th", "With input '1999' solution produced wrong output");
    assert.strictEqual(whatCentury("2011"), "21st", "With input '2011' solution produced wrong output");
    assert.strictEqual(whatCentury("2154"), "22nd", "With input '2154' solution produced wrong output");
    assert.strictEqual(whatCentury("2259"), "23rd", "With input '2259' solution produced wrong output");
    assert.strictEqual(whatCentury("1234"), "13th", "With input '1234' solution produced wrong output");
    assert.strictEqual(whatCentury("1023"), "11th", "With input '1023' solution produced wrong output");
    assert.strictEqual(whatCentury("2000"), "20th", "With input '2000' solution produced wrong output");
  });
});


```


## Notes

Notes here

## My solution with comments:

```js

//My code here

```


## Results

```js

//hpefully good results here

```

## Interesting Kata solution:
> by *[somebody](https://example.com)*

```js

//interesting solution here

```

## Notes about the interesting one:

Interesting kata notes here

---