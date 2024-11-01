# 72th Kata -- Find Minimum in Rotated Sorted Array

by *[NeetCode](https://neetcode.io/problems/find-minimum-in-rotated-sorted-array)*


## Task

### Find Minimum in Rotated Sorted Array

You are given an array of length n which was originally sorted in ascending order. It has now been rotated between 1 and n times. For example, the array `nums = [1,2,3,4,5,6]` might become:

* `[3,4,5,6,1,2]` if it was rotated 4 times.
* `[1,2,3,4,5,6]` if it was rotated 6 times.
Notice that rotating the array 4 times moves the last four elements of the array to the beginning. Rotating the array 6 times produces the original array.

Assuming all elements in the rotated sorted array nums are unique, return the minimum element of this array.

A solution that runs in O(n) time is trivial, can you write an algorithm that runs in O(log n) time?


Constraints:

* `1 <= nums.length <= 1000`
* `-1000 <= nums[i] <= 1000`

## Test Examples


Example 1:

```js
Input: nums = [3,4,5,6,1,2]

Output: 1
```
Example 2:
```js
Input: nums = [4,5,0,1,2,3]

Output: 0
```
Example 3:
```js
Input: nums = [4,5,6,7]

Output: 4
```


## Notes

This is not an efficient solution, but this is the easiest way to solve it I came up with, instead the solution is intended to use binary search:

```js

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        //sort the array and then return the first element
        let solutt = nums.sort((a,b) => a-b)
        return solutt[0]
    }
}
```



## Results

```js
Accepted

Passed test cases: 18 / 18

You have successfully completed this problem!
```

## Solution:
> by NeetCode at *[YouTube](https://youtu.be/nIVW4P8b1VA)*

```js
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        //define both pointers
        let leftPointer = 0 ;
        let rightPointer = nums.length -1 ;
        //define the resolution 
        let resolution = nums[0];
        //start the search
        while (leftPointer <= rightPointer) {
            if (nums[leftPointer] <= nums[rightPointer]){
                //resolution should be the minimum between the current first and the left pointer
                resolution = Math.min(resolution, nums[leftPointer])
                //break after doing this check
                break;
            }
            //define the mid pointer that allows us to halve the search in each iteration
            let midPointer = leftPointer + Math.floor((rightPointer - leftPointer)/2);
            //after halving check the resolution again against the midpointer position
            resolution = Math.min(resolution, nums[midPointer]);
            if (nums[midPointer] >= nums [leftPointer]) {
                //move the left pointer based on the mid pointer condition
                leftPointer = midPointer + 1 ;
            } else {
                //mode the right pointer based on the mid pointer condition, if the left one was not moved
                rightPointer = midPointer - 1;
            }
        }
        //return the result
        return resolution ;
    }
}

```

## Notes about the Solution:

This a very clear example of how the binary search works, can be considered the literal clear algorithm

---