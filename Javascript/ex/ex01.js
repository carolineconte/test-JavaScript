//3) scrivere una funzione che prende in ingresso un array di numeri e ritorna un array che 
//alla posizione 0 ha il numero piu' piccolo presente nell'array, e alla posizione 1 il numero 
//piu' grande presente nell'array

// const maxValue = values.reduce(function(prev, current) { 
// 	return prev > current ? prev : current; 
// });


// function minMax(arr) {
//     let max = 0
//     let min = 0
//     for (let i = 0; i < arr.length; i++) {
//         let current = arr[i]
        
//         if (current > max) {
//             max = current
//             i++ 
//         }
//         if (current < min) {
//             min = current
//             i++ 
//         }
//     }
//     return [min, max]
// }

// console.log(minMax([1, 2, 3]))


function minMax(arr) {
    let max = 0
    let min = 0
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        
        if (current > max) {
            max = current
            i++ 
        }
        if (current < min) {
            min = current
            i++ 
        }
    }
    return [min, max]
}

console.log(minMax([1, 2, 3]))