// scrivere una funzione chiamata algebra che 
// dato un array di interi
// ritorni il prodotto degli elementi di indice pari a cui vengono
// sottratti tutti gli elementi di indice dispari

// ad esempio: con [1, 2, 3, 4] ritornerebbe 3 - 6 = -3

function algebra(arr) {

    let prod = 1
    let soma = 0
    for (let i = 0; i < arr.length; i++) {

        if (i % 2 == 0) { prod = prod * arr[i] }
        else{soma += arr[i]}
    }
    return `${prod} - ${soma} = ${prod-soma}`
}

console.log(algebra([1, 2, 3, 4]))


