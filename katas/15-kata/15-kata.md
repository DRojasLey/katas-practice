# 15th Kata -- Build Tower



by *[8fdafs2](https://www.codewars.com/users/8fdafs2)*


## Task 

### Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

```js
[
  "  *  ",
  " *** ", 
  "*****"
]
```

And a tower with 6 floors looks like this:
```js
[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
```




## Test Examples

```js
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertDeepEquals(towerBuilder(1), ["*"]);
Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);
  });
});
```

## Interesting voted solution

#### By *[DAslanT](https://www.codewars.com/users/DAslanT)*

```js
function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2)+ 1)
             + " ".repeat(nFloors - i - 1));
  }
  return tower;
}

```

## Notes


My solution uses the same principle of the repeat method to create the array, but I use more variables instead of doing one liners, I think using way too much variables in my code is becoming a theme




---