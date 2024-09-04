# 40th Kata -- Friend or Foe?


by *[Aweson1](https://www.codewars.com/users/Aweson1)*


## Task

### Friend or Foe?


Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
```
Input = {"Ryan", "Kieran", "Jason", "Yous"}
Output = {"Ryan", "Yous"}

Input = {"Peter", "Stephen", "Joe"}
Output = {}
```
Input strings will only contain letters. Note: keep the original order of the names in the output.


## Test Examples

```js

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
    assert.deepEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
    assert.deepEqual(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
    assert.deepEqual(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])
  })
})

```


## Notes

Implementing .filter(), I feel like I'm learning to remember to not use reduce for everything

## My solution with comments:

```js

function friend(friends){
        return friends.filter(element => element.length === 4) // hey look I did not use reduce
  }
```


## Results

```js

Time: 837ms Passed: 2Failed: 0
Test Results:
Basic tests
Testing for fixed tests
Completed in 1ms
Random tests
Testing for 40 random tests
Completed in 1ms
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[FepAguilar](https://www.codewars.com/users/FepAguilar)*

```js

function friend(friends){
 //Create new array called "myFriends" for add your friends
  var i,
      len = friends.length,
      myFriends = [];
  for (i = 0; i < len; i++) {
       //Check for names with length equal to four and it is not a number
       if(friends[i].length == 4 && isNaN(friends[i])) {
          myFriends.push(friends[i]);
       }
  }
  return myFriends;
}
```

## Notes about the interesting one:

A manual iteration so he could implement the isNaN function, initially I also thought of using NaN to check for numbers, but after testing I found  it to be not necessary.

---