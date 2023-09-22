// scrivere una funzione chiamata filterString
// che prende in ingresso una funzione e una stringa

// la funzione filterString deve ritornare una nuova stringa
// le cui lettere sono presenti solo se 
// l'applicazione della funzione alla i-esima lettera
// restituisce true

// ad esempio per l => l == "a" e "abc" deve 
// ritornare "a"
// ad esempio per l => l == "c" e "bbbbb" deve 
// ritornare ""

// ad esempio per l => l != "c"e "cabbac"  deve 
// ritornare "abba"

function filterString(str,func ) {
    let filteredResult = '';
  
    for (let i = 0; i < str.length; i++) {
       
      if (func(str[i])) {
        filteredResult += str[i];
      }
    }
  
    return filteredResult;
  }
  
  // Esempi di utilizzo:
  console.log(filterString('abc',(l) => l !== 'a' ));      // Dovrebbe restituire 'a'
  