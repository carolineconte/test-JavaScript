// EXERC 2
//Scrivere del codice che data una stringa, stampi a video la stringa piu' lunga che non ha ripetizioni


let string = "abcabbcdab"
let longest = ""
let current = ""

for (let i = 0; i < string.length; i++) {
    if (current.indexOf(string[i]) == -1) { // ciclo que cria a frase ate a repeticao
        current += string[i]
        //console.log(current)
    }
    if (current.length > longest.length) { // ciclo que compara a frase corrente com a maior ate o momento
        //console.log(current.length)
        longest = current
        i = current.lastIndexOf(string[i]) + 1 // i volta para o ultimo indice da frase corrente 
        current = "" // corrente resetada
    }
}
console.log(`bigest ${longest}`)