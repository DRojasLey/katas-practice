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

2- My second attempt was more grounded, and I learn multiple things regarding sorting and forIn loops, successfully passed it


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
    topKFrequent(nums, k) {
    // define the arrays and the obj
    let sorting = [];
    let result = [];
    let processingObj = {};
    // count the occurrencies of each number and populate te obj
    nums.forEach(element => {
        if (!processingObj[element]){
            processingObj[element] = 0;
            processingObj[element]++
        } else if (processingObj[element]) {
            processingObj[element]++
        };
    });
    // convert the counted numbers obj into an array, to sort it
    for ( let num1 in processingObj ){
        sorting.push([num1 , processingObj[num1]]);
    };
    // sort and reverse the arra, reverse to make return easier
    sorting.sort((a,b)=>{
        return b[1]-a[1];
    })
    // get the results using K
    for (let index = 0; index < k; index++) {
        result.push(sorting[index][0]);
    }
    //return the result
    return result
};
```

## Results

```js
Accepted

Passed test cases: 21 / 21
You have successfully completed this problem!
```

## Solution:
> by NeetCode at *[YouTube](https://youtu.be/YPTqKIgVk-k)*

```js

topKFrequent(nums, k) {
        const count = {}; // using an obj as well
        const freq = Array.from({ length: nums.length + 1 }, () => []); //wtf is this line
        //this for of loop accomplishes the same as my for each cleanlier
        for (const n of nums) {
            count[n] = (count[n] || 0) + 1;
        }
        // this uses the aray of arrays created in the wtf line
        for (const n in count) {
            freq[count[n]].push(parseInt(n));  .
        }
        // this will scan the array of arrays and populate the result depending on the K value
        const res = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                res.push(n);
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
```

## Notes about the Solution:

#### First impression before video
This code is really nested, at least partially, which makes it not that readable to be honest, I see that the freq variable is using the Array constructor.

Then something similar to my count method using an object is used

After that there is a multilevel nesting piece of code that essentially returns the result based on k?

#### After video
so the WTF line was just an array being initialized
in this solution he creates a new array of arrays that will containt each possible frequency of elements given the length

for example for an array of 6 elements the array of arrays will be:
freq = [[],[],[],[],[],[]]

He then assigns the number to the array corresponding to his value, using the index of the array as the frequency

finally he scans the array of arrays to return based on k


---