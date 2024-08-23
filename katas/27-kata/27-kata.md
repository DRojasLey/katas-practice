# 27th Kata -- You're a square!






by *[bkaes](https://www.codewars.com/users/bkaes)*


## Task

### You're a square!


A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples


```
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
```


## Test Examples

```js

const Test = require('@codewars/test-compat');

describe("isSquare", function(){
  it("should work for some examples", function(){
    Test.assertEquals(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
    Test.assertEquals(isSquare( 0), true, "0 is a square number (0 * 0)");
    Test.assertEquals(isSquare( 3), false, "3 is not a square number");
    Test.assertEquals(isSquare( 4), true, "4 is a square number (2 * 2)");
    Test.assertEquals(isSquare(25), true, "25 is a square number (5 * 5)");
    Test.assertEquals(isSquare(26), false, "26 is not a square number");
  });
});

```


## Notes

This was very interesting to work with mostly because of the square root and string usage idea I got from a coercion in a quick search, as I do not like the coercion that much so I went ahead and used the method to convert it.

## My solution with comments:

```js

const isSquare = n =>{
    if (n >= 0){
        let ruut = (Math.sqrt(n)).toString(); // get the square root and convert it to a string
        ruut = ruut.split('.')[1]; //get the decimal part of the number by spliting the string to an array using the '.' and then taking the first element of the array
        return  !ruut ? true : false ; // check if that element even exist, if the decimal part does not exists the number is a perfect square, if there is a decimal part we confirm it isn't
    }else{
        return false; // begative numbers cannot be perfect squares
    }
}
```


## Results

```js

Time: 779ms Passed: 3Failed: 0
Test Results:
isSquare
should work for some examples
should work for random square numbers
should work for random numbers
Completed in 2ms
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[rbaumier](https://www.codewars.com/users/rbaumier)*

```js

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}
```

## Notes about the interesting one:

It is so simple and elegant that I had to put it in here, I understand the line, and love how he just used mathematical principles to get to a solution


---