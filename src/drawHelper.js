
const isDraw = (gameBoard, currentMove, currentPlayer) => {
    let board = [...gameBoard]
    board[currentMove]=currentPlayer;

    let count =  board.reduce((n,x) => n + (x === 0), 0);
    console.log('count', count)

    return count === 0;
}

export default isDraw