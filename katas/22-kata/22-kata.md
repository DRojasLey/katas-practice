# 22th Kata -- Get the Middle Character

by *[Shivo](https://www.codewars.com/users/Shivo)*


## Task

### Get the Middle Character

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:
```
Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
```
#Input

A word (string) of length ``` 0 < str < 1000 ```(In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.


## Test Examples

```js

const Test = require('@codewars/test-compat');

describe("GetMiddle", function() {
  it("Tests", function() {
    Test.assertEquals(getMiddle("test"),"es");
    Test.assertEquals(getMiddle("testing"),"t");
    Test.assertEquals(getMiddle("middle"),"dd");
    Test.assertEquals(getMiddle("A"),"A");
  });
});

```


## Notes

Quite simple but facilitated clarity for me on the slice method
## My solution with comments:

```js

function getMiddle(string){
        //calculate the middle and store it in a variable so it is more clear when manipulating
        let middle = Math.floor(string.length/2) ;
        //check with modulo for oddness
        if (string.length%2){
            return string.slice(middle , middle + 1 ); // return the slice using middle
        } else {
            return string.slice(middle-1, middle + 1);// also for even return the slice using middle
        }
}
```


## Results

```js

Time: 761ms Passed: 51Failed: 0
Test Results:
GetMiddle
Tests
Completed in 1ms
50 Random tests
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[jason.whitted](https://www.codewars.com/users/jason.whitted)*

```js

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
```

## Notes about the interesting one:

A one liner again but I learned the ``` string.substr()``` method in the process of reading it, worth it


---