const getSquaresForRow = (rowNum, numRows, squares) => {
    let result = [];
    const startingIndex = (rowNum * numRows) - 1;
    let count = 0;
    for(let i = startingIndex; i > -1; i--){
        if(count === numRows) break
        result.push(squares[i]);
        count++;
    }
    return result;
}

const getSquaresForCol = (colNum, numCols, squares) => {
    let result = [];
    let count = 0;
    let startingIndex = colNum - 1;
    for(let i = 0; i < numCols; i++){
        result.push(squares[startingIndex + (numCols * count)]);
        count++;
    }
    return result;
}

// 0  1  2  3
// 4  5  6  7
// 8  9  10 11
// 12 13 14 15 

const getSquaresDiagonalDownRight = (numCols, squares) => {
    let result = [];
    let count = 0;
    let startingIndex = 0;
    for(let i = 0; i < numCols; i++){
        let constant = count > 0 ? 1 : 0
        result.push(squares[startingIndex + ((numCols * count) + (constant * i))]);
        count++;
    }
    return result;
}

const getSquaresDiagonalUpRight = (numCols, squares) => {
    let result = [];
    let count = 0;
    let startingIndex = numCols - 1;
    for(let i = 0; i < numCols; i++){
        result.push(squares[startingIndex + ((numCols - 1) * count)]);
        count++;
    }
    return result;
}

export const checkForRewards = (board) => {
    const numRowCols = Math.sqrt(board.numSquares);
    let rewardOptions = [
        // 'wholeBoard' is account for later
        'row1',
        'row2',
        'row3',
        'row4',
        'row5',
        'column1',
        'column2',
        'column3',
        'column4',
        'column5',
        'diagonalUpRight',
        'diagonalDownRight',
    ]
    const squares = board.squares;

    // narrow down to reward options that are available, based on board size
    rewardOptions = rewardOptions.filter(reward => reward.slice(-1) <= numRowCols || reward.slice(-1).match(/[a-z]/i));

    // organize all the rows, cols, diagonals
    let divisions = [
        {
            name: 'wholeBoard',
            squares: squares,
        }
    ]

    rewardOptions.map(reward => {
        if(reward.substring(0, 3) === 'row'){
            divisions.push({
                    name: reward,
                    squares: getSquaresForRow(reward.slice(-1), numRowCols, squares),
                }
            );
        } else if(reward.substring(0, 3) === 'col'){
            divisions.push(
                {
                    name: reward,
                    squares: getSquaresForCol(reward.slice(-1), numRowCols, squares)
                }
            );
        } else if (reward === 'diagonalUpRight') {
            divisions.push(
                {
                    name: reward,
                    squares: getSquaresDiagonalUpRight(numRowCols, squares),
                }
            );
        } else {
            divisions.push(
                {
                    name: reward,
                    squares: getSquaresDiagonalDownRight(numRowCols, squares),
                }
            );
        }
    })

    // get the divisions for which every task is complete
    let completed = [];
    divisions.map(division => {
        let complete = true;
        division.squares.map(square => {
            if(!square.complete){
                complete = false;
            }
        })
        if(complete){
            completed.push(division.name);
        }
    })
    return completed;

}