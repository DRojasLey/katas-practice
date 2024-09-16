# 51th Kata -- Buy and Sell Crypto



by *[NeetCode](https://neetcode.io/problems/buy-and-sell-crypto)*


## Task

### Buy and Sell Crypto

You are given an integer array ```prices``` where ```prices[i]``` is the price of NeetCoin on the ```ith``` day.

You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be ```0```.

Example 1:
```
Input: prices = [10,1,5,6,7,1]

Output: 6
```
Explanation: Buy ```prices[1]``` and sell``` prices[4]```, ```profit = 7 - 1 = 6```.

Example 2:

```
Input: prices = [10,8,7,5,2]
Output: 0
```
Explanation: No profitable transactions can be made, thus the max profit is 0.

Constraints:

* ```1 <= prices.length <= 100```
* ```0 <= prices[i] <= 100```


## Test Examples

```js
[7,1,5,3,6,4]
[7,6,4,3,1]
```


## Notes

I used external examples to get to the Math.max it was interesting to learn


## My solution with comments:

```js

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let minPrice = prices[0];

        for (let i = 1; i < prices.length; i++) {
          if (prices[i] < minPrice) {
            minPrice = prices[i];
          } else {
            maxProfit = Math.max(maxProfit,  
       prices[i] - minPrice);
          }
        }
        return maxProfit;  

      }
}

```


## Results

```js

Accepted

Passed test cases: 29 / 29
You have successfully completed this problem!
```

## Solution:
> by NeetCode at *[YouTube](https://youtu.be/1pkOgXD63yU)*

```js

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = prices[0];
        let max = min;
        let value = 0;
        for (let i = 0; i < prices.length; i++) {
            if (i != prices.length - 1 && prices[i] <= min) {
                max = min = prices[i];
            } else if (prices[i] > max) {
                max = prices[i];
            }
            value = max - min > value ? max - min : value;
        }
        return value;
    }
}
```

## Notes about the Solution:

This one is more  readable than my solution ni some aspects, but it just might be me not being able to differentiate between both

---