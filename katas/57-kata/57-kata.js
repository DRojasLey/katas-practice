function isValidSudoku(board) {
    //create the tracking sets and fill them with zeroes using map arrow functions
    let rows = new Array(9).fill(0).map(() => new Set());
    let cols = new Array(9).fill(0).map(() => new Set());
    let boxes = new Array(9).fill(0).map(() => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let currentValue = board[i][j];

            if (currentValue === '.') continue;

            if (rows[i].has(currentValue)) return false;
            rows[i].add(currentValue);

            if (cols[j].has(currentValue)) return false;
            cols[j].add(currentValue);

            let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (boxes[boxIndex].has(currentValue)) return false;
            boxes[boxIndex].add(currentValue);
        }
    }

    return true;
}
