# 67th Kata -- Generate Parentheses


by *[NeetCode](https://neetcode.io/problems/generate-parentheses)*


## Task

### Generate Parentheses


You are given an integer `n`. Return all well-formed parentheses strings that you can generate with `n` pairs of parentheses.

You may return the answer in any order.



Constraints:

`1 <= n <= 7`

## Test Examples

Example 1:

```js
Input: n = 1

Output: ["()"]
```
Example 2:

```js
Input: n = 3

Output: ["((()))","(()())","(())()","()(())","()()()"]
```


## Notes

The most recent exercises are now all about stack, this one tough, uses it very briefly, the solution is focused on recursive cases, it took me a while to understand how it worked
## Results

```js
Accepted

Passed test cases: 7 / 7

You have successfully completed this problem!
```

## Solution:
> by NeetCode at *[YouTube](https://youtu.be/s9fokUqJ76A)*

```js

class Solution {
    /**
    * @param {number} n
    * @return {string[]}
    */
   // we will use this as the entry point of the code
    generateParenthesis(n) {
        // define the stack an empty array
        const res = [];
        //we call the backtrack method which will be the one processing all the recursion
        this.backtrack(n, 0, 0, '', res);
        //once backtrack is done we return res
        return res;
    }
    
    /**
    * @param {number} n
    * @param {number} openN
    * @param {number} closedN
    * @param {string} current
    * @param {string[]}
    * @return {void}
    */
   // this is the method that will be used to generate all possible combinations of parentheses
    backtrack(n, openN, closedN, current, res) {
        //base case checking if the processing is done when the string is valid and the size of the string is correct we will return the result
        if (openN === closedN && openN === n) {
            res.push(current);
            return;
        }
        //first recursion, we will add 1 to the open and add an open parenthese to the current solution
        if (openN < n) {
            this.backtrack(n, openN + 1, closedN, current + '(', res);
        }
        // closing parenthese recursive case, we add 1 to the closed count and add a closed parenthese to the current solution
        if (closedN < openN) {
            this.backtrack(n, openN, closedN + 1, current + ')', res);
        }
    }
}
```

## Notes about the Solution:

The recursion here is really interesting, I'm not able yet to grasp how it is doing each branch of the solution tree, but I can see how it works in a general sense, learning about recursion before helped me understand it, but the way this one is written makes me a bit confused.

---