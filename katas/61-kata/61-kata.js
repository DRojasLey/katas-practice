class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (!height.length) {
            return 0;
        }
        let heightLength = height.length;
        let result = 0;

        for (let index = 0; index < heightLength; index++) {
            let leftMax = height[index];
            let rightMax = height[index];

            for (let j = 0; j < index; j++) {
                leftMax = Math.max(leftMax, height[j]);
            }
            for (let j = index + 1; j < heightLength; j++) {
                rightMax = Math.max(rightMax, height[j]);
            }

            result += Math.min(leftMax, rightMax) - height[index];
        }
        return result;
    }
}