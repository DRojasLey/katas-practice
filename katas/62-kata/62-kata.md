# 62th Kata -- Longest Substring Without Duplicates


by *[NeetCode](https://neetcode.io/problems/longest-substring-without-duplicates)*


## Task

### Longest Substring Without Duplicates


Given a string s, find the length of the longest substring without duplicate characters.

A substring is a contiguous sequence of characters within a string.

Constraints:

* `0 <= s.length <= 1000`
* `s` may consist of printable ASCII characters.


## Test Examples

### Example 1:


```js

Input: s = "zxyzxyz"

Output: 3
```
Explanation: The string "xyz" is the longest without duplicate characters.

### Example 2:



```js

Input: s = "xxxx"

Output: 1
```



## Notes

This is the first time I learn of the sliding window algorithm, followed the video code, but as exercide I translated the code directly from the instruction into JS, the instructions were in Python code.


## My solution with comments:

```js

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const characterSet = new Set; // define the set to track unique elements
        let left = 0; // left pouinter of the window
        let result = 0;
        for (let right = 0; right < s.length; right++) { // we define the right pointer inside the loop as it is constantly changing
            while (characterSet.has(s[right])){
                //if the right pointer of the window already exist on the set we remove characters from the set
                characterSet.delete(s[left])
                left++ // we increase the left pointer to continue iterating
            }
            characterSet.add(s[right]) // we add the next character to the set, which will track the new sub string
            result = Math.max(result, right - left + 1 ) // we check which is higher, the previous result or the current lenght of the sliding window
        }
        return result // retgurn the result after iterating

    }
}

```


## Results

```js

Accepted

Passed test cases: 30 / 30

You have successfully completed this problem!
```

## Solution:
> by NeetCode at *[YouTube](https://youtu.be/wiGpQwVHdE0)*

```js

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const charSet = new Set();
        let l = 0;
        let res = 0;

        for (let r = 0; r < s.length; r++) {
            while (charSet.has(s[r])) {
                charSet.delete(s[l]);
                l++;
            }
            charSet.add(s[r]);
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
```

## Notes about the Solution:

The solution is the same as I directly followed the tutorial, the space for me to learn was that I wrote the code directly from the video, did not copy it, but typed it from the original instructions

---