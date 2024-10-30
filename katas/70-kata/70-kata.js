class Solution {
    /**
    * @param {number[][]} matrix
    * @param {number} target
    * @return {boolean}
    */
    searchMatrix(matrix, target) {
        let lastRow = matrix[matrix.length - 1]
        if (!(target <= lastRow[lastRow.length -1])) return false;
        for (const row of matrix) {
            let lastElementInRow = row[row.length - 1];
            if (!(target <= lastElementInRow)) continue;
            if (row.includes(target)) return true;
        }
        return false;     
        }
    
    }