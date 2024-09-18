# 52th Kata -- Validate Parentheses


by *[NeetCode](https://neetcode.io/problems/validate-parentheses)*


## Task

### kataValidate Parentheses


You are given a string s consisting of the following characters: `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`.

The input string `s` is valid if and only if:

1. Every open bracket is closed by the same type of close bracket.
1. Open brackets are closed in the correct order.
1. Every close bracket has a corresponding open bracket of the same type.

Return `true` if `s` is a valid string, and `false` otherwise.

Example 1:
```
Input: s = "[]"

Output: true
```
Example 2:
```
Input: s = "([{}])"

Output: true
```
Example 3:
```
Input: s = "[(])"

Output: false
```
Explanation: The brackets are not closed in the correct order.

Constraints:

* ```1 <= s.length <= 1000```



## Test Examples

```js

"[]"
"([{}])"
```


## Notes
this is a brute force solution, that was cooked with a lot of help from Daniel Trujillo


## My solution with comments:

```js

    isValid(s) {
    const dictio = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    if( s.length === 0 ) {
        return true ;
    }
    if (!s.includes(')') && !s.includes('}') && !s.includes(']')){
        return false ;
    }

    let newStringu ;

    for (let index = 0; index < s.length; index++) {
        const character = s[index] ;
        if (!(character in dictio)) continue ;
        if (index === 0) return false ;
        if (s[index-1] !== dictio[character]) return false ;
        let firstoHalf = s.slice( 0 , index -1 ) ;
        let secondoHalf = s.slice( index + 1 ) ;
        newStringu = firstoHalf + secondoHalf ;
        break
    }
    return this.isValid( newStringu )

}
```


## Results

```js

Accepted

Passed test cases: 31 / 31
You have successfully completed this problem!
```

## Solution:
> by NeetCode at *[YouTube](LINKHERE)*

```js

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = {
            '}': '{',
            ']': '[',
            ')': '(',
        };

        for (const char of s) {
            const isBracket = char in map;
            if (!isBracket) {
                stack.push(char);
                continue;
            }

            const isEqual = stack[stack.length - 1] === map[char];
            if (isEqual) {
                stack.pop();
                continue;
            }

            return false;
        }

        return stack.length === 0;
    }
}
```

## Notes about the Solution:

They used a stack array that allow them to pop elements and check

---