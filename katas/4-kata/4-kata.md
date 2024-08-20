# 4th Kata -- Are You Playing Banjo?






by *[MRodalgaard](https://www.codewars.com/users/MRodalgaard)*


## Task

### Are You Playing Banjo?


Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:
```js
name + " plays banjo" 
name + " does not play banjo"
```

Names given are always valid strings.


## Test Examples

```js

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
    assert.strictEqual(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");
    })
  })

```


## Notes

Totally inspired by Daniel assistance on the previous kata I defined an array to check for the inclusiveness and also used ASCII for extra mojo

## My solution with comments:

```js

function areYouPlayingBanjo(name) {
    //check name initial:
    const lasErres = [82,114];// we convert to ASCII to make easier the comparison
    
    if (lasErres.includes(name.charCodeAt(0))){ // check if the first letter is included in the array we created earlier, if so  that name plays banjo
      return `${name} plays banjo`;
    } else {
      return `${name} does not play banjo`
    }
  }
```


## Results

```js

Time: 901ms Passed: 101Failed: 0
Test Results:
Basic tests
Testing for fixed tests
Completed in 1ms
Random tests
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[colbydauph](https://www.codewars.com/users/colbydauph)*

```js

function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}
```

## Notes about the interesting one:

Ternary doing ternary things, saves a lot of space by breaking down the result string, very clever


---