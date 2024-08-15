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

This one seemed easy at first but put me to investigate some things I dod not have clear about English use of numerals and how centuries are actually counted
## My solution with comments:

```js


function whatCentury(year) {
    let remains = year % 100; // this will give me the number of the decade
    let baseC = Math.floor(year / 100); // this will give me the century base number

    if (remains >= 1) {
      baseC++;
    } // for any decade different to 0 we need to add 1 to the century, if it is a 00 that means the year is the last year of the century so no ++

    const getSufix = (century) => {
      const lastDigit = century % 10; // here we take the century last digit to determine the correct suffix adding exceptions to the 11, 12 and 13 which have special rules.
      if (lastDigit === 1 && century !== 11) { 
        return 'st';
      } else if (lastDigit === 2 && century !== 12) {
        return 'nd';
      } else if (lastDigit === 3 && century !== 13) {
        return 'rd';
      } else {
        return 'th';
      }
    };

    return baseC + getSufix(baseC); // we return the concatenated string
  }
```


## Results

```js

Test Results:
  Fixed tests
  basic tests
Completed in 1ms
Random tests
  100 tests
Completed in 2ms
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[Ivan Diachenko](https://www.codewars.com/users/Ivan%20Diachenko)*

```js

function whatCentury(year)
{
  var century = Math.ceil(year/100);
  return century + (century < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][century % 10] || 'th');
}
```

## Notes about the interesting one:

---
What is that thing inside the Ternary? I will investigate and update