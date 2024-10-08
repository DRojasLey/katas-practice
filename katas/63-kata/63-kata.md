# 63th Kata -- Longest Repeating Substring With Replacement


by *[NeetCode](https://neetcode.io/problems/longest-repeating-substring-with-replacement)*


## Task

### Longest Repeating Substring With Replacement


You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.

After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

Constraints:

* `1 <= s.length <= 1000`
* `0 <= k <= s.length`

## Test Examples

### Example 1:

```js

Input: s = "XYYX", k = 2

Output: 4
```
Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.

### Example 2:


```js

Input: s = "AAABABB", k = 1

Output: 5
```


## Notes

This is the second Sliding Window exercise, gotta confess I like this algorithm a lot


## My solution with comments:

```js

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // Use a hashmap to trace the frequency of the letters
        let count = new Map()
        let leftWindowPointer = 0
        let result = 0;
        //declare the right pointer inside the loop we are going to use to control the window size
        for (let rightWindowPointer = 0; rightWindowPointer < s.length; rightWindowPointer++) {
            //calculate the current window length
            let windowLength = rightWindowPointer - leftWindowPointer + 1 ;
            //assign the current character as a key in the map, and the value as 1 + (0 if the value does not exists) OR (the actual stored value)
            count.set(s[rightWindowPointer], (count.get(s[rightWindowPointer]) || 0) + 1 );
            // Make sure the amount of character that can be changed is not higher than K
            if (windowLength - Math.max(...count.values())> k){ // use spread to pass the values of the map to the Math.max function
                // if it is higher than K we reduce the count of the character at the left pointer
                count.set(s[leftWindowPointer], count.get(s[leftWindowPointer])-1)
                // and increase the pointer, effectively moving the window to the right
                leftWindowPointer++
            }
            // recalculate the new windowLength after modifying it in the previous If statement
            windowLength = rightWindowPointer - leftWindowPointer + 1 ;
            // check if the current window is bigger than the previous and assign the highest value to the result
            result = Math.max(result, windowLength);
        }
        return result; // once the loop is over return the result
    }
}

```


## Results

```js

Accepted

Passed test cases: 23 / 23

You have successfully completed this problem!
```

## Solution:
> by NeetCode at *[YouTube](https://youtu.be/gqXU1UyA8pk)*

```js

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        const count = new Map();
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            let len = r - l + 1;
            count.set(s[r], 1 + (count.get(s[r]) || 0));

            if (len - Math.max(...count.values()) > k) {
                count.set(s[l], count.get(s[l]) - 1);
                l++;
            }
            len = r - l + 1;
            res = Math.max(res, len);
        }

        return res;
    }
}
```

## Notes about the Solution:

Same as before I'm following the instructions but taking a deeper look into the solution while typing it

---