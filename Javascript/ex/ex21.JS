function variazione(string) {
    let arr = []
    for (let i = 0; i < string.length; i++) {
        for (let j = i; j < string.length; j++) {
            arr.push(subString(string, i, j))
        }
    }
    return arr
}

function subString(string, i, j){
    let string2 = ''
    for(let y = i; y <= j; y++){
        let current = string[y]
        string2 += current
    }
    return string2
}

console.log(variazione('ciao'))