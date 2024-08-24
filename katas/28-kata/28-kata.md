# 28th Kata -- String ends with?






by *[jhoffner](https://www.codewars.com/users/jhoffner)*


## Task

### String ends with?


Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:


```
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
```


## Test Examples

```js

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(solution('abcde', 'cde'), true)
Test.assertEquals(solution('abcde', 'abc'), false)
});
});
```


## Notes

So there is a method that does this directly, which is very nice.


## My solution with comments:

```js

function solution(str, ending){
return str.endsWith(ending) // look at that!, it is a new method I did not know about
}
```


## Results

```js

Time: 1050ms Passed: 1Failed: 0
Test Results:
Tests
test
Completed in 2ms
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[enterprize2](https://www.codewars.com/users/enterprize2)*

```js

function solution(str, ending){
  return str.substr(-ending.length) == ending;
}
```

## Notes about the interesting one:

This one uses substr() which has caught my attention a couple of times before


---