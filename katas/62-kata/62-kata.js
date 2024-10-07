class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const characterSet = new Set;
        let left = 0;
        let result = 0;
        for (let right = 0; right < s.length; right++) {
            while (characterSet.has(s[right])){
                characterSet.delete(s[left])
                left++
            }
            characterSet.add(s[right])
            result = Math.max(result, right - left + 1 )
        }
        return result

    }
}
