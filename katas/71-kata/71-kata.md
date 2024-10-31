# 71th Kata -- Eating Bananas


by *[NeetCode](https://neetcode.io/problems/eating-bananas)*


## Task

### Eating Bananas


You are given an integer array `piles` where `piles[i]` is the number of bananas in the `ith` pile. You are also given an integer `h`, which represents the number of hours you have to eat all the bananas.

You may decide your bananas-per-hour eating rate of `k`. Each hour, you may choose a pile of bananas and eats `k` bananas from that pile. If the pile has less than `k` bananas, you may finish eating the pile but you can not eat from another pile in the same hour.

Return the minimum integer `k` such that you can eat all the bananas within `h` hours.

Constraints:

* `1 <= piles.length <= 1,000`
* `piles.length <= h <= 1,000,000`
* `1 <= piles[i] <= 1,000,000,000`

## Test Examples

Example 1:

```js
Input: piles = [1,4,3,2], h = 9

Output: 2
```
Explanation: With an eating rate of 2, you can eat the bananas in 6 hours. With an eating rate of 1, you would need 10 hours to eat all the bananas (which exceeds h=9), thus the minimum eating rate is 2.

Example 2:

```js
Input: piles = [25,10,23,4], h = 4

Output: 25
```

## Notes

I saw the solution clearly this time, nonetheless took me an hour and a half to correctly implement it
## My solution with comments:

```js

class Solution {
    /**
    * @param {number[]} piles
    * @param {number} h
    * @return {number}
    */
    minEatingSpeed(piles, h) {
        //start with k=0 to avoid 0 division
        let k = 1
        while (true) {
            //use reduce to apply the logic to each element
            let sum = piles.reduce((sumAccum, currentPile)=>{
                //sum the rounded average to the variable we will use to compare the rate
                sumAccum += Math.ceil(currentPile/k)
                return sumAccum
            },0)
            //this will check if the current k complies with the condition this also ensures that the loop is not infinite
            if (sum <= h) {
                return k;
            }
            // increase k if the condition is not met
            k++
        }        
    }
}

```


## Results

```js
Accepted

Passed test cases: 23 / 23

You have successfully completed this problem!
```

## Solution:
> by NeetCode at *[YouTube](https://youtu.be/U2SozAs9RzA)*

```js

class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let res = r;

        while (l <= r) {
            const k = Math.floor((l + r) / 2);

            let totalTime = 0;
            for (const p of piles) {
                totalTime += Math.ceil(p / k);
            }
            if (totalTime <= h) {
                res = k;
                r = k - 1;
            } else {
                l = k + 1;
            }
        }
        return res;
    }
}
```

## Notes about the Solution:

The current topic of the exercises is binary search, which is at full display here



---