//1) scrivere una funzione che prende in ingresso due array a e b, 
//la funzione deve ritornare un array che contenga gli elementi che sono
//solo in a e solo in b



let arr1 = [1, 2, 3, 4, 5, 6, 10, 12,]; //1 2 4 6 12
let arr2 = [10, 3, 5, 25]; //25

let e = (arr1.length + arr2.length)
console.log(e)

let arr3 = function (arr1, arr2) {

    let arrResult = []
    for (let i = 0; i < arr2.length; i++) {

        if (!(arr1.indexOf(arr2[i]) > - 1)) {
            arrResult.push(arr2[i])
        }
    }
    for (let i = 0; i < arr1.length; i++) {
        if (!(arr2.indexOf(arr1[i]) > - 1)) {
            arrResult.push(arr1[i])
        }
    }
    return arrResult
}

console.log(arr3(arr1, arr2))