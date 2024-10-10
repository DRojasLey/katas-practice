# XXth Kata -- Permutation String


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

Notes here

## My solution with comments:

```js

//My code here

```


## Results

```js

//hopefully good results here

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
        if (s1.length > s2.length) {
            return false;
        }

        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);
        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }

        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (s1Count[i] === s2Count[i]) {
                matches++;
            }
        }

        let l = 0;
        for (let r = s1.length; r < s2.length; r++) {
            if (matches === 26) {
                return true;
            }

            let index = s2.charCodeAt(r) - 'a'.charCodeAt(0);
            s2Count[index]++;
            if (s1Count[index] === s2Count[index]) {
                matches++;
            } else if (s1Count[index] + 1 === s2Count[index]) {
                matches--;
            }

            index = s2.charCodeAt(l) - 'a'.charCodeAt(0);
            s2Count[index]--;
            if (s1Count[index] === s2Count[index]) {
                matches++;
            } else if (s1Count[index] - 1 === s2Count[index]) {
                matches--;
            }
            l++;
        }
        return matches === 26;
    }
}

```

## Notes about the Solution:

Interesting kata notes here


---