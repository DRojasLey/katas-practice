# 46th Kata -- Two Integer Sum


by *[NeetCode](https://neetcode.io/problems/two-integer-sum)*


## Task

### Two Integer Sum


Given an array of integers ```nums``` and an integer ```target```, return the indices ```i``` and ```j``` such that ```nums[i] + nums[j] == target``` and ```i != j```.

You may assume that every input has exactly one pair of indices ```i``` and ```j``` that satisfy the condition.

Return the answer with the smaller index first.

Example 1:
```
Input:

nums = [3,4,5,6], target = 7

Output: [0,1]
```
Explanation:``` nums[0] + nums[1] == 7```, so we return ```[0, 1]```.

Example 2:
```
Input:

nums = [4,5,6], target = 10

Output: [0,2]
```
Example 3:
```
Input:
nums = [5,5], target = 10

Output: [0,1]
```
Constraints:

* ```2 <= nums.length <= 1000```
* ```-10,000,000 <= nums[i] <= 10,000,000```
* ```-10,000,000 <= target <= 10,000,000```


## Test Examples

```js

nums = [3,4,5,6]
target = 7
nums = [4,5,6]
target = 10

```


## Notes

After watching the video I understood That I essentially bruteforced the proccess

## My solution with comments:

```js

twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
            return [i, j];
            }
        }
        }
        return [];
}
```


## Results

```js

Accepted

Passed test cases: 23 / 23
You have successfully completed this problem!
```

## solution:
> by NeetCode at *[Youtube](https://youtu.be/KLlXCFG5TnA)*

```js

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       const map = new Map();

        for (let index = 0; index < nums.length; index++) {
            const num = nums[index];
            const complement = target - num;
            const sumIndex = map.get(complement);

            const isTarget = map.has(complement);
            if (isTarget) {
                return [index, sumIndex];
            }

            map.set(num, index);
        }

        return [-1, -1];
    }
}
```

## Notes about the interesting one:

Ater learning that I was bruteforcing, the video introduced to me the concept of Hash Maps.


---