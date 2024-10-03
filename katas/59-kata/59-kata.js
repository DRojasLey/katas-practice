class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a, b) => a - b);
        const result =[]
        for (let index = 0; index < nums.length; index++) {
            if (index > 0 && nums[index] == nums[index - 1]){
                continue;
            }
            let leftPointer = index + 1;
            let rightPointer = nums.length - 1;
            while (leftPointer < rightPointer){
                const sum = nums[index] + nums[leftPointer] + nums[rightPointer]
                if (sum > 0){
                    rightPointer--;
                }
                if (sum < 0){
                    leftPointer++;
                }
                if (sum === 0){
                    result.push([nums[index], nums[leftPointer], nums[rightPointer]])
                    leftPointer++;
                    while (nums[leftPointer] == nums[leftPointer - 1] && leftPointer < rightPointer){
                        leftPointer++;
                    }
                }
            }
        }
        return result;
    };
}