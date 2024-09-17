# 1st Kata -- Multiples of 3 or 5





by *[jhoffner](https://www.codewars.com/users/jhoffner)*


## Task

### Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)




## Test Examples

```js

const { assert } = require("chai")

function test(n, expected) {
  it(`n=${n}`, () => {
    let actual = solution(n)
    assert.strictEqual(actual, expected)
  })
}

describe("basic tests", function(){
  test(10,23)
})

```


## Notes

First completed kata, this was indeed a lot of code for something so simple, a revisit can be completed on the future to optimize

## My solution with comments:

```js


function solution(number){
  //check if the number is negative
  if (Math.sign(number) === -1){
    //if the number is negative, return 0
    return 0;
  }else{
    // assign this variable to count the number of iterations
    let myCounter = 0;
    //declare sum variable the one we will return
    let sum = 0;
    do {
      //check if the number is a multiple of 3 and 5 with modulo
      if (myCounter%3 === 0 && myCounter%5 === 0){
        //if it is, add the number to sum
        sum += myCounter;
      } else if (myCounter%3 === 0 || myCounter%5 === 0 ){  //<<<<------check if the number is multiple of 3 or 5 with modulo
        //if it is multiple of any of those two options we will add it to the sum variable
        sum += myCounter
      }
      //if none of the above cases apply we should then only increase the number value to iterate the next loop 
      myCounter++;
    } while (myCounter < number); // << we check if our counter has reached the number value, that way we know we need to exit the loop
    //return the sum variable once the loop is done
    return sum ;

  }
}

```


## Results

```js

Time: 885ms Passed: 111Failed: 0
Test Results:
basic tests
smallest cases
random cases
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[GeneralYouri](https://www.codewars.com/users/GeneralYouri)*

```js

const sumOfMultiples = (limit, divisor) => {
    const occurrences = Math.trunc((limit - 1) / divisor);
    return ((occurrences + 1) * divisor) / 2 * occurrences;
};

const solution = (input) => {
    const limit = Number(input);

    return sumOfMultiples(limit, 3) + sumOfMultiples(limit, 5) - sumOfMultiples(limit, 3 * 5);
};
```

## Notes about the interesting one:

Very explicative solution :D


---