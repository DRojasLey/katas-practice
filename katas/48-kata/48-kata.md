# 48th Kata -- Anagram Groups -- second attempt


by *[NeetCode](https://neetcode.io/problems/anagram-groups)*


## Task

### Anagram Groups


Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:
```
Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
```
Example 2:
```
Input: strs = ["x"]

Output: [["x"]]
```
Example 3:
```
Input: strs = [""]

Output: [[""]]
```
Constraints:

 * ```1 <= strs.length <= 1000.```
 * ```0 <= strs[i].length <= 100```
 * ```strs[i]``` is made up of lowercase English letters.


## Test Examples

```js
["act","pots","tops","cat","stop","hat"]
["x"]
```


## Notes

I already had a idea of how to solve it, with now better understanding I was able to find a solution, the most tricky part was using the created object to generate the new array.

## My solution with comments:

```js

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    const keyIndexRelations = {}; // initialize the object
    strs.forEach((element, index) => {
        let sortedWord = element.split('').sort().join(''); // get the sorted word we will use as key
        if (!keyIndexRelations[sortedWord]) { // if we haven't added this key before to the object
            keyIndexRelations[sortedWord] = [index]; //we will add it and also add he current index of that word
        } else {
            keyIndexRelations[sortedWord].push(index); //if the key already exists we will just push the index
        }
    });
    /* extract an array with the values of the object and initialize a map (for the top level of the array) */
    const result = Object.values(keyIndexRelations).map(indexes => {
        /* Now that we have the array of arrays we will map each array element to the corresponding word on the original array */
        return indexes.map(index => strs[index]); 
    });
    /* At this point result is the correct array with the anagrams grouped*/

    return result;
};
}

```


## Results

```js

Accepted

Passed test cases: 25 / 25
You have successfully completed this problem!
```

## Solution:
> by NeetCode *[YouTube](https://youtu.be/vzdNOK2oB2E)*

```js

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const ans = {};

        for (const s of strs) {
            const count = Array(26).fill(0);
            for (const c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }

            const key = count.join('#');
            if (!ans[key]) {
                ans[key] = [];
            }

            ans[key].push(s);
        }

        return Object.values(ans);
    }
}
```

## Notes about the interesting one:

Same solution as yesterday, this problem seems to be solved in an easier way by using maps and a letter based key.

---