let arrDuplicato = [1, 2, 3, 3, 5, 6, 6];
let arrCerto = []

for (let i = 0; i < arrDuplicato.length; i++) {

    if (arrCerto.indexOf(arrDuplicato[i]) == - 1) {
        arrCerto.push(arrDuplicato[i])
    }

}

console.log(arrCerto)