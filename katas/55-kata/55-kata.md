# 55th Kata -- Products of Array Discluding Self



by *[NeetCode](https://neetcode.io/problems/reverse-a-linked-list)*


## Task

### Products of Array Discluding Self


Given an integer array `nums`, return an array `output` where `output[i]` is the product of all the elements of `nums` except `nums[i]`.

Each product is guaranteed to fit in a 32-bit integer.


Example 1:
```
Input: nums = [1,2,4,6]

Output: [48,24,12,8]
```
Example 2:
```
Input: nums = [-1,0,1,2,3]

Output: [0,-6,0,0,0]
```
Constraints:

* ```2 <= nums.length <= 1000```
* ```-20 <= nums[i] <= 20```

## Test Examples

```js
[1,2,4,6]
[-1,0,1,2,3]
```


## Notes

This one was a surprise, I worked on it for a while just taking notes and creating notes on potential solutions

Then I just started coding for real and the first solution came to me naturally, it was a honestly good approximation

Then I got stuck and tried to improve the filter until I finally got it.

very nice one

## My solution with comments:

```js

class Solution {
    /**
    * @param {number[]} nums
    * @return {number[]}
    */
    productExceptSelf(nums) {
        let processing = []; // hwre we are going to add the numbers we will multiply
        let result = [] // this will store the results
        for (let index = 0; index < nums.length; index++) { // iterate over numbers
            result[index] = 1;// the result must be defined as 1 so we can multiply it
            processing = nums.filter((number, i) => i !== index) // this was the harder line, it took me a while to remember that filter also received the index parameter and then another while to understand how I could use the external index variable to correctly filter the numbers
            for (let j = 0; j < processing.length; j++) { // iterate over the processing array so we can get the produc
                const processingElement = processing[j] // current element of the processing array
                result[index] *= processingElement; // assign multipliication
            }
        }
        return result;
    }
}
```


## Results

```js

Accepted

Passed test cases: 19 / 19
You have successfully completed this problem!
```

## Solution:
> by NeetCode at *[YouTube](https://youtu.be/bNvIQI2wAjk)*

```js

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = [];
        let prefix = 1;
        let postfix = 1;

        for (let i = 0; i < nums.length; i++) {
            result[i] = prefix;
            prefix *= nums[i];
        }
        for (let i = nums.length - 2; i >= 0; i--) {
            postfix *= nums[i + 1];
            result[i] *= postfix;
        }

        return result;
    }
}
```

## Notes about the Solution:

As expected this is was simpler and uses very clever ways of working the solution out

---