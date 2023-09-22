//Scrivere una funzione che, dato in ingresso un array di oggetti così strutturato:
// trovare il valore della prima chiave -> se == null sostuire per 'unknow'
// iterar su tutti i valore de type e aggionare ogni uno
//se il type e’ “boolean” deve aggiornare usando false
//se il type e’ “string” deve aggiornare usando stringa vuota
//se il type e’ “number” deve aggiornare usando 0
//se il type e’ “array” deve aggiornare usando array vuoto
//se il type e’ “object” deve aggiornare usando oggetto vuoto

let obj = [
    {
        'maggiorenne': null,
        type: true
    },
    {
        'nome': null,
        type: "string"
    },
    {
        'cognome': "Rossi",
        type: 2
    },
    {
        'cognome': "Rossi",
        type: [1, 2, 3]
    },
    {
        cognome: "Rossi",
        type: { obj: 'test' }
    }
]

function mapObject(obj) {

    for (let i = 0; i < obj.length; i++) {

        let keys = Object.keys(obj[i])
        if (obj[i][keys[0]] == null) {obj[i][keys[0]] = 'unknown' }

        if (typeof obj[i].type == 'boolean') { obj[i].type = false }
        else if (typeof obj[i].type == 'string') { obj[i].type = '' }
        else if (typeof obj[i].type == 'number') { obj[i].type = 0 }
        else if (obj[i].type instanceof Array) { obj[i].type = [] }
        else { obj[i].type = {} }

    }
    return obj
}

console.log(mapObject(obj))

