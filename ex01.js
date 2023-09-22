function podeSerConvertidoParaNumero(str) {
    const numero = parseFloat(str);
    return !isNaN(numero);
}


function analizzaSpese(str) {

    //let importoTotale = 0;
    let obj = {}
    let nomereparto = ''
    let importo = 0

    // Cicliamo attraverso le righe
    for (let value of str) {
        nomereparto += value

        if (value == ' ') {

            if (!podeSerConvertidoParaNumero(nomereparto)) {
                obj[nomereparto] = importo
                 importo = 0
            }
            if (podeSerConvertidoParaNumero(nomereparto)) {
                importo += parseFloat(nomereparto)
                console.log(importo)
            }

            nomereparto = ''
           
        }
    }

    return obj
}

// Esempio di utilizzo:
const stringaSpese = 'Reparto1 100 200 Reparto2 200 Reparto3 50 Reparto4 300';

console.log(analizzaSpese(stringaSpese));