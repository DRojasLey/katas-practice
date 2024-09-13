# 49th Kata -- Top K Elements in List


by *[NeetCode](https://neetcode.io/problems/top-k-elements-in-list)*


## Task

### Top K Elements in List


Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.

Example 1:

```
Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]
```

Example 2:
```
Input: nums = [7,7], k = 1

Output: [7]
```
Constraints:

* ```1 <= nums.length <= 10^4```.
* ```-1000 <= nums[i] <= 1000```
* ```1 <= k <= number of distinct elements in nums```.


## Test Examples

```js
nums = [1,2,2,3,3,3]
k = 2

nums = [7,7]
k = 1
```


## Notes

1- My initial attempt at this kata has failed because I misunderstood what was being asked, and used sort on the array, which will not sort them by frequency, as requested, but by actual value.
I will attempt a new solution later today


## My first failed solution:

```js
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    let result = [];
    const sorted = nums.sort().reverse();
    
    result.push(sorted[0]);
    for (let index = 0; result.length < k ; index++) {
        const element = sorted[index];
        if (element != sorted[0]) {
            result.push(element);
        }
    }
    return result
};
}

```

## My second solution with comments:


```js
```

## Results

```js

//hpefully good results here

```

## Solution:
> by NeetCode *[YouTube](LINKHERE)*

```js

//interesting solution here

```

## Notes about the Solution:

Interesting kata notes here


---