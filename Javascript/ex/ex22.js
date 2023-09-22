// Scrivere una funzione che riceva in ingresso tre stringhe:
// ● la prima sara’ un testo
// ● la seconda sara’ una parola che andra’ cercata nel testo
// ● la terza sara’ la parola da sostituire al posto della seconda

// La funzione deve quindi produrre lo stesso effetto che si ottiene quando si fa find and replace di una parola in un testo.
// Si assuma che:
// ● la seconda e la terza stringa siano sempre e solo una parola, mai una frase, quindi non ci saranno spazi
// ● sulle stringhe non esistano i metodi indexOf, replace, e similari, dovete scrivere voi l’algoritmo
// ● la seconda e la terza parola non necessariamente devono avere lo stesso numero di caratteri
// Ricordate che le stringhe in JavaScript sono trattate in modo simile agli array. La funzione deve ritornare la nuova stringa aggiornata.


//PseudoCodice
/// separar palavras da frase para comparar
//// crio uma variavel para a palavra corrente e uma para a nova frase
/// se igual a nova palavra faço a substituicao
/// se nao: adiciono a nova frase

let text = "Let's study programming? study programming! programming, programming... programming/react?"
console.log(founAndReplace(text, 'programming', 'JavaScript'))

function founAndReplace(text, word, newWord) {
    let currentWord = '';
    let newText = '';

    for (let i = 0; i < text.length; i++) {
        currentWord += (text[i])
         if (currentWord == word) {
            newText = newText + newWord
            currentWord = ''
        }
        if (text[i] == ' ') {
            newText += currentWord
            currentWord = ''
        }
    }
    return newText + currentWord
}
