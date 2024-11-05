# 74th Kata -- Time Based Key-Value Store


by *[NeetCode](https://neetcode.io/problems/time-based-key-value-store)*


## Task

### Time Based Key-Value Store


Implement a time-based key-value data structure that supports:

Storing multiple values for the same key at specified time stamps
Retrieving the key's value at a specified timestamp
Implement the TimeMap class:

* `TimeMap()` Initializes the object.
* `void set(String key, String value, int timestamp)` Stores the key `key` with the value `value` at the given time timestamp.
* `String get(String key, int timestamp)` Returns the most recent value of `key` if `set` was previously called on it and the most recent timestamp for that key `prev_timestamp` is less than or equal to the given timestamp (`prev_timestamp <= timestamp`). If there are no values, it returns `""`.

Note: For all calls to `set`, the timestamps are in strictly increasing order.

Constraints:

* `1 <= key.length, value.length <= 100`
* `key` and `value` only include lowercase English letters and digits.
* `1 <= timestamp <= 1000`

## Test Examples

Example 1:

```js
Input:
["TimeMap", "set", ["alice", "happy", 1], "get", ["alice", 1], "get", ["alice", 2], "set", ["alice", "sad", 3], "get", ["alice", 3]]

Output:
[null, null, "happy", "happy", null, "sad"]

Explanation:
TimeMap timeMap = new TimeMap();
timeMap.set("alice", "happy", 1);  // store the key "alice" and value "happy" along with timestamp = 1.
timeMap.get("alice", 1);           // return "happy"
timeMap.get("alice", 2);           // return "happy", there is no value stored for timestamp 2, thus we return the value at timestamp 1.
timeMap.set("alice", "sad", 3);    // store the key "alice" and value "sad" along with timestamp = 3.
timeMap.get("alice", 3);           // return "sad"
```


## Notes

Not able to find any solution within the time limit this kata will be revisited


## Results

```js

Accepted

Passed test cases: 29 / 29

You have successfully completed this problem!
```

## Solution:
> by NeetCode at *[YouTube](https://youtu.be/fu2cD_6E8Hw)*

```js
class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        //stores the key value pair
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {

        //this method uses binary search to retrieve the queries in the most efficient way
        const values = this.keyStore.get(key) || [];
        let left = 0;
        let right = values.length - 1;
        let result = '';

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (values[mid][0] <= timestamp) {
                result = values[mid][1];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
}
```

## Notes about the Solution:

There are multiple methods, this one I like the most as it uses arrays

---