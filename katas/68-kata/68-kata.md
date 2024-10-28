# 68th Kata -- Daily Temperatures


by *[NeetCode](LINKHERE)*


## Task

### Daily Temperatures


You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day.

Return an array result where result[i] is the number of days after the ith day before a warmer temperature appears on a future day. If there is no day in the future where a warmer temperature will appear for the ith day, set result[i] to 0 instead.

Constraints:

* `1 <= temperatures.length <= 1000.`
* `1 <= temperatures[i] <= 100`



## Test Examples

Example 1:

```js
Input: temperatures = [30,38,30,36,35,40,28]

Output: [1,4,1,2,1,0,0]
```
Example 2:

```js
Input: temperatures = [22,21,20]

Output: [0,0,0]
```


## Notes

This one seems simple but the main concept behind it is fairly complex

## Results

```js
Accepted

Passed test cases: 23 / 23

You have successfully completed this problem!
```

## Solution:
> by NeetCode at *[YouTube](https://youtu.be/cTBiBSnjO3c)*

```js

class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        //generate and fill the results array
        const res = new Array(temperatures.length).fill(0);
        //stack array used as an stack data structure
        const stack = []; // pair: [temp, index]

        // loop over the temperatures array
        for (let i = 0; i < temperatures.length; i++) {
            const t = temperatures[i];
            // While loop will run as long as there are elements in the stack && the current temperature is higher than the temp at the top of the stack
            while (stack.length > 0 && t > stack[stack.length - 1][0]) {
                //last element of the stack is removed .pop() method returns the temperature and index pair and assigns them in order
                const [stackT, stackInd] = stack.pop();
                //assign the result to the result array  as the difference between the current index i and the index we got from poping
                res[stackInd] = i - stackInd;
            }
            //add the current temperature to the stack so it can be used for future calculations
            stack.push([t, i]);
        }
        // return the result array 
        return res;
    }
}
```

## Notes about the Solution:

According to the author this solution uses: A monotonic decreasing stack, which is the base for multiple problems, I'll investigate this further

---