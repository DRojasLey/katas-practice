# 35th Kata -- Printer Errors






by *[g964](https://www.codewars.com/users/g964)*


## Task

### Printer Errors


In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from ```a to m```.

The colors used by the printer are recorded in a control string. For example a "good" control string would be ```aaabbbbhaijjjm``` meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. ```aaaxbbbbyyhwawiwjjjwwm``` with letters not from ```a to m```.

You have to write a function ```printer_error``` which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ```a``` to ```z```.

Examples:
```
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
```

## Test Examples

```js

const Test = require('@codewars/test-compat');

describe("printerError",function() {
it("Basic tests",function() {
    var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
    Test.assertEquals(printerError(s), "3/56")
})})
```


## Notes

At the start I thought I would need to convert the letters to ascii but then I noticed it was working with the letter themselves, which saved me some operations.

## My solution with comments:

```js

function printerError(s) {
    let errors = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] < 'a' || s[i] > 'm') { // we can use the character as it will do a coercion and take 'a' and 'm' as it's ascii value
        errors++;
      }
    }
    const totalLength = s.length;
    return `${errors}/${totalLength}`;
  }
```


## Results

```js

Time: 958ms Passed: 201Failed: 0
Test Results:
printerError
Basic tests
Completed in 1ms
Random tests
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[okonek83](https://www.codewars.com/users/okonek83)*

```js
function printerError(s) {
    let b = Array.from(s).filter(letter => letter > "m");
    return b.length+"/"+s.length;
}
```

## Notes about the interesting one:

This one is interesting because he used the same coercion trick but instead he ignored the "a" side of the range, (taking into account the conditions of the description, this was an evident path in hindsight)

He uses the range after 'm' to filter and create an array of errors, and then counts everything when returning it

---