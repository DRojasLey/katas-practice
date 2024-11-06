# 75th Kata -- Reverse a Linked List


by *[NeetCode](https://neetcode.io/problems/reverse-a-linked-list)*


## Task

### Reverse a Linked List


Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.


Constraints:

* `0 <= The length of the list <= 1000.`
* `-1000 <= Node.val <= 1000`


## Test Examples

Exxample 1

```js
Input: head = [0,1,2,3]

Output: [3,2,1,0]
```
Exxample 2

```js
Input: head = []

Output: []

```

## Notes

I understand the concept of linked list from this execise, but the implementation in code and how it is applied is not clear



## Results

```js
Accepted

Passed test cases: 25 / 25

You have successfully completed this problem!
```

## Solution:
> by Andy Gala at *[YouTube](https://youtu.be/DT3KOnLWR_o)*

```js

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        // this is for the edge case head []
        if (!head) return null ;
 
        let newHead = head ;
        if (head.next) {
            newHead = this.reverseList(head.next);
            head.next.next = head;
        }
        head.next = null

        return newHead;
    }



}

```

## Notes about the Solution:

This is the recursive solution, very interesting to follow up, however due to my lack of understanding of the linked list underlying functioning, I get lost, needs to be revisited


---