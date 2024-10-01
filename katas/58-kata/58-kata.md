# 58th Kata -- Two Integer Sum II


by *[NeetCode](https://neetcode.io/problems/two-integer-sum-ii)*


## Task

### Two Integer Sum II

Given an array of integers numbers that is sorted in non-decreasing order.

Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

There will always be exactly one valid solution.


Constraints:

* `2 <= numbers.length <= 1000`
* `-1000 <= numbers[i] <= 1000`
* `-1000 <= target <= 1000`



## Test Examples

```js

Example 1:

Input: numbers = [1,2,3,4], target = 3

Output: [1,2]
```
Explanation:
The sum of 1 and 2 is 3. Since we are assuming a 1-indexed array, index1 = 1, index2 = 2. We return [1, 2].


## Notes

I read a tutorial for two pointers algorithm. I will come back to this later

## My solution with comments:

```js

  function twoSum(numbers, target) {
    //first pointer
    let left = 0;
    //second pointer
    let right = numbers.length - 1;
    while (left < right) {
        //sum each number in the current indexes to compare it
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            //return tne indexes if correct
            return [left + 1, right + 1];
        } else if (sum < target) {
            //move the left pointer if the sum is less than the expected target
            left++;
        } else {
            //move the right pointer if the result if bigger than the target
            right--;
        }
    }
}
```


## Results

```js

Accepted

Passed test cases: 22 / 22

You have successfully completed this problem!
```

## Solution:
> by NeetCode at *[YouTube](https://youtu.be/cQ1Oz4ckceM)*

```js

 twoSum(numbers, target) {
        let l = 0;
        let r = numbers.length - 1;

        while (l < r) {
            const curSum = numbers[l] + numbers[r];

            if (curSum > target) {
                r--;
            } else if (curSum < target) {
                l++;
            } else {
                return [l + 1, r + 1];
            }
        }

        return [];
    }
```

## Notes about the Solution:

He seems to have created the tutorial :facepalm:

---