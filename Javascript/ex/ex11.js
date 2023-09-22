//1) Data la seguente riga
//console.log(reduce([1, 2, 3], [], ?)
//Scrivere una funzione anonima al posto di ? che vi consenta di replicare il comportamento di map, 
//ad esempio moltiplicando per 2 tutti gli elementi dell'array, quindi in questo caso stamperebbe [2,4,6]


function reduce(arr, init, funx) { //🇧 funcao que recebe 3 valores - 🇮 funzione che riceve 3 valore

    for (let i = 0; i < arr.length; i++) { //🇧 Faz o cilo sobre o primeiro valor recebido - 🇮 cicla sul primo valore ricevuto
        init.push(funx(arr[i], 2)) //🇧 push de todos os valores gerados ativando a funcao anonima - 🇮pusha i resultati su secondo valore attivando una seconda funzione anonima
    }
    return init //🇧 ao final do cilo retorna o segundo valor recebido - 🇮 al fine retorna il secondo valore
}



console.log(`Soluzione 2: ${reduce([1, 2, 3], [],function (ind, n) { //🇧 funcao anonima que recebe  2 valores - 🇮 funzione anonima che assume 2 valore
    return ind * n
} )}`)


