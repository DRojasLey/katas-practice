# 23th Kata -- Are they the "same"?






by *[g964](https://www.codewars.com/users/g964)*


## Task

### Are they the "same"?


Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
```
a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
```
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:
```
a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
```
Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:
```
a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
```
comp(a,b) returns false because in b 132 is not the square of any number of a.
```
a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
```
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks
a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).

If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.



## Test Examples

```js

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
    assert.isTrue(comp(a1, a2));
  });
});

```


## Notes

This one took me a while as I first tried to use includes(), which works for cases where there are no duplicates.
This was despite my initial impulse to use sort instead and then compare both arrays, once I found that includes was not gonna work I switched back to sort + map and a for loop to get to this solution.

Although I learned a bit about includes and map, I needed the time for other things :C

## My solution with comments:

```js

function comp(array1, array2) {
    //regular data validation
    if (array1 === null || array2 === null || array1.length !== array2.length) {
        return false;
    // we check if both arrays are thruthy
    } else if (array1 && array2){
        //make sure  we convert the arrays to as close as possible,
        //this is done as include() will make error the solution out for duplicated values
        let sortedOne = array1.sort((a,b)=>a-b)
        let sortedTwo = array2.map(num => Math.sqrt(num)).sort((a, b) => a - b);
        // we iterate for each element checking if each element coincides, actually going 1 by one element
        // if we compare sorted1 to sorted2 it will return false as the comparison will check the variable name
        for (let i = 0; i < sortedOne.length; i++) {
            if (sortedOne[i] !== sortedTwo[i]) {
                //return false if the elements do not coincide
                return false;
            }
        }
        //return true if all the elements coincide
        return true;
    }
}
```


## Results

```js

Time: 1122ms Passed: 214Failed: 0
Test Results:
Basic tests
Random tests
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[somebody](https://example.com)*

```js

function comp(a, b) {
  return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
}

```

## Notes about the interesting one:


The very first solution was my solution but more efficiently written, not much to learn, however this one uses double negation for the implicit null checks, that is interesting, also, he converted the processed arrays into strings to avoid the need for a for loop, much clever indeed.


---