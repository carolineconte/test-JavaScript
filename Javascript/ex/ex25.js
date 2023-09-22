// scrivere una funzione chiamata alfabetoStrambo che 
// data una stringa in ingresso
// ritorni una copia della stringa modificata come negli esempi

// ad esempio con "ciao a tutti" ritorna "ciaoro ara tuttiri"
// ad esempio con "ad esempio" ritorna "ad esempioro"
// ad esempio con "funziona solo con vocali alla fine" ritorna 
// "funzionara soloro con vocaliri allara finere"

function alfabetoStrambo(str) {
    let vog = ['a', 'e', 'i', 'o', 'u']
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        newStr += str[i];
       
        if (vog.indexOf(str[i]) > -1 && str[i + 1] == ' ' || vog.indexOf(str[i]) > -1 && str[i + 1] == undefined) {
            newStr += 'r'
            newStr += str[i]
        }
    }
    return newStr
}

console.log(alfabetoStrambo('funziona solo con vocali alla fine'))