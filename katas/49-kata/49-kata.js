class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent( nums , k ) {
    let sorting = [];
    let result = [];
    let processingObj = {};
    nums.forEach( element => {
        if ( !processingObj[element] ){
            processingObj[element] = 0;
            processingObj[element]++
        } else if (processingObj[element]) {
            processingObj[element]++
        };
    });

    for ( let num1 in processingObj ){
        sorting.push([ num1 , processingObj[num1]]);
    };

    sorting.sort(( a , b )=>{
        return b[1]-a[1];
    })

    for ( let index = 0 ; index < k ; index++ ) {
        result.push(sorting[index][0]);
    }

    return result
};
}
