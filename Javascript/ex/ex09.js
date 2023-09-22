// 2)scrivere una funzione che accetta un array arr e una funzione fn, 
//la funzione applica fn a ogni elemento avente indice pari di arr e pusha il risultato dentro un nuovo array

function map(arr, fn) { //declaracao da funcao map
    let res = [] // novo array - nuovo array
    for (let i = 0; i < arr.length; i++) {//ciclo para selecionar apenas indices pares - ciclo per selezionare solo gli indici pari
        if (i % 2 === 0) { 
            res.push(fn(arr[i], 5)) //pusha o resultado dentro do array novo - pusha il risultato dentro il nuovo array
        }
    }
    return res // retorna o novo array depois do ciclo completo - dopo che il ciclo è stato completato ritorna il nuovo array 
}





console.log(map([1, 2, 3, 10, 15], function(n,b) { return n * b} ))// funcao que aceita um array e outra funcao - funzione che accetta un array arr e una funzione fn

