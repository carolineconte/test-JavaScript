
// Defino as palavras de 'sanidade' em uma array para facilitar
///crio uma funcao que verifica se existe alguma delas
///adiciono como primeiro if na funcao principal
////se existe retorno falso imediatamente
///// se nao continuo a funcao principal
// Crio uma funcao que percorre a string de entrada
//ciclo na frase formando cada palavra separadamente
/// se a palavra atual atende a qualquer quesito retorna true
// Verifico a existencia de sujeito em uma outra funcao

//🇮🇹
// Definisco le parole di 'sanità' in un array per facilitare
// Creo una funzione che verifica se una di esse esiste
// Aggiungo come primo if nella funzione principale
// Se una di esse esiste, restituisco subito falso
// Altrimenti, continuo con la funzione principale
// Verifico l'esistenza di un soggetto in un'altra funzione
// Creo una funzione che attraversa la stringa di input
// Ciclo nella frase formando ogni parola separatamente
// Se la parola attuale soddisfa uno qualsiasi dei criteri, restituisce true


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

function isHealthy(str, arr) {
    let currentWord = ''

    for (let i = 0; i < str.length; i++) {
        currentWord += str[i]
        if (arr.indexOf(currentWord) > -1) { return true }
        if (str[i] == ' ') {
            currentWord = ''
        }
    }
    return false;
}


function mentalHealth(str) {
    let currentWord = ''
    let newStr = ''
    str = str.toLowerCase()

    if(isHealthy(str,healthyWords)) return false
    if (subject(str, subjects)) { return true }
    if (point.indexOf(str[0]) > -1) { return true }

    for (let i = 0; i < str.length; i++) {

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

    return false
}

console.log(mentalHealth('Papa’, come sta Church?'))


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