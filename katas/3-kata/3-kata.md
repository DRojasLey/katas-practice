# 3rd Kata -- Vowel Count





by *[jayeshcp](https://www.codewars.com/users/jayeshcp)*


## Task

### Vowel Count	

Return the number (count) of vowels in the given string.

We will consider ``` a, e, i, o, u ``` as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.




## Test Examples

```js

const {assert} = require("chai");

describe("Vowels Count Tests",function(){
  it("should return 5 for 'abracadabra'",function(){
    assert.strictEqual(getCount("abracadabra"), 5) ;
  });
});

```


## Notes

I got some heave help from Daniel Trujillo in this one being my third one I learned a lot from it 

## My solution with comments:

```js


function getCount(str) {
    let vowelCounter = 0;
    for (let numOfLetters = 0;  numOfLetters <= str.length ; numOfLetters++){
      if (str[numOfLetters] === 'a' || str[numOfLetters] === 'e' || str[numOfLetters] === 'i' || str[numOfLetters] === 'o' || str[numOfLetters] === 'u'){ //big if checks 
        vowelCounter++ // we just count the number of included vowels
      }
    }
    return vowelCounter;

  }

```
## Another valid solution with Daniel help:


Solution reached with help of Daniel, OFC also works:

```js
function getCount(str) {
  //for each character in the string 
  let vowelCounter = 0;
  const vowels = ['a','e','i','o','u']; // here we use an array instead which allows for more efficient code
  
  for (let numOfLetters = 0;  numOfLetters <= str.length ; numOfLetters++){
    if (vowels.includes(str[numOfLetters])){
      vowelCounter++;
    }
  }
  return vowelCounter;
  
}

```


## Results

```js

Time: 778ms Passed: 6Failed: 0
Test Results:
Vowels Count Tests
should return 5 for 'abracadabra'
should return 4 for 'pear tree'
should return 13 for 'o a kak ushakov lil vo kashu kakao'
should return 0 for 'my pyx'
should return 168 for a long input
should return correct results for random tests
Completed in 4ms
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[justCoder4MyLife](https://www.codewars.com/users/justCoder4MyLife)*

```js

function getCount(str) {
 return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}
```

## Notes about the interesting one:


This filter usage is a bit different, as it uses a string with includes, as if there was a pattern match but it is not using regex


---