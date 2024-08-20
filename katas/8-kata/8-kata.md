# 8th Kata -- Does my number look big in this?






by *[JulianNicholls](https://www.codewars.com/users/JulianNicholls)*


## Task

### Does my number look big in this?


A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:
```
    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
```
and 1652 (4 digits), which isn't:
```
    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
```
The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.



## Test Examples

```js

const { assert } = require("chai")

describe( "Example tests", function() {
  
  function dotest(input, expected) {
    const actual = narcissistic(input);
    assert.strictEqual(actual, expected, `Incorrect answer for value=${input}`)
  }
  
  it("Narcissistic numbers", function() {
    dotest(  7, true);
    dotest(153, true);
  });
  
  it("Not narcissistic numbers", function() {
    dotest(122, false);
    dotest(487, false);
  });
});

```


## Notes

This was a very interesting kata as it teached me about the narcissistic numbers and it was my first implementation of map

## My solution with comments:

```js

function narcissistic(value) {
    let numberAsArray = value.toString().split(''); // we convert it into a string to then separate each element to an element on an array
    let elevatedArray = numberAsArray.map((x) => (+x)** numberAsArray.length); // we elevate each number in each element to the length of the array (we added the unary for consistency)
    let sumOfNumber = 0; // initialize the sum variable
    elevatedArray.forEach( num =>{ sumOfNumber += num}) // we sum the elements to get the final comparation
    if (sumOfNumber === value){ return true} else { return false}; //we check if the result is equal to the given number, if so the number is narcissistic
}
```


## Results

```js

Time: 794ms Passed: 3Failed: 0
Test Results:
Submission tests
Narcissistic numbers
Not narcissistic numbers
Random tests
Completed in 4ms
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[somebody](https://example.com)*

```js

function narcissistic( value ) {
  return ('' + value).split('').reduce(function(p, c){
    return p + Math.pow(c, ('' + value).length)
    }, 0) == value;
}
```

## Notes about the interesting one:

This person used reduce, which became my favorite array iterator, and also Math.pow, instead of the operator, which brings more clarity to the code, nice.


---