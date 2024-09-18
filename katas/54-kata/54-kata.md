# 54th Kata -- Binary Search


by *[NeetCode](https://neetcode.io/problems/binary-search)*


## Task

### Binary Search


You are given an array of distinct integers `nums`, sorted in ascending order, and an integer `target`.

Implement a function to search for `target` within `nums`. If it exists, then return its index, otherwise, return `-1`.

Your solution must run in 

O(logn) time.

Example 1:
```
Input: nums = [-1,0,2,4,6,8], target = 4

Output: 3
```
Example 2:
```
Input: nums = [-1,0,2,4,6,8], target = 3

Output: -1
```
Constraints:

* ```1 <= nums.length <= 10000.```
* ```-10000 < nums[i], target < 10000```


## Test Examples

```js

[-1,0,2,4,6,8]
3
```


## Notes

I think this is meant to be an exercise of recreating the actual algorithm instead of using built in methods but time is of the essence today

## My solution with comments:

```js
    search(nums, target) {
        return nums.indexOf(target)
    }
```


## Results

```js
Accepted

Passed test cases: 18 / 18
You have successfully completed this problem!
```

## Solution:
> by NeetCode at *[YouTube](https://youtu.be/s4DPM8ct1pI)*

```js

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            const m = l + Math.floor((r - l) / 2);
            if (nums[m] > target) {
                r = m - 1;
            } else if (nums[m] < target) {
                l = m + 1;
            } else {
                return m;
            }
        }
        return -1;
    }
}
```

## Notes about the Solution:

Yep, it is about creating your own indexOf algorithm

---