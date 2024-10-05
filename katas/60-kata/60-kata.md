# 60th Kata -- Max Water Container


by *[NeetCode](https://neetcode.io/problems/max-water-container)*


## Task

### Max Water Container


You are given an integer array heights where heights[i] represents the height of the *`ith`*
  bar.

You may choose any two bars to form a container. Return the maximum amount of water a container can store.

Constraints:

* `2 <= height.length <= 1000`
* `0 <= height[i] <= 1000`

## Test Examples

Example 1:

![alt text](image.png)

```js
Input: height = [1,7,2,5,4,7,3,6]

Output: 36
```
Example 2:

```js
Input: height = [2,2,2]

Output: 4

```


## Notes

After seeing the video I understood this was a bruteforce approach which is not the best option.

## My solution with comments:

```js

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxVolume = 0;

        for (let leftBar = 0; leftBar < heights.length; leftBar++) {
            for (let rightBar = leftBar + 1; rightBar < heights.length; rightBar++) {
                const containerHeight = Math.min(heights[leftBar], heights[rightBar]);
                const containerWidth = rightBar - leftBar;
                const currentVolume = containerHeight * containerWidth;
                maxVolume = Math.max(maxVolume, currentVolume);
            }
        }

        return maxVolume;
    }
}

```


## Results

```js

Accepted

Passed test cases: 25 / 25

You have successfully completed this problem!
```

## Solution:
> by NeetCode at *[YouTube](https://youtu.be/UuiTKBwPgAo)*

```js

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let res = 0;

        while (left < right) {
            const containerLength = right - left;
            const area =
                containerLength * Math.min(heights[left], heights[right]);
            res = Math.max(res, area);
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return res;
    }
}
```

## Notes about the Solution:

Not only does it perform better, it looks better and everything

---