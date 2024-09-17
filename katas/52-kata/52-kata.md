# 52th Kata -- Is Palindrome


by *[NeetCode](https://neetcode.io/problems/is-palindrome)*


## Task

### Is Palindrome


Given a string `s`, return `true` if it is a palindrome, otherwise return `false`.

A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

Example 1:
```
Input: s = "Was it a car or a cat I saw?"

Output: true
```
Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

Example 2:
```
Input: s = "tab a cat"

Output: false
```
Explanation: "tabacat" is not a palindrome.

Constraints:

* ```1 <= s.length <= 1000```
* `s` is made up of only printable ASCII characters.


## Test Examples

```js
"Was it a car or a cat I saw?"'
"tab a cat"
```


## Notes

Even though I initially felt I'd already done this before, this was a problem I was overthinking ended up using 50 minutes on it unnecessarily complicating things


## My solution with comments:

```js
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // prepare the string for processing
    let string1 = s.toLowerCase().split(' ').join('');
    // define the comparing string so we can use includes
    const alphaNumeric = 'abcdefghijklmnopqrstuvwxyz0123456789'
    //filter only the alphanumerical values
    let filteredString = string1.split('').reduce((accumulatorString, letter) => {
        if (alphaNumeric.includes(letter)){
            accumulatorString += letter
        }
        return accumulatorString;
    }, '')
    // prepare the second string
    const reversedStr = filteredString.split('').reverse().join('');
    //compare and return
    return filteredString === reversedStr ? true : false ;
}
}
```


## Results

```js
Accepted

Passed test cases: 31 / 31
You have successfully completed this problem!
```

## Solution:
> by NeetCode at *[YouTube](https://youtu.be/jJXJ16kPFWg)*

```js

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            while (l < r && !this.alphaNum(s[l])) {
                l++;
            }
            while (r > l && !this.alphaNum(s[r])) {
                r--;
            }
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
```

## Notes about the Solution:

This is a multiple level loop process, way more efficient than my code

---