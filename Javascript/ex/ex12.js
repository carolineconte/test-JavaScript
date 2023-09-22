// EXERC 1
//Dato un array, dire se e' omogeneo o meno, dove con omogeneo si intende un array composto da elementi tutti dello stesso tipo.
// typeof -> per verificare il tipo de elemento

let arr = ['Luiz', 1, [1, 2]]
//let arr = ['Luiz', 'Caroline', 'Eva']

let res = true

for (i = 1; i < arr.length; i++) {
    if (typeof (arr[0]) !== typeof (arr[i])) {
        res = false
        break;
    }
}

console.log(`l'array è omogeneo? ${res}`)


