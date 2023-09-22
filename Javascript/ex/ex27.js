// scrivere una funzione chiamata arraySwap che 
// dato un array di interi
// ritorni un nuovo array dove, partendo da 0, il valore alla posizione i
// e il valore alla posizione i + 1 sono invertiti di posizione

// ad esempio: con [5, 6] ritornerebbe [6, 5]
// ad esempio: con [1, 2, 3, 4] ritornerebbe [2, 1, 4, 3]
// ad esempio: con [7, 8, 9] ritornerebbe [8, 7, 9] perche' il 9 non puo'
// essere scambiato con niente siccome l'array e' terminato

function arraySwap(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] !== undefined) {
            newArr.push(arr[i + 1], arr[i])
            i++
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(arraySwap([1, 2, 3, 4, 5]))