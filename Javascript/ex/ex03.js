//2) scrivere una funzione che prende in ingresso un array di stringhe a, 
//la funzione deve ritornare una mappa dove ogni chiave corrisponde ad ogni 
//stringa in a e il valore corrisponde alla lunghezza della stringa

let arr = ['texto2', 'abcd', 'testo']

function cria(arr) {

    let newObj = {}
   
    for (let i = 0; i < arr.length; i++) {

        newObj[arr[i]] = (arr[i].length)

    }
    return newObj

}

console.log(cria(arr))
