// scrivere una funzione chiamata addUpFromNumber che 
// dato un numero positivo in input
// ritorni la somma di tutti i numeri da 1 fino al numero passato

// ad esempio: con 4 ritornerebbe 1 + 2 + 3 + 4 = 10

function addUpFromNumber(n) {
    if (n < 0) return 'Not Possible';
    if (n == 0) return

    let ac = 0

    while (n >= 1) {
        ac = ac + n
        n--
    }

    return ac
}

console.log(addUpFromNumber(5))