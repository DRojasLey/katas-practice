

// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"


function spinWords(string){
    //TODO)
    

    //We must take the string and check for spaces that would give us the separation of words and then put them in an array
    let myString = string ;
    let onlyWords = myString.split(' ');
    //we need to count the amount of elements on the array 
    let howBigArray = onlyWords.length 
    //if we get a single element in the array we apply a simplified lenght check
        if (howBigArray === 1){
        //if the string.length > 5 then we reverse the string and return the string
            //reverse the string
            const reverseString = (str) => {
                return str.split("").reverse().join("");
            }
            onlyWords = reverseString(onlyWords[0]);
            //return the string
            return onlyWords;
        //if the string.length < 5 then we just return the string
        }
        

    //if we get more than 1 letter we proceed with further checks
        // count the number of letters for each element in the array, from documentation we should be using a for loop.
            //everytime the number of letter is below 5 we would do nothing to that element
            //everytime the number of letters is above or equal to 5 we would reverse the string and overwrite it on the array

    // Once the reverse operation is completed we should then convert the array back to a string, adding the spaces 

    // finally we return the string
   
  }

spinWords('ThisIsLong');

/* Sample tests:
const chai = require("chai");
const assert = chai.assert;

describe("Spinning words",()=>{
  it("Sample tests",()=>{
    assert.strictEqual(spinWords("Welcome"), "emocleW");
    assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
    assert.strictEqual(spinWords("This is a test"), "This is a test");
    assert.strictEqual(spinWords("This is another test"), "This is rehtona test");
    assert.strictEqual(spinWords("You are almost to the last test"), "You are tsomla to the last test");
    assert.strictEqual(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
    assert.strictEqual(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");
  });
}); 
*/


