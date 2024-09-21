class Solution {
    /**
    * @param {number[]} nums
    * @return {number[]}
    */
    productExceptSelf(nums) {
        let processing = [];
        let result = []
        for (let index = 0; index < nums.length; index++) {
            result[index] = 1;
            processing = nums.filter((number, i) => i !== index)
            for (let j = 0; j < processing.length; j++) {
                const processingElement = processing[j]
                result[index] *= processingElement;
            }
        }
        return result;
    }
}
