# 5th Kata -- Counting sheep...






by *[tfKamran](https://www.codewars.com/users/tfKamran)*


## Task

### Counting sheep...


Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,
```js
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
  ```

The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined


## Test Examples

```js

const {assert} = require('chai');

describe('Sample Tests', function() {
  const tests = [
    [[], 0],
    [[undefined], 0],
    [[null], 0],
    [[false], 0],
    [[true], 1],
    [[undefined,null,false,true], 1],
    [[undefined,null,false,true,true,false,null,undefined], 2],
    [[true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true], 17],
  ];

  for (let [sheep, expected] of tests) {
    it(`${stringify(sheep)}`, function() {
      assert.strictEqual(countSheeps(sheep), expected);
    });
  }

  function stringify(sheep) {
    return `[${sheep.map(String).join(',')}]`;
  }
});

```


## Notes

simple for loop not much to see or learn, just rehearsing previous day kata

## My solution with comments:

```js
// simple for loop not much to see or learn, just rehearsing previous day kata
function countSheeps(sheep) {
  let counter = 0;
  sheep.forEach(element => {
    if (element == true){
      counter++;
    } 
  });
  return counter;
}
```



## Interesting Kata solution:
> by *[colbydauph](https://www.codewars.com/users/colbydauph)*

```js

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
```

## Notes about the interesting one:

This is beautiful, using the Boolean object and filter, if the Boolean is true it returns the lenght of the resulting string, as filter will concatenate 1  for each true value, nice


---