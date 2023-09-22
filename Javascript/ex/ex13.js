//Avendo un array a1 e un array a2 popolati a piacere, creo un altro array chiamato result,
//dove mettero' il risultato della computazione.

let arr1 = [1, 2, 3]
let arr2 = [3, 4, 5]
let arrResult = []


for (let i = 0; i < arr1.length; i++) {

    if (arr1.indexOf(arr2[i]) == - 1) {
        arrResult.push(arr2[i])
    }
    if (arr2.indexOf(arr1[i]) == - 1) {
        arrResult.push(arr1[i])
    }
}

console.log(arrResult) 
