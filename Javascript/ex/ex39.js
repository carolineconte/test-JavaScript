// scrivere una funzione chiamata chessboard
// che prende in ingresso un numero l,
// la funzione deve ritornare una matrice quadrata lunga l 
// contenente '#' e ' ', opportunamente alternati, che rappresentino 
// una scacchiera di lato l 

// la prima casella deve essere un '#'
function line(n) {
    let linec = []
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            linec.push('#')
        } else {
            linec.push(' ')
        }
    }
    return linec
}



function chessboard(n) {

    let scacchiera = []

    for (let i = 0; i <= n; i++) {

        scacchiera.push(line(n))

    }
    return scacchiera
}

console.log(chessboard(5))