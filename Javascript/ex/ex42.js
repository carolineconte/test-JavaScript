// scrivere una funzione chiamata firstSum
// che prende in ingresso un array e un numero,
// la funzione deve ritornare la prima coppia di numeri la cui 
// somma e' pari al numero passato come argomento

// suggerimento: per ritornare una coppia di numeri utilizzate
// un array, chiaramente a lunghezza 2

function firstSum(arr, n) {
    let coppia = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + arr[i + 1] == n) {
            coppia[0] = arr[i]
            coppia[1] = arr[i + 1]
            return coppia
        }
    }

}

console.log(firstSum([1, 2, 3, 4, 1], 5))