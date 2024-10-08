class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = new Map()
        let leftWindowPointer = 0;
        let result = 0;
        for (let rightWindowPointer = 0; rightWindowPointer < s.length; rightWindowPointer++) {
            let windowLength = rightWindowPointer - leftWindowPointer + 1 ;
            count.set(s[rightWindowPointer], (count.get(s[rightWindowPointer]) || 0) + 1 );

            if (windowLength - Math.max(...count.values())> k){
                count.set(s[leftWindowPointer], count.get(s[leftWindowPointer])-1)
                leftWindowPointer++
            }
            windowLength = rightWindowPointer - leftWindowPointer + 1 ;
            result = Math.max(result, windowLength);
        }
        return result;
    }
}
