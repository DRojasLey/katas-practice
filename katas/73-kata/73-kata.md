# 73th Kata -- Find Target in Rotated Sorted Array


by *[NeetCode](https://neetcode.io/problems/find-target-in-rotated-sorted-array)*


## Task

### Find Target in Rotated Sorted Array


You are given an array of length n which was originally sorted in ascending order. It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:

* `[3,4,5,6,1,2]` if it was rotated 4 times.
* `[1,2,3,4,5,6]` if it was rotated 6 times.
Given the rotated sorted array nums and an integer target, return the index of target within nums, or -1 if it is not present.

You may assume all elements in the sorted rotated array nums are unique,

A solution that runs in O(n) time is trivial, can you write an algorithm that runs in O(log n) time?

Constraints:

* `1 <= nums.length <= 1000`
* `-1000 <= nums[i] <= 1000`
* `-1000 <= target <= 1000`


## Test Examples

Example 1:

```js
Input: nums = [3,4,5,6,1,2], target = 1

Output: 4
```
Example 2:



```js
Input: nums = [3,5,6,0,1,2], target = 4

Output: -1
```


## Notes

I mean... it is just that for an O(n)

## My solution with comments:

```js

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        return nums.indexOf(target)
    }
}
```


## Results

```js

Accepted

Passed test cases: 34 / 34

You have successfully completed this problem!
```

## Solution:
> by NeetCode at *[YouTube](https://youtu.be/U8XENwh8Oy8)*

```js

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length - 1;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if (target === nums[mid]) {
                return mid;
            }

            if (nums[l] <= nums[mid]) {
                if (target > nums[mid] || target < nums[l]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            } else {
                if (target < nums[mid] || target > nums[r]) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            }
        }
        return -1;
    }
}
```

## Notes about the Solution:

This solution is binary search one pass, video watch time added to the solution time as well 

---