# 34th Kata -- Growth of a Population






by *[g964](https://www.codewars.com/users/g964)*


## Task

### Growth of a Population


In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by ```2 percent``` per year and moreover ```50``` new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to ```p = 1200``` inhabitants?
```
At the end of the first year there will be:
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be:
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
```

More generally given parameters:

```p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)```

the function ```nb_year``` should return ```n``` number of entire years needed to get a population greater or equal to ```p```.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)
```
Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
```

Note:
Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

There are no fractions of people. At the end of each year, the population count is an integer: ```252.8``` people round down to ```252``` persons.



## Test Examples

```js

describe("nbYear",function() {
it("Basic tests",function() {
    Test.assertEquals(nbYear(1500, 5, 100, 5000), 15);
    Test.assertEquals(nbYear(1500000, 2.5, 10000, 2000000), 10);
    Test.assertEquals(nbYear(1500000, 0.25, 1000, 2000000), 94);
    Test.assertEquals(nbYear(1000, 2.0, 50, 1214), 4, "Did you maybe forgot to round down population at the end of each year?");
})})

```


## Notes

Initially did it as a while loop, so I could understand the problem better and then once I focused on the issue I converted it into a For loop

## My solution with comments:

```js
function nbYear(p0, percent, aug, p) {
    let countYear
    for (countYear = 0 ; p0 < p ; countYear++) {
        p0 = Math.floor(p0 + (p0*percent/100) + aug);
    };
    return countYear
}
```


## Results

```js
Time: 995ms Passed: 101Failed: 0
Test Results:
nbYear
Basic tests
Completed in 1ms
Random tests
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[kuznetsov-m](https://www.codewars.com/users/kuznetsov-m)*

```js

function nbYear(p0, percent, aug, p, years = 0) {
  if (p0 < p) {
    return nbYear(p0 + Math.floor(p0 * percent / 100) + aug, percent, aug, p, ++years);
  }
  return years;
}
```

## Notes about the interesting one:

I saw some solutions that just had var for the counter variable so it was globally available, and with less parenthesis just relying on operator hierarchy.

but this one stood up as it is a recursive function!, very nice, modifies the original starting statement by directly adding the counter as a parameter and recursively calling herself until the value is reached.

This is consistently 0.1 seconds faster than my solution:

```
Time: 856ms Passed: 101Failed: 0
Test Results:
nbYear
Basic tests
Completed in 1ms
Random tests
You have passed all of the tests! :)
```

Does this mean recursive functions can be faster than regular loops?
is there a limit to that efficiency?

---