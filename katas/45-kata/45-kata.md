# 45th Kata -- Is Anagram


by *[NeetCode](https://neetcode.io/problems/is-anagram)*


## Task

### Is Anagram


Given two strings ```s``` and ```t```, return ```true``` if the two strings are anagrams of each other, otherwise return ```false```.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:
```
Input: s = "racecar", t = "carrace"

Output: true
```
Example 2:
```
Input: s = "jar", t = "jam"

Output: false
```
Constraints:

```s``` and ```t``` consist of lowercase English letters.


## Test Examples

```js

"racecar"
"carrace"
"jar"
"jam"
```


## Notes

This was surprisingly fast, I thought I had to do more at the start, but then noticed that I could just organize the words and compare them.


## My solution with comments:

```js
    isAnagram(s, t) {
        s = s.split('').sort().join('');
        t = t.split('').sort().join('');
        if (s === t) {
            return true;
        } else {
            return false;
        }
    }
```


## Results

```js
Accepted

Passed test cases: 21 / 21
You have successfully completed this problem!
```

## solution:
> by *[Is Anagram](https://youtu.be/9UtInBqnCgA)*

```js

    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const countS = {};
        const countT = {};

        for (let i = 0; i < s.length; i++) {
            countS[s[i]] = 1 + (countS[s[i]] || 0);
            countT[t[i]] = 1 + (countT[t[i]] || 0);
        }

        for (const key in countS) {
            if (countS[key] !== countT[key]) {
                return false;
            }
        }

        return true;
    }
```

## Notes about the interesting one:

Apparently using sets is more efficient as you'll use less memory and processing complexity

---