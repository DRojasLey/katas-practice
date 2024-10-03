# 59th Kata -- Three Integer Sum


by *[NeetCode](https://neetcode.io/problems/three-integer-sum)*


## Task

### Three Integer Sum


Three Integer Sum
Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` where` nums[i] + nums[j] + nums[k] == 0`, and the indices `i`, `j` and `k` are all distinct.

The output should *not* contain any duplicate triplets. You may return the output and the triplets in **any order**.

Constraints:

* `3 <= nums.length <= 1000`
* `-10^5 <= nums[i] <= 10^5`



## Test Examples


Example 1:
```
Input: nums = [-1,0,1,2,-1,-4]

Output: [[-1,-1,2],[-1,0,1]]
```
Explanation:

`nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.`
`nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.`
`nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.`
The distinct triplets are `[-1,0,1]` and `[-1,-1,2]`.

Example 2:
```
Input: nums = [0,1,1]

Output: []
```
Explanation: The only possible triplet does not sum up to 0.

Example 3:
```
Input: nums = [0,0,0]

Output: [[0,0,0]]
```
Explanation: The only possible triplet sums up to 0.



## Notes

I've decided to try for 30 mins and then watch the solution, from the explanation I will try to do my code again, if it fails I'll see the code solution and from the code solution I can improve my code, this is the result of that method:

## My solution with comments:

```js

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result =[] //initialize the result array
        nums = nums.sort(( a, b ) => a - b); // sort the array so we can then reduce the problem to 2 sum
        for (let index = 0; index < nums.length; index++) { //start the first element loop
            if (index > 0 && nums[index]=== nums[index-1]){ //check duplicate values to comply with restrictions
                continue; // if the element is a duplicate of the previous element, we skip this iteration
            }
            let leftPointer = index + 1;  //initialize the left pointer so it is one higher to the first element
            let rightPointer = nums.length - 1; // initialize the pointer as the last element of the array
            /*Start the two int sum problem */
            while (leftPointer < rightPointer){
                const sum = nums[index] + nums[leftPointer] + nums[rightPointer] //sum the three numbers
                /* check for which pointer to move based on te value of the sum */
                if (sum > 0){
                    rightPointer--; // move the right pointer left if the value is higher than expected
                }
                if (sum < 0){
                    leftPointer++; // move the left pointer right if the value is lower than expected
                }
                if (sum === 0){
                    result.push([nums[index], nums[leftPointer], nums[rightPointer]])
                    leftPointer++
                    //to avoid duplicate sets for the second position we must check for duplicates and move the left pointer
                    while (nums[leftPointer] === nums[leftPointer - 1] && leftPointer < rightPointer){
                        leftPointer++;
                    }
                }
            }
        }
        return result;
    }
}
```


## Results

```js

Accepted

Passed test cases: 24 / 24

You have successfully completed this problem!
```

## Solution:
> by NeetCode at *[YouTube](https://youtu.be/jzZsG8n2R9A)*

```js

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1;
            let r = nums.length - 1;
            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];
                if (sum > 0) {
                    r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
            }
        }
        return res;
    }
}
```

## Notes about the Solution:

My final solution is very similar because I just followed instructions after not coming up with a solution myself, still I went through each instruction and analyzed it throughly to ensure this was not just a copy paste solution

---