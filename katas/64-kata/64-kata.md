# 64th Kata -- Permutation String


by *[NeetCode](https://neetcode.io/problems/permutation-string)*


## Task

### Permutation String


You are given two strings s1 and s2.

Return true if s2 contains a permutation of s1, or false otherwise. That means if a permutation of s1 exists as a substring of s2, then return true.

Both strings only contain lowercase letters.

Constraints:

* `1 <= s1.length, s2.length <= 1000`


## Test Examples

Example 1:


```js

Input: s1 = "abc", s2 = "lecabee"

Output: true
```
Explanation: The substring `"cab"` is a permutation of `"abc"` and is present in `"lecabee"`.

Example 2:


```js

Input: s1 = "abc", s2 = "lecaabee"

Output: false

```
## Notes

This one was challenging to wrap around, needing more than one session of commenting and leaning.

The sliding window technique is really powerfull, I'm starting to see the pattern on it


## Results

```js

Accepted

Passed test cases: 26 / 26

You have successfully completed this problem!
```

## Solution:
> by NeetCode at *[YouTube](https://youtu.be/UbyhOgBN834)*

```js

class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        //edge case, s1 cannot be smaller to s2
        if (s1.length > s2.length) {
            return false;
        }

        //create and fill the arrays we will use for the comparison with 0s
        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);

        //in the arrays increase only the character count of the characters on each string (limited to the length of s1)
        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }
        //define the matches tracking variable
        let matches = 0;
        //we set matches as the initial comparison by iterating through both arrays
        for (let i = 0; i < 26; i++) {
            if (s1Count[i] === s2Count[i]) {
                matches++;
            }
        }
        //define the left pointer
        let l = 0;
        //start the sliding window, define the right pointer 
        for (let r = s1.length; r < s2.length; r++) {
            //first we check if we have found our response
            if (matches === 26) {
                return true;
            }
            //define the index as the ascii character of the current right pointer position minus the first letter
            let index = s2.charCodeAt(r) - 'a'.charCodeAt(0);
            //increment the count of the character at index in the count array
            s2Count[index]++;
            //check if the new count is the same as in s1Count if so we increment, if not we decrement
            if (s1Count[index] === s2Count[index]) {
                matches++; 
            } else if (s1Count[index] + 1 === s2Count[index]) { //we check for potential mismatches caused by the previous count
                matches--;
            }
            //re define the index as the ascii character of the current left pointer position minus the first letter
            index = s2.charCodeAt(l) - 'a'.charCodeAt(0);
            //decrement the count of the character at index in the count array
            s2Count[index]--; 
            //check if the new count is the same as in s1Count if so we decrement, if not we increment
            if (s1Count[index] === s2Count[index]) {
                matches++;
            } else if (s1Count[index] - 1 === s2Count[index]) { //we check for potential mismatches caused by the previous count
                matches--;
            }
            l++; //move the window
        }
        return matches === 26; // return a check of true false if matches == 26
    }
}

```



---