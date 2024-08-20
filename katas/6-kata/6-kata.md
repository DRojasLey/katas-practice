# 6th Kata -- Keep Hydrated!






by *[paulrichard](https://www.codewars.com/users/paulrichard)*


## Task

### Keep Hydrated!


Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:
```
time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
```


## Test Examples

```js

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Fixed tests', () => {
  it('Tests', () => {
    assert.strictEqual(litres(2), 1, 'should return 1 litre');
    assert.strictEqual(litres(1.4), 0, 'should return 0 litres');
    assert.strictEqual(litres(12.3), 6, 'should return 6 litres');
    assert.strictEqual(litres(0.82), 0, 'should return 0 litres');
    assert.strictEqual(litres(11.8), 5, 'should return 5 litres');
    assert.strictEqual(litres(1787), 893, 'should return 893 litres');
    assert.strictEqual(litres(0), 0, 'should return 0 litres');
  });
});

```


## Notes

very simple kata

## My solution with comments:

```js

function litres(time) {
    return Math.floor(0.5 * time);
  }

```


## Results

```js

Time: 845ms Passed: 2Failed: 0
Test Results:
Fixed tests
Tests
Completed in 1ms
Random tests
Testing for 40 random tests
Completed in 1ms
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[1PxUp](https://www.codewars.com/users/1PxUp)*
> by *[e.mihaylin](https://www.codewars.com/users/e.mihaylin)*


```js

function litres(time) {
  return parseInt(time/2);
}

litres = t => ~~(t / 2);


```

## Notes about the interesting one:

Added two interesting solutions, I have no idea what the tildes do there ~~

And a good use of parseInt()

---