
// Defino as palavras de 'sanidade' em uma array para facilitar
// Crio uma funcao que percorre a string de entrada
//ciclo na frase formando cada palavra separadamente
/// se a palavra atual atende a qualquer quesito retorna true
// Verifico a existencia de sujeito em uma outra funcao

//🇮🇹
// Definisco le parole di 'sanità' in un array per facilitare
// Creo una funzione che attraversa la stringa di input
// Ciclo nella frase formando ogni parola separatamente
/// Se la parola attuale soddisfa uno qualsiasi dei criteri, restituisce true
// Controllo l'esistenza di un soggetto in un'altra funzione

let subjects = ['lui', 'lei', 'egli', 'ella'];
let healthyWords = ['church', 'mare'];
let point = [',', '.', '!', '?', ':', ';', '-', '~'];
let end = ['are', 'ere', 'ire', '?!?']

function subject(str, arr) {
    let currentWord = ''

    for (let i = 0; i < str.length; i++) {
        currentWord += str[i]
        if (arr.indexOf(currentWord) > -1) { return false }
        if (str[i] == ' ') {
            currentWord = ''
        }
    }
    return true;
}


function mentalHealth(str) {
    let currentWord = ''
    let newStr = ''
    str = str.toLowerCase()
    
    for (let i = 0; i < str.length; i++) {

        currentWord += str[i]
        if (healthyWords.indexOf(currentWord) > -1) {
            return false
        }

        if (currentWord == 'Cthulhu') {
            return true
        }

        if (str[i] == ' ') {
            if (end.indexOf(currentWord.slice(-3)) > -1 && end.indexOf(str.slice(-3))) {
                return true
            }
            newStr += currentWord
            currentWord = ''
        }
    }

    if (point.indexOf(str[0]) > -1) { return true }
    if (subject(str, subjects)) { return true }

    return false
}

console.log(mentalHealth('Andare a rimirare'))


/*
Esempi di stringhe pazze:
● .Quando guardi a lungo nell’abisso, l’abisso ti guarda dentro.
● Andare a rimirare
Esempi di stringhe non pazze:
● Lui e’ pazzo.
● ~ Pensava sempre al mare come a la mar, come lo chiamano in spagnolo quando lo
amano ~
● ~ Papa’, come sta Church? ~
*/