/*D: date due variabili a e b che contengono numeri stampare a video la stringa risultante che si
ottiene sottraendo alternativamente 1 da a e 2 da b, fermandosi quando uno dei due arriva a 0. */

let a = 10; // variavel 1
let b = 20; // variavel 2

let line = "";

while (a >= 0 && b >= 0) { // enquanto qualquer variavel for maior que zero
    line += a; // acrescenta 'a' a line
    line += b; // acrescenta 'b' a line
    line += ' ' // acrescenta ' ' a line
    a-- // diminui 1 de 'a'
    b -= 2 // diminui 2 de 'b'
}

console.log(line) // estampa line depois do ciclo completo