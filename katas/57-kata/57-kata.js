class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        board.forEach(subArray => {
            let testingArray = [];
            const testingSet = new Set;
            subArray.forEach(element => {
                if (element !== '.') testingArray.push(element)
            });
            testingArray.forEach(number =>{
                testingSet.add(number)
            })
            if (testingSet.size !== testingArray.length) return false ;
        });
        // Up top this point everything works
    }
}
