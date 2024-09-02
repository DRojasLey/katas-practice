# 37th Kata -- Who likes it?


by *[BattleRattle](https://www.codewars.com/users/BattleRattle)*


## Task

### Who likes it?


You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
```
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
```
Note: For 4 or more names, the number in "and 2 others" simply increases.



## Test Examples

```js

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('example tests', function() {
  it('should return correct text', function() {
    assert.strictEqual(likes([]), 'no one likes this');
    assert.strictEqual(likes(['Peter']), 'Peter likes this');
    assert.strictEqual(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
    assert.strictEqual(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
    assert.strictEqual(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
  });
});
```


## Notes

Maybe using a switch the code would look cleaner

## My solution with comments:

```js

function likes(names) {
  if (names[0] === undefined){
    return 'no one likes this';
  } else if (names.length === 1){
    return `${names[0]} likes this`;
  } else if (names.length === 2){
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length > 3){
    return `${names[0]}, ${names[1]} and ${name.length - 2} like this`;
  }
}

```


## Results

```js

Time: 1006ms Passed: 5Failed: 0
Test Results:
static tests
random tests
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[zadoev](https://www.codewars.com/users/zadoev)*

```js
function likes(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`, 
    2: `${names[0]} and ${names[1]} like this`, 
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
  }[Math.min(4, names.length)]
}
```

## Notes about the interesting one:

Took me a while to understand what was happening here, but un short this uses a clever object literal, with  the object position notation to return the correct value each time, no need for flow control, it just will return the cases from 1 to 4.
incredible 

---