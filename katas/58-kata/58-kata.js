function twoSum(numbers, target) {
    //first pointer
    let left = 0;
    //second pointer
    let right = numbers.length - 1;
    while (left < right) {
        //sum each number in the current indexes to compare it 
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            //return tne indexes if correct
            return [left + 1, right + 1];
        } else if (sum < target) {
            //move the left pointer if the sum is less than the expected target
            left++;
        } else {
            //move the right pointer if the result if bigger than the target
            right--;
        }
    }
}