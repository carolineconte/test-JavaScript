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

// ciclo tutte le celle 
// se nella cella currente < 2 vicini
function vivoOMorto(board) {
    for (let j = 0; j < board.length; j++) {
        let currente = board[j]
        for (let i = 0; i < currente.length; i++) {
            if (presenza([j, i], board) < 2) {
                board[j][i] = ''
            }
            if (presenza([j, i], board) == 3) {
                board[j][i] = 'x'
            }
        }
    }
    return board
}

function stampa(board) {

    for (let i = 0; i < board.length; i++) {
        let str = ''
        for (let j = 0; j < board.length; j++) {
            str += board[j][i]
            if( board[j][i] == ''){
                str += ' '
            }
        }
        console.log(str)
    }

}

stampa(board)