# XXth Kata -- Friend or Foe?


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

Notes here

## My solution with comments:

```js

//My code here

```


## Results

```js

//hpefully good results here

```

## Interesting Kata solution:
> by *[somebody](LINKHERE)*

```js

//interesting solution here

```

## Notes about the interesting one:

Interesting kata notes here

---