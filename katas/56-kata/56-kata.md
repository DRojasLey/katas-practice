# 56th Kata -- Longest Consecutive Sequence


by *[NeetCode](https://neetcode.io/problems/longest-consecutive-sequence)*


## Task

### Longest Consecutive Sequence


Given an array of integers `nums`, return the length of the longest consecutive sequence of elements.

A consecutive sequence is a sequence of elements in which each element is exactly `1` greater than the previous element.

Constraints:

* ```0 <= nums.length <= 1000```
* ```-10^9 <= nums[i] <= 10^9```

## Test Examples


Example 1:
```
Input: nums = [2,20,4,10,3,4,5]

Output: 4
```
Explanation: The longest consecutive sequence is [2, 3, 4, 5].

Example 2:
```
Input: nums = [0,3,2,5,4,6,1,1]

Output: 7
```


## Notes

This kata has taken me some days to finish.

At the end I have followed a tutorial 


## My solution with comments:

```js

function longestConsecutive(nums) {
    if (nums.length === 0) {
        return 0;
    }
    const numSet = new Set(nums);
    let longestStreak = 0;
    for (let num of numSet) {
        // Only start counting if it's the beginning of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;
            // Count the consecutive sequence length
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    return longestStreak;
}
```


## Results

```js

Accepted

Passed test cases: 22 / 22

You have successfully completed this problem!
```

## Solution:
> by NeetCode at *[YouTube](https://youtu.be/P6RZZMu_maU)*

```js

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longest = 0;

        for (const n of numSet) {
            if (!numSet.has(n - 1)) {
                let length = 1;
                while (numSet.has(n + length)) {
                    length++;
                }
                longest = Math.max(length, longest);
            }
        }
        return longest;
    }
}
```

## Notes about the Solution:

When cehcking the solution video I found out that this was a Lettcode Hard problem, no wonder It had me so frustrated and that I needed help.

---