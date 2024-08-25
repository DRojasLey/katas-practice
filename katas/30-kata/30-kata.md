# 30th Kata -- Detect Pangram






by *[anindyabd](https://www.codewars.com/users/anindyabd)*


## Task

### Detect Pangram


Explanation here

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


## Test Examples

```js

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test1", () => {
    var string = "The quick brown fox jumps over the lazy dog."
    assert.strictEqual(isPangram(string), true)
  })
  it("test2", () => {
    var string = "This is not a pangram."
    assert.strictEqual(isPangram(string), false)
  });
});


```


## Notes

I ended up using code I wrote some time ago for two different katas 9 and 18, which already did what I was looking for here, later i remembered that the interesting solution would also have worked

## My solution with comments:

```js

function isPangram(string){
    let resutl = []; // we will use this array to process the result later
    const asciiAlphabet = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]; // array to compare the ALPAHABET
    let nowArray = string.toLowerCase().split(' ').join('').split('') //convert into a lower case array with no spaces
    nowArray = nowArray.sort() //organize it
    // check if there are contiguous unique characters
    const returnUnique = nowArray.reduce((resultArr, currEle, index)=>{ // initialize the reduce
        if (index === 0){ // just want to make sure the first element is always pushed to the resulting array
            resultArr.push(currEle);
        } else if (currEle != nowArray[index - 1]) { // check if the current element is equal to the previous element
            resultArr.push(currEle);
        };
        return resultArr; // always return the reduce accumulator
    }, [/* empty array as initial value for the accumulator*/]);

    //now that we have an array with unique elements we will remove any that is not included in our asciiAlphabet
    returnUnique.forEach(element => { //iterate in each element
        if (asciiAlphabet.includes(element.charCodeAt(element))) { // check if the code of the letter we are checking is on the alphabet
            resutl.push(element) // if so we push it to the result array
        }
    });

    // we now know that all that remains is unique letters, a pangram must result in this array having 26 letters, no more no less (in eng at least )
    if (resutl.length === 26){
        return true
    }else {
        return false
    }
}

```


## Results

```js

Time: 763ms Passed: 11Failed: 0
Test Results:
Example Tests
Is 'The quick brown fox jumps over the lazy dog.' a pangram?
Completed in 1ms
Some tests in random order:
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[marutiborker](https://www.codewars.com/users/marutiborker)*

```js

function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}
```

## Notes about the interesting one:

Initially I didn't understand this solution, I tried  to understand after reading the .every() method instructions and documentation, the function(x){....} is a test
The test:
 ```string.indexOf(x)``` checks if the letter is found in the array and returns the index number, the comparator checks of the result is different to -1, as this is a comparator, and it is in the ``` return``` line, it will be a boolean return for ```.every()``` to check

 If all the letters are found in the provided string, we know it is a pangram, so every returns true



---