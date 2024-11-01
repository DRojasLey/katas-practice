class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let leftPointer = 0 ;
        let rightPointer = nums.length -1 ;
        let resolution = nums[0];

        while (leftPointer <= rightPointer) {
            if (nums[leftPointer]<= nums[rightPointer]
                resolution = Math.min(resolution, nums[leftPointer])
                break;
            )

            let midPointer = leftPointer + Math.floor((rightPointer - leftPointer)/2);
            resolution = Math.min(resolution, nums[midPointer]);
            if (nums[midPointer>= nums [leftPointer]]) {
                leftPointer = midPointer + 1 ;
            } else {
                rightPointer = midPointer - 1;
            }
        }
        return resolution ;
    }
}