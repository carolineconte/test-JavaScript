//Scrivere una funzione che dato in ingresso un array di array contenente solo numeri,
//"appiattisca" la struttura dati ritornando un array di numeri
//[[1,2,3],[4,5,6],[7,8,9]] -> [1,2,3,4,5,6,7,8,9]

function extrai(arr) {
    let newArr = [];
    for (value of arr) {
        if (typeof value !== 'object') return 'Not possible'
        for (let i = 0; i < value.length; i++) {
            newArr.push(value[i])
        }
    }
    return newArr
}
//console.log(extrai([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

// scrivere una funzione chiamata largestSwap
// che prende in ingresso un numero di due cifre,
// ritorna true se e' il piu' grande dei due possibili scambi di
// cifre, false altrimenti

// ad esempio per 27 deve ritornare false perche' posso invertire 
// le due cifre per ottere 72
// ad esempio per 43 deve ritornare true perche' 34 sarebbe minore

function largestSwap(n) {
    if (n < 10 || n > 99) return 'Invalid input'

    let str = n.toString()

    return (str[1] < str[0])
}
//console.log(largestSwap(27))


// Consideriamo un operaio che compia due sole attività: lavorare e riposare.
//Ogni volta che ha un turno di riposo, gli dedica una unità di tempo; quando esegue un turno di lavoro,
//se ha appena riposato impiega una unità di tempo, altrimenti impiega il doppio del turno precedente.

//Indicando con L e R le due attività, i turni della sequenza hanno durata
//l = R L L R L L L L R R L L R
//r = 1 1 2 1 1 2 4 8 1 1 1 2 1

//Scrivere un programma che, data una sequenza di attività come parametri sulla linea di comando,
//emetta nel flusso di uscita il numero di unità di tempo corrispondenti alla sua durata complessiva.

//Eseguendo soluzione RLLRLLLLRRLLR il programma emette 26 nel flusso di uscita; eseguendo
//soluzione L L L L L L L L L L L L L L L L L L L L L L L L L L L L L L L L L L L L L L L L il programma emette 1099511627775 nel flusso di uscita.

function lavoro(str) {
    let giornata = 0
    let temp = 1

    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'L' && str[i + 1] == 'L') {
            temp = temp * 2
        } else {
            temp = 1
        }
     
        giornata = giornata + temp
    }
    return giornata
}

//console.log(lavoro('RLLRLLLLRRLLR'))

//Data una sequenza di numeri interi diremo che due numeri dispari sono a distanza N se tra di loro si trovano
//esattamente N numeri pari.

//Ad esempio
//1 2 3 4 4 5 6 7 8 10 6 12 9
//la distanza tra 1 e 3 è 1, tra 3 e 5 è 2, tra 5 e 7 è 1 e tra 7 e 9 è 4.
//ritornare la distanza maxima
let a = '10 3 8 3 8 9 4 4 1 3 5 3 2 7 4 10 9 5 1 8 2 7 6 4 6 8 2 6 8 3 0'
a = a.split(' ')

function distanza(str) {
    let count = 0
    let max = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] % 2 == 0) {
            count++
        } else {
            if (count > max) {
                max = count
            }
            count = 0
        }
    }
    return max
}
console.log(distanza(a))