//per la riga verticale su vscode: settings - editor: rulers - edit in settings.json - "editor.rulers": [] - aggiungere il numero della/e colonna/e nelle parentesi quadre

let chessboard = {
    a1: 'bT',
    b1: 'bC',
    c1: 'bA',
    d1: 'bRE',
    e1: 'bR',
    f1: 'bA',
    g1: 'bC',
    h1: 'bT',

    a2: 'bP',
    b2: 'bP',
    c2: 'bP',
    d2: 'bP',
    e2: 'bP',
    f2: 'bP',
    g2: 'bP',
    h2: 'bP',

    a3: '',
    b3: '',
    c3: '',
    d3: '',
    e3: '',
    f3: '',
    g3: '',
    h3: '',

    a4: '',
    b4: '',
    c4: '',
    d4: '',
    e4: '',
    f4: '',
    g4: '',
    h4: '',

    a5: '',
    b5: '',
    c5: '',
    d5: '',
    e5: '',
    f5: '',
    g5: '',
    h5: '',

    a6: '',
    b6: '',
    c6: '',
    d6: '',
    e6: '',
    f6: '',
    g6: '',
    h6: '',

    a7: 'nP',
    b7: 'nP',
    c7: 'nP',
    d7: 'nP',
    e7: 'nP',
    f7: 'nP',
    g7: 'nP',
    h7: 'nP',

    a8: 'nT',
    b8: 'nC',
    c8: 'nA',
    d8: 'nRE',
    e8: 'nR',
    f8: 'nA',
    g8: 'nC',
    h8: 'nT',
}

//////////////////////////////////////////// Color
function getColor(chessboard, pos) {
    return chessboard[pos][0]
}

function isWhite(chessboard, pos) {
    let color = getColor(chessboard, pos)
    return color === 'b'
}

//////////////////////////////////////////// Vertically
function lookVertically(pos, direction) {
    let column = pos[0]
    let row = pos[1]
    row = Number(row) + direction
    return column + row
}

function lookUp(pos) { // dato pos
    return lookVertically(pos, 1)
}

function lookDown(pos) {
    return lookVertically(pos, -1)
}

//////////////////////////////////////////// Horizontally
function lookHorizontally(pos, direction) {
    let possibleColumns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    let rightColumn = possibleColumns.indexOf(pos[0]) + direction
    rightColumn = possibleColumns[rightColumn]

    let row = pos[1]

    return rightColumn + row
}
function lookRight(pos) {
    return lookHorizontally(pos, 1)
}

function lookLeft(pos) {
    return lookHorizontally(pos, -1)
}

//////////////////////////////////////////// Is it inside the board?
// Se pos[1] < 1 || > 8
// Se pos[0] undefined

function board(chessboard, pos) {
    let keys = Object.keys(chessboard)
    return keys.indexOf(pos) === -1
}

//////////////////////////////////////////// is Blocked?
//
function isOneStepFowardBlocked(chessboard, pos) {

}


//obiettivo e far muovere il pedone seconde le sue regole:
// * avanti di uno
// * avanti di due se e alla row di partenza
// * diagonale di uno a sx se li c'e' un nemico
// * diagonale di uno a dx se li c'e' un nemico
// * promozione

function legalPawMoves() {
    let legallooks = []

    // Verefica se c'e' un nemico in diag di uno, 
    /// se si, puo muoversi per catturale

    //verifica se c'e' un ostacolo avante:
    /// se si, non puo muoversi.
    /// se no, puo muoversi una casa avanti.
    /// Se é alla pos de inizio 
    //// agg due case avanti a legallooks

    // Se arriva alla rowa 1 o 8
    /// scegliamo casulamente tra torre, cavallo, alfiere,regina
    //// lo mettiamo al posto del pedone

}