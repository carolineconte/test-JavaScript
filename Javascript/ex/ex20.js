let stringa = 'Ciao'
let arr = []

function strToArray(str) {
    if (str.length == 0) return

    let str2 = ''
    let arrCurrent = []

    for (let i = 0; i < str.length; i++) {
        str2 += str[i]
        arrCurrent.push(str2)

        if (i + 1 == str.length) {
            arr.push(arrCurrent)
        }
    }

    strToArray(str.slice(1))
    return arr
}
console.log(strToArray(stringa))
//fazer um ciclo acrescentando em uma array 
//no ciclo seguinte -> str - primeira letra

