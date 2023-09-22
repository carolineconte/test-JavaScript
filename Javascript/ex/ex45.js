// scrivere una funzione chiamata mergeSortedArrays che 
// dati due array ordinati in ingresso
// ritorni un unico array ordinato

// non si puo' usare il metodo sort

// ad esempio per [1,2,3] e [4,5] ritorna [1,2,3,4,5]
//ad esempio per [5,9] e [1,6,7] ritorna [1,5,6,7,9]

function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;

    // Continua finché ci sono elementi in entrambe le array
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // Aggiungi eventuali elementi rimanenti dalle due array
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

// Esempio di utilizzo:
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const mergedResult = mergeSortedArrays(arr1, arr2);
console.log(mergedResult); // Dovrebbe restituire [1, 2, 3, 4, 5]

