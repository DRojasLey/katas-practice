# 44th Kata -- Duplicate Integer


by *[NeetCode](https://neetcode.io/problems/duplicate-integer)*


## Task

### Duplicate Integer


Solved
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:
```
Input: nums = [1, 2, 3, 3]

Output: true
```
Example 2:
```
Input: nums = [1, 2, 3, 4]

Output: false
```

## Test Cases

```js
[1,2,3,3]
[1,2,3,4]
```


## Notes

Notes here

## My solution with comments:

```js
hasDuplicate(nums) {
        nums.sort();
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) {
                return true;
            }
        }
        return false;
    }
```


## Results

```js
Accepted

Passed test cases: 21 / 21
You have successfully completed this problem!

Follow-Up Questions

Is Anagram
Two Integer Sum
```

## Interesting Kata solution:
> by [Youtube](https://youtu.be/3OamzN90kPg)*

```js
 hasDuplicate(nums) {
        const numsSet = new Set();
        for (const num of nums) {
            if (numsSet.has(num)) return true;

            numsSet.add(num);
        }

        return false;
    }
```

## Notes about the interesting one:

this uses new Set(); again, I need to learn more about sets as the properties of them seem suitable for more complex processes

---