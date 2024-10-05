class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxVolume = 0;

        for (let leftBar = 0; leftBar < heights.length; leftBar++) {
            for (let rightBar = leftBar + 1; rightBar < heights.length; rightBar++) {
                const containerHeight = Math.min(heights[leftBar], heights[rightBar]);
                const containerWidth = rightBar - leftBar;
                const currentVolume = containerHeight * containerWidth;
                maxVolume = Math.max(maxVolume, currentVolume);
            }
        }

        return maxVolume;
    }
}