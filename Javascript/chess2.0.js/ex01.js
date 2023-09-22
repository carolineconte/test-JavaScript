function analizzaSpese(stringaSpese) {
    // Suddividiamo la stringa in righe
    const righe = stringaSpese.split('\n');

    // Inizializziamo variabili per il massimo e il minimo importo e i rispettivi nomi di reparto
    let massimoImporto = -Infinity;
    let minimoImporto = Infinity;
    let nomeRepartoMassimo = '';
    let nomeRepartoMinimo = '';

    // Inizializziamo una variabile per l'importo totale
    let importoTotale = 0;

    // Cicliamo attraverso le righe
    for (const riga of righe) {
        const elementi = riga.split(' ');

        // Ignoriamo le righe vuote
        if (elementi.length === 0) continue;

        // Estraiamo il nome del reparto e l'importo dalla riga
        const nomeReparto = elementi[0];
        const importo = parseFloat(elementi[1]);

        // Aggiorniamo l'importo totale
        importoTotale += importo;

        // Verifichiamo se l'importo attuale è il massimo o il minimo
        if (importo > massimoImporto) {
            massimoImporto = importo;
            nomeRepartoMassimo = nomeReparto;
        }

        if (importo < minimoImporto) {
            minimoImporto = importo;
            nomeRepartoMinimo = nomeReparto;
        }
    }

    // Creiamo un oggetto con i risultati
    const risultati = {
        repartoMassimo: nomeRepartoMassimo,
        importoMassimo: massimoImporto,
        repartoMinimo: nomeRepartoMinimo,
        importoMinimo: minimoImporto,
        importoTotale: importoTotale,
    };

    return risultati;
}

// Esempio di utilizzo:
const stringaSpese = `
    Reparto1 100
    Reparto2 200
    Reparto3 50
    Reparto4 300
`;

const risultati = analizzaSpese(stringaSpese);
console.log(risultati);