function calcExpenses(str) {
    const arr = str.split(' ');
    const res = [];

    let nomeRepartoAtual = null;
    let somaAtual = 0;

    for (const indice of arr) {

        let valor = parseFloat(indice);
        if (!isNaN(valor)) { // evitar que o primeiro crie o objeto com valor zero
            somaAtual += valor;

        } else {
            if (nomeRepartoAtual !== null) {
                res.push({ reparto: nomeRepartoAtual, spesa: somaAtual });
            }
            nomeRepartoAtual = indice;
            somaAtual = 0;
        }

    }
    res.push({ reparto: nomeRepartoAtual, spesa: somaAtual });


    return res;
}

const stringaSpese = 'cancellaria 100 200 200 SERVIZI 200 VENDITE 50 SHOPPING 300';
let completo = calcExpenses(stringaSpese);
console.log(completo)

let biggest = completo.reduce(function (atual, sucessivo) {
    if (atual.spesa > sucessivo.spesa) return atual
    return sucessivo
})

console.log(` REPARTO CON LE SPESE PIÙ ALTE ${biggest.reparto}`)

