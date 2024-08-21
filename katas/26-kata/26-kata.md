# 26th Kata -- Reverse words






by *[jnicol](https://www.codewars.com/users/jnicol)*


## Task

### Reverse words


Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
```
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
```


## Test Examples

```js

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
    assert.strictEqual(reverseWords('apple'), 'elppa');
    assert.strictEqual(reverseWords('a b c d'), 'a b c d');
    assert.strictEqual(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
  });
});

```


## Notes

For some reason it took me a while to notice that I was not using a parameter for join so it was making me crazy, and then I noticed something odd, once the code started to work

``` js
if (currWord.length === '')
```
If that conditional checks directly for the current word as an empty string, it errors out

## My solution with comments:

```js

function reverseWords(str) {
    return  str.split(' ').reduce((newStr, currWord)=>{ // convert into array to iterate over it
        if (currWord.length === ''){// if split is applied to two spaces it returns '' empty string it is not clear
            newStr += ' ' // we just need to add an space for double as we will add it later
        }  else {
      let reversedWord = currWord.split('').reverse().join('');
      return newStr + (newStr ? ' ' : '') + reversedWord;
    }
  }, '');
}


Revisited:
function reverseWords(str) {
    let res =  str.split(' ').reduce((newStr, currWord)=>{
            let reversedWord = currWord.split('').reverse().join('');
            return newStr + (newStr ? ' ' : '') + reversedWord;
    }, '');
    return res
}
```


## Results

```js

Time: 798ms Passed: 2Failed: 0
Test Results:
Basic tests
Random Tests
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[jnicol](https://www.codewars.com/users/jnicol)*

```js

function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}

```

## Notes about the interesting one:

this is what I wanted to do but using reduce instead of map :sad:


---