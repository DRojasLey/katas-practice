# 50th Kata -- String Encode and Decode


by *[NeetCode](https://neetcode.io/problems/string-encode-and-decode)*


## Task

### String Encode and Decode


Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Please implement encode and decode

Example 1:

```
Input: ["neet","code","love","you"]

Output:["neet","code","love","you"]
```
Example 2:
```
Input: ["we","say",":","yes"]

Output: ["we","say",":","yes"]
```
Constraints:

* ```0 <= strs.length < 100```
* ```0 <= strs[i].length < 200```
* ```strs[i]``` contains only UTF-8 characters.



## Test Examples

```js
["we","say",":","yes"]
["neet","code","love","you"]
```


## Notes

I had to read some approaches for this one, I did not copy but implemented the ideas I saw and read, still I would visit this one on the future to see if I can come up with an idea from zero

## My solution with comments:

```js
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
     encode(strs) {
        //simple encoding process
        const encodedString = strs.reduce((stringu, element) => {
            let encoded = element.length + '%' + element ;
            stringu += encoded ;
            console.log(stringu)
            return stringu;
        }, '')
      return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        //define the variables we will be using
        const decodedStrings = [];
        let currentIndex = 0;
        //a while loop to iterate over the string
        while (currentIndex < str.length) {
            //this is to count the characters
          let characterIndex = currentIndex;
            //we count the characters until the %
          while (str[characterIndex] !== '%') {
            characterIndex++;
          }
            //convert the integer that represents the string length into an actual number
          const length = +(str.slice(currentIndex, characterIndex));
          //add one  to ignore the %
          currentIndex = characterIndex + 1;
          // take the number that represents the last character of the string based on the count we did
          characterIndex = currentIndex + length;

            // slice and push the slice to the resulting array
          decodedStrings.push(str.slice(currentIndex, characterIndex));
          currentIndex = characterIndex;
        }

        return decodedStrings;

    }
}
```


## Results

```js
Accepted

Passed test cases: 20 / 20
You have successfully completed this problem!
```

## Solution:
> by NeetCode at *[YouTube](https://youtu.be/B1k_sxOSgv8)*

```js
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = '';
        for (let s of strs) {
            result += `${s.length}#${s}`;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            let length = parseInt(str.substring(i, j), 10);
            i = j + 1;
            j = i + length;
            result.push(str.substring(i, j));
            i = j;
        }
        return result;
    }
}
```

## Notes about the Solution:

Code looks clearner, but they really like the single letter varibles which are not that clear when understanding the code in the long run

---