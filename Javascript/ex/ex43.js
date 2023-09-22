// scrivere una funzione chiamata isPalindrome che 
// data una parola 
// ritorni true se e' palindroma, false altrimenti

// ad esempio con "ciao" ritorna false
// ad esempio con "abba" ritorna true
// ad esempio con "ada" ritorna true
// ad esempio con "1234321" ritorna true
// ad esempio con "123321" ritorna true
// ad esempio con "123421" ritorna false

function isPalindrome(str){
    if(str.length == 0) return

    let strback = str.split('').reverse().join('')
    
    if(str[0] !== strback[0]){
        return false
    }
    return true
}

console.log(isPalindrome('123421'))