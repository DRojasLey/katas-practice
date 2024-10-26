# 66th Kata -- Evaluate Reverse Polish Notation


by *[NeetCode](https://neetcode.io/problems/evaluate-reverse-polish-notation)*


## Task

### Evaluate Reverse Polish Notation


You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.

Return the integer that represents the evaluation of the expression.

The operands may be integers or the results of other operations.
The operators include `'+'`, `'-'`, `'*'`, and `'/'`.
Assume that division between integers always truncates toward zero.

Constraints:

`1 <= tokens.length <= 1000`.
tokens[i] is `"+"`,`"-"`,`"*"`, or `"/"`, or a string representing an integer in the range `[-100, 100]`.

## Test Examples

Example 1:


```js
Input: tokens = ["1","2","+","3","*","4","-"]

Output: 5

Explanation: ((1 + 2) * 3) - 4 = 5
```


## Notes

It was hard for me to understand how stacks were going to be used but this first application of the data structure was eye opening

## Results

```js
Accepted

Passed test cases: 15 / 15

You have successfully completed this problem!
```

## Solution:
> by NeetCode at *[YouTube](https://youtu.be/iu0082c4HDE)*

```js
class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        //define the stack data structure
        const stack = [];
        //iterate on the array
        for (const c of tokens) {
            //operations are defined before the numbers are added to the stack
            //plus sign detected = we pop the 2 previous elements of the stack array and add them then the result is pushed to the stack
            if (c === '+') {
                stack.push(stack.pop() + stack.pop());
            //minus sign detected = we pop the 2 previous elements of the stack array and substract them then the result is pushed to the stack
            } else if (c === '-') {
                const a = stack.pop();
                const b = stack.pop();
                stack.push(b - a);
            //sterisk sign detected = we pop the 2 previous elements of the stack array and multiply them then the result is pushed to the stack
            } else if (c === '*') {
                stack.push(stack.pop() * stack.pop());
            //slash sign detected = we pop the 2 previous elements of the stack array and divide them then the result is pushed to the stack
            } else if (c === '/') {
                const a = stack.pop();
                const b = stack.pop();
                stack.push(Math.trunc(b / a));
            //if it is just a number the element is pushed to the stack so it can be proccessed on the next sign iteration
            } else {
                stack.push(parseInt(c));
            }
        }
        //we return the last pushed element which will always be the result of the last operation
        return stack.pop();
    }
}
```

## Notes about the Solution:

I love how simple this was, even the selection of how the operations are applied in order. 

---