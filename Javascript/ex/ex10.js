// 3) scrivere una funzione che accetta due funzioni a e b, 
// queste due funzioni ritornano a loro volta dei numeri, non ne conoscete pero' l'implementazione,
//la vostra funziona deve ritornare "a" se il numero ritornato da a e' maggiore di di quello ritornano da b, "b" altrimenti

// Funzione a - Random
let a = Math.random()
console.log(`numero a = ${a}`)


// Funzione b - Random
let b = Math.random()
console.log(`numero b = ${b}`)

let resp = (function stampa(a, b) {
    if (a > b) return resp = 'a'
    return resp = 'b'
});

console.log(resp(a, b)) // funcao resp recebe os numers de a e b