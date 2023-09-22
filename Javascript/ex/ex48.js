// scrivere una funzione chiamata reduceString
// che prende in ingresso una funzione reducer e una stringa
// la funzione reducer deve essere invocata con due argomenti: il primo
// e' il totale corrente, il secondo e' l'i-esima lettera, come valore
// di ritorno da il nuovo totale
// la funzione reduceString deve ritornare il totale ottenuto chiamando
// la funzione reducer su ogni lettera della stringa

// ad esempio per l => l == "a" ? 1 : 2 e "abc" deve ritornare 5
// ad esempio per l => (l == "1" || l == "2") ? 0 : 1 e "12123" deve ritornare 1