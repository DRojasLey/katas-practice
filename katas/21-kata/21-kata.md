# 21th Kata -- Shortest Word


by *[PG1](https://www.codewars.com/users/PG1)*


## Task

### Shortest Word

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.


## Test Examples

```js

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
    assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
    assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
  })
})

```


## Notes

My dear diary I learn a bit more about sort() and that is can take comparison functions.
Actually took me a while to understand that the sorting was not done by the actual values but the ASCII values, and I got confused when for bigger phrases it was failing

## My solution with comments:

```js

function findShort(string){
    let arra = string.split(' '); //regular split to convert to array
    let res = arra.reduce((newArr, currEle)=>{ // yes that is yet another reduce :D
        newArr.push(currEle.length);
        return newArr;
    },[])
    res = res.sort((a,b)=>a-b) // to avoid sorting for each element we sort outside
    return res[0] // return the lowest number which should be the first one
}

```


## Results

```js


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
> by *[10XL](https://www.codewars.com/users/10XL)*

```js

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}
```

## Notes about the interesting one:

This is one of those one liners, normally I do not like them as they are not that clear, but this one introduced me to Math.min() which I'll be learning a bit more.

---