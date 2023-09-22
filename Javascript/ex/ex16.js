//B: date due variabili n e m stampare a video tutti i numeri inclusi nell'intervallo,
//notare che non e' detto che n < m

let m = 35; // variavel 1
let n = 40; // variavel 2

let max = m // Declara max e min padrao
let min = n

if (n > m) { // se n for maior troca os valores de max e min
    max = n
    min = m
}

while (min <= max) { //enquanto min for menor que o maximo sera estampado
    console.log(min)
    min++ //acrescenta 1 ao min a cada rodada
}
