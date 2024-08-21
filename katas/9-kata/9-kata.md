# 9th Kata -- Disemvowel Trolls





by *[osuushi](https://www.codewars.com/users/osuushi)*


## Task

### Disemvowel Trolls

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.




## Test Examples

```js

const chai = require('chai'), { assert } = chai;
chai.config.truncateThreshold;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
    assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
    assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
    })
  })

```


## Notes

This was a very interesting exercise that allowed me to use what I've learned on previous kata

## My solution with comments:

```js

function disemvowel(str) {
    let strResponse = ""; // initialize the variable we will use to concatenate the letters
    const vowels = ['a', 'e', 'i', 'o', 'u','A','E','I','O','U']; // array to compare the vowels
    for (let i = 0; i < str.length; i++) { // we use a for loop to compare each letter
      if (!vowels.includes(str[i])) { // if the letter at the current index is not contained on the vowels array
        strResponse += str[i]; // we concatenate the letter to the variable
      }
    }
    return strResponse; //return the new string without vowels
  }
```


## Results

```js

Time: 817ms Passed: 101Failed: 0
Test Results:
Basic tests
Testing for fixed tests
Completed in 1ms
Random tests
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[falloonalan](https://www.codewars.com/users/falloonalan)*

```js

const vowels = 'aeiou'; // create the equivalent of my array

function disemvowel(str) {
  return str // return the string after:
    .split('') // we convert it into an array
    .filter(letter => !vowels.includes(letter.toLowerCase())) // we filter using the previously created string, but this time we use toLowerCase to complete the comparison
    .join(''); // the modified array is joined back into a string
}
```

## Notes about the interesting one:

The author used a similar confirmation as mine but instead of using Upper case and Lower Case letters whe just converted each letter to lowercase for the comparison

---