function topKFrequent(nums, k) {
    let result = [];
    const sorted = nums.sort().reverse();

    result.push(sorted[0]);
    for (let index = 0; result.length < k ; index++) {
        const element = sorted[index];
        if (element != sorted[0]) {
            result.push(element);
        }
    }
    return result
};


//This initial solution does not work because it will fail when the most repeated numbers have lower values than the less repeated.

//We need to instead look for a way to count the frequency, not the value of the numbers