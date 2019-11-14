import {
    GRID_SIZE,
    GAME_STATUS_IN_PROGRESS,
    GAME_STATUS_OVER_WIN,
    GAME_STATUS_OVER_LOSE,
    GAME_STATUS_OVER_DRAW,
} from './Constants';

const getNumberGridSlots = () => GRID_SIZE * GRID_SIZE;

export const formatGridData = moveHistory => {
    //This function transforms the data returned by the "moves" API into a format consumable by the token grid

    const gridElementCount = getNumberGridSlots();

    //create and initialize grid values
    const gridValues = new Array(gridElementCount);
    for (let i = 0; i < gridElementCount; i++ ) {
        gridValues[i] = 0;
    }

    if (Array.isArray(moveHistory)) {
        for (let i = 0; i < moveHistory.length; i++) {
            const playerNumber = (i % 2 === 0) ? 1 : 2;
            setTokenValue(gridValues, playerNumber, moveHistory[i])
        }
    }

    return gridValues;
}

const setTokenValue = (gridValues, playerNumber, column) => {
    // For a 4x4 grid the mappings are as follows:
    //  Column [0] = Indices 12, 8, 4, 0
    //  Column [1] = Indices 13, 9, 5, 1
    //  Column [2] = Indices 14, 10, 6, 2
    //  Column [3] = Indices 15, 11, 7, 3

    for (let i = getNumberGridSlots() - (GRID_SIZE - column); i >= 0; i -= GRID_SIZE) {
        if (gridValues[i] === 0) {
            gridValues[i] = playerNumber;
            return;
        }
    }
}

export const getGameStatus = (moveHistory = [], userPlayerNumber) => {
    if (!Array.isArray(moveHistory)) return;
    const gridCellCount = getNumberGridSlots();
    const gridData = formatGridData(moveHistory);

    const getRowLengthDown = (index, player, length) => {
        const nextCell = index + GRID_SIZE;
        if (nextCell >= gridCellCount) {
            return length; // if we're at the boundary of the grid then return the row length
        } else if (gridData[nextCell] !== player) {
            return length; // if the next cell doesn't match the inputted player, return the row length
        }
        return getRowLengthDown(nextCell, player, length + 1); //continue recursing in the same direction
    }

    const getRowLengthRight = (index, player, length) => {
        const nextCell = index + 1;
        if (nextCell % GRID_SIZE === 0) {
            return length; // if we're at the boundary of the grid then return the row length
        } else if (gridData[nextCell] !== player) {
            return length; // if the next cell doesn't match the inputted player, return the row length
        }
        return getRowLengthRight(nextCell, player, length + 1); //continue recursing in the same direction
    }

    const getRowLengthDiagonalRight = (index, player, length) => {
        const nextCell = index + GRID_SIZE + 1;
        if (nextCell % GRID_SIZE === 0 || nextCell >= gridCellCount) {
            return length; // if we're at the boundary of the grid then return the row length
        } else if (gridData[nextCell] !== player) {
            return length; // if the next cell doesn't match the inputted player, return the row length
        }
        return getRowLengthDiagonalRight(nextCell, player, length + 1); //continue recursing in the same direction
    }    
    
    const getRowLengthDiagonalLeft = (index, player, length) => {
        if (length >=3) { debugger; }
        const nextCell = index + GRID_SIZE - 1;
        if (nextCell % GRID_SIZE === 0 || nextCell >= gridCellCount) {
            return length; // if we're at the boundary of the grid then return the row length
        } else if (gridData[nextCell] !== player) {
            return length; // if the next cell doesn't match the inputted player, return the row length
        }
        return getRowLengthDiagonalLeft(nextCell, player, length + 1); //continue recursing in the same direction
    }

    for (let i = 0; i < gridCellCount; i++) {
        if (gridData[i] > 0) {

            if (getRowLengthDown(i, gridData[i], 1) === 4 ||
            getRowLengthRight(i, gridData[i], 1) === 4 ||
            getRowLengthDiagonalRight(i, gridData[i], 1) === 4 ||
            getRowLengthDiagonalLeft(i, gridData[i], 1) === 4) {
                return gridData[i] === userPlayerNumber ? GAME_STATUS_OVER_WIN : GAME_STATUS_OVER_LOSE;
            }
        }
    }

    if (moveHistory.length < gridCellCount) {
        return GAME_STATUS_IN_PROGRESS;
    } else {
        return GAME_STATUS_OVER_DRAW;
    }
};

export const isMoveValid = (moveHistory = [], columnNumber) => {
    //ensure the column isn't already full
    if (Array.isArray(moveHistory)) {
        const previousColumnMoves = moveHistory.filter(move => move === columnNumber);
        if (previousColumnMoves.length < GRID_SIZE) return true;
    }
    return false;
}
