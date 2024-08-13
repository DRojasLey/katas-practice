# 17th Kata -- Break camelCase



by *[hakt](https://www.codewars.com/users/hakt)*


## Task

### Break camelCase


Complete the solution so that the function will break up camel casing, using a space between words.

Example
```
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
```

## Test Examples

```js
const { assert } = require("chai");

describe("Sample tests", () => {
  it("Sample test 1", () => {
    assert.strictEqual(solution(""), "", `solution("")`);
  });
  it("Sample test 2", () => {
    assert.strictEqual(solution("camelCasing"), "camel Casing", `solution("camelCasing")`);
  });
  it("Sample test 3", () => {
    assert.strictEqual(solution("camelCasingTest"), "camel Casing Test", `solution("camelCasingTest")`);
  });
});

```


## Notes


/notes here //

## My solution with comments:

```js
var mySolution = '';
```


## Results 1

```js
Test Results:
```

## Interesting Kata solution:

```js


```

## Notes about the interesting one:

notes about other solution here


---