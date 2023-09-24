let board = [
    ['x', 'x', '',],
    ['', 'x', '',],
    ['x', '', 'x',]
]


function isOut(cella, board) {
    let x = cella[0]
    let y = cella[1]

    return x < 0 || x >= board.length || y < 0 || y >= board.length
}

function presenza(cella, board) {
    let x = cella[0]
    let y = cella[1]
    let count = 0
    if (!isOut([x - 1, y - 1], board) && board[x - 1][y - 1] == 'x') {
        count += 1
    }
    if (!isOut([x - 1, y], board) && board[x - 1][y] == 'x') {
        count += 1
    }
    if (!isOut([x - 1, y + 1], board) && board[x - 1][y + 1] == 'x') {
        count += 1
    }
    if (!isOut([x, y + 1], board) && board[x][y + 1] == 'x') {
        count += 1
    }
    if (!isOut([x + 1, y + 1], board) && board[x + 1][y + 1] == 'x') {
        count += 1
    }
    if (!isOut([x + 1, y], board) && board[x + 1][y] == 'x') {
        count += 1
    }
    if (!isOut([x + 1, y - 1], board) && board[x + 1][y - 1] == 'x') {
        count += 1
    }
    if (!isOut([x, y - 1], board) && board[x][y - 1] == 'x') {
        count += 1
    }

    return count
}

console.log(presenza([0, 1], board))

function vivoOMorto(board) {
    for(let x of board){
        for (let y of x) {
            if (presenza([x, y], board) < 2 || presenza([x, y], board) > 3) {
                board[x][y] = ''
            }
            if (presenza([x, y], board) == 3) {
                board[x][y] = 'x'
            }

        }
    }
    return board
}

function stampa(board) {

    for (let i = 0; i < board.length; i++) {
        let str = ''
        for (let x = 0; x < board.length; x++) {
            str += board[x][i]
            if( board[x][i] == ''){
                str += ' '
            }
        }
        console.log(str)
    }

}

stampa(board)