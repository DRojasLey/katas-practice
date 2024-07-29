/* Vowel Count
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */


function getCount(str) {
    //for each character in the string 
    let vowelCounter = 0;
    for (let numOfLetters = 0;  numOfLetters <= str.length ; numOfLetters++){
     if (str[numOfLetters] === 'a' || str[numOfLetters] === 'e' || str[numOfLetters] === 'i' || str[numOfLetters] === 'o' || str[numOfLetters] === 'u'){
        vowelCounter++
     }
    }
    return vowelCounter;

  }



  /* Test:

  const {assert} = require("chai");

describe("Vowels Count Tests",function(){
  it("should return 5 for 'abracadabra'",function(){
    assert.strictEqual(getCount("abracadabra"), 5) ;
  });
});

*/
