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

// unable to give it more thought the first attempt was failed, I tried using .map() to try and expand on my expertise of that method, but cost me failing on the limited time I had//

At night I was able to just default to the method I'm most confortable at the moment: reduce().

And it was really fast.

## My solution with comments:

```js
function solution(string) {
    let arrayedStr = string.split('') // we convert to array
                           .reduce((strToReturn, currEle) =>{ // we initialize the reduce method
                               if (currEle.toUpperCase() === currEle){ //  if the current letter on the array is capitalized
                                   strToReturn += ` ${currEle}`; // add the space if it is capitalized
                               } else{
                                   strToReturn += currEle; // not capitalized? > add the letter or empty string
                               };
                               return strToReturn // always return the accumulator
}, '');// the accumulator is set as an empty string
    return arrayedStr // returning the string as the response
};
```


## Results

```js
Test Results:
Sample tests
random tests
You have passed all of the tests! :)
```

## Interesting Kata solution:

```js
function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}

```

## Notes about the interesting one:

This is literally the solution I wanted to implement but for some reason the example I had from yesterday of .map() use included a reverse and some additional parameters, as I thought, map seems to be a bit more efficient at this task, I will try to dig deeper on this method in future ocassions

---