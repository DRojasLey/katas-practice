# 33th Kata -- Exes and Ohs






by *[joh_pot](https://www.codewars.com/users/joh_pot)*


## Task

### Exes and Ohs


Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:
```
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
```


## Test Examples

```js
const Test = require('@codewars/test-compat');
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(XO('xo'),true);
Test.assertEquals(XO("xxOo"),true);
Test.assertEquals(XO("xxxm"),false);
Test.assertEquals(XO("Oo"),false);
Test.assertEquals(XO("ooom"),false);
  });
});
```


## Notes

It was interesting exploring how to get this to work without regex, using the split was taken from examples in stackOverflow


## My solution with comments:

```js
function XO(str) {
    const numOfX= str.toLowerCase().split('x').length-1 // convert the string to lower case then split the string into array so we can then count the amount of elements in the array, finally substract 1 (the split will cause 1 more element than needed)
    const numOfO= str.toLowerCase().split('o').length-1
    if (!numOfO && !numOfX){
        return true // if the string does not contain the xo
    }else {
    return numOfX !== numOfO ? false : true ; //if the comparison is different we return false else we return true
    }
}
```


## Results

```js
Time: 832ms Passed: 1Failed: 0
Test Results:
Tests
test
Completed in 1ms
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[kirilloid](https://www.codewars.com/users/kirilloid)*

```js
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
```

## Notes about the interesting one:

Aside from using regex, the interesting part is the return statement and the usage of .match

Match will use the regex (that checks for the letter case insensitive) and will add the elements to an array
If there are no occurrences we will get a null element

That null element is important in the check for the return, that is a boolean check without any usage of ternary or If:

if X (and later o) is thruty (not null) and the length of the array is equal to the length of the array of the other letter the whole expression becomes true, anything else is false

beautifully not clear at first glance but very clever


---