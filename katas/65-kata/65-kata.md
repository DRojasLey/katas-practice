# 65th Kata -- Minimum Stack


by *[NeetCode](https://neetcode.io/problems/minimum-stack)*


## Task

### Minimum Stack


Design a stack class that supports the push, pop, top, and getMin operations.

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.

####Constraints:

`-2^31 <= val <= 2^31 - 1`.
`pop`, `top` and `getMin` will always be called on *non-empty* stacks.

## Test Examples

Example 1:

```js
Input: ["MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"]

Output: [null,null,null,null,0,null,2,1]

Explanation:
MinStack minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
minStack.getMin(); // return 0
minStack.pop();
minStack.top();    // return 2
minStack.getMin(); // return 1
```


## Notes

This is and introductory exercise to the stack data structure.

## Results

```js

Accepted

Passed test cases: 23 / 23

You have successfully completed this problem!
```

## Solution:
> by NeetCode at *[YouTube](https://youtu.be/qkLl7nAwDPo)*

```js

class MinStack {
    constructor() {
        //defines de stack as an empty array using the constructor will create both arrays:
        this.stack = [];
        //This will track the minimum value from the stack to make is easier to retrieve later in constant time
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        //this will add the element to the stack array
        this.stack.push(val);
        /*this will redefined the val value to add to the minStack using the comparator Math.min method, the first element to compare is the value being added,
        * the second element is either the value itself if there is no other element in the array, or if there is elements, the last element
        */
        val = Math.min(
            val, this.minStack.length === 0 ? val : this.minStack[this.minStack.length - 1],
        );
        //now we just add the element to the min array
        this.minStack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        //we pop from both stacks if a value is removed
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        //We get the last element added to the stack
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        //We get the last element added to the minStack, we do not need to operate again as the minStack is updated on each push
        return this.minStack[this.minStack.length - 1];
    }
}
```

## Notes about the Solution:

This is an interesting way of creating a data structure to be used, I will probably use this as a template for future classes

---