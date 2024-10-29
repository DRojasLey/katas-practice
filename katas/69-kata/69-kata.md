# 69th Kata -- Car Fleet


by *[NeetCode](https://neetcode.io/problems/car-fleet)*


## Task

### Car Fleet


There are `n` cars traveling to the same destination on a one-lane highway.

You are given two arrays of integers `position` and `speed`, both of length `n`.

* `position[i]` is the position of the `ith car` (in miles)
* `speed[i]` is the speed of the `ith car` (in miles per hour)

The destination is at position `target` miles.

A car can **not** pass another car ahead of it. It can only catch up to another car and then drive at the same speed as the car ahead of it.

A **car fleet** is a non-empty set of cars driving at the same position and same speed. A single car is also considered a car fleet.

If a car catches up to a car fleet the moment the fleet reaches the destination, then the car is considered to be part of the fleet.

Return the number of **different car fleets** that will arrive at the destination.

Constraints:

* `n == position.length == speed.length`.
* `1 <= n <= 1000`
* `0 < target <= 1000`
* `0 < speed[i] <= 100`
* `0 <= position[i] < target`
* All the values of `position` are **unique**.


## Test Examples

Example 1:
```js
Input: target = 10, position = [1,4], speed = [3,2]

Output: 1
```
Explanation: The cars starting at 1 (speed 3) and 4 (speed 2) become a fleet, meeting each other at 10, the destination.

Example 2:
```js
Input: target = 10, position = [4,1,0,7], speed = [2,2,1,1]

Output: 3
```


## Notes

I always try to approach the code directly, this time I only needed one detail from the video and it was the sorting, which was inverted (I didn't notice at first) so we could iterate in reverse, from the car closest to the target to the one farther away.


## Results

```js
Accepted

Passed test cases: 22 / 22

You have successfully completed this problem!
```

## Solution:
> by NeetCode at *[YouTube](https://youtu.be/Pr6T-3yB9RM)*

```js

class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        //put the amount of cars in the n variable
        const n = position.length;
        //create a single array to better track speed and position, this will also give us an index of the cars to work with later
        const pairs = position.map((p, i) => [p, speed[i]]);
        //sort the pairs array in descending order so we properly compare the cars from the one which is ahead to the one closer to the starting point
        pairs.sort((a, b) => b[0] - a[0]);

        //define the result variable
        let fleetCount = 0;
        //create an array, same size as the amount of cars, this will track the time it takes each car to arrive
        const timeToReach = new Array(n);
        //iterate over the time to reach array 
        for (let i = 0; i < n; i++) {
            //apply (target-position)/speed to each car and store it on the timetoreach array
            timeToReach[i] = (target - pairs[i][0]) / pairs[i][1];
            //if the speed of the previous car is higher to the current car speed, it will reach it before the target or at the target
            if (i >= 1 && timeToReach[i] <= timeToReach[i - 1]) {
                //we reduce the car to the previous one if the time to reach is lower, as it will essentially get converted
                timeToReach[i] = timeToReach[i - 1];
            } else {
                //if the car time to reach is lower to the previous one, it will be considered a fleet
                fleetCount++;
            }
        }
        //return the count
        return fleetCount;
    }
}
```

## Notes about the Solution:

This is apparently a linear equations problem in which you can visualize the intersection of the cars trajectory, and infer that the intersections would create a car fleet.

In the video, he uses a stack, however in the solution code for Js he doesn't most likely because you can directly increase the count, instead of using the stack structure

---