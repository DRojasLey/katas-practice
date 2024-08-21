# 25th Kata -- Total amount of points






by *[petrosernivka](https://www.codewars.com/users/petrosernivka)*


## Task

### Total amount of points


Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)

We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4



## Test Examples

```js

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Total amount of points", function(){
  it("Sample Tests", function(){
    assert.strictEqual(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30);
    assert.strictEqual(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10);
    assert.strictEqual(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , 0);
    assert.strictEqual(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , 15);
    assert.strictEqual(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) , 12);
  });
});

```


## Notes

Apparently hard when I saw it first, not a 8 kyu I would have been able to do on the first day, but now it felt simple and easy

## My solution with comments:

```js

function points(games) {
    let result = 0;
    let iteranding = games.forEach(currStr=>{ // iterate through the array
        let  arr = currStr.split(':') // convert the string into an array using the :
        if(+arr[0] > +arr[1]){
            result += 3;
        } else if (+arr[0] === +arr[1]){
            result ++;
        } // increase result according to the conditions
    });
    return result //return the result which now has all the points
}

```


## Results

```js

Time: 784ms Passed: 2Failed: 0
Test Results:
Total amount of points
Fixed Tests
Random tests
Completed in 2ms
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[njohnson7](https://www.codewars.com/users/njohnson7)*

```js

const points = games => games.reduce((sum, [x, , y]) => sum + (x > y ? 3 : x == y), 0)

```

## Notes about the interesting one:

Somebody used reduce, I wanted to but I hold the rush to do it, just because I wanted to practice more with forEach, one thing I do not like that much is that he just accepted the coercion of the elements, while most people, me included took the time to convert and ensure the element was a number

I like though, the way he defined the current elements inside of the reduce parameters as [x, , y] I did not know this was possible.

finally the usage of the ternary, I suspected it was easier, but I'm not this clever.

---