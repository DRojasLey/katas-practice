function comp(array1, array2) {
    if (array1 === null || array2 === null || array1.length !== array2.length) {
        return false;
    } else if (array1 && array2){
        let sortedOne = array1.sort((a,b)=>a-b)
        let sortedTwo = array2.map(num => Math.sqrt(num)).sort((a, b) => a - b);
        for (let i = 0; i < sortedOne.length; i++) {
            if (sortedOne[i] !== sortedTwo[i]) {
                return false;
            }
        }
        return true;
    }
}