// scrivere una funzione chiamata findLongestSubstring
// che prende in ingresso una stringa
// la funzione deve ritornare la stringa piu' lunga che non ha 
// ripetizioni

// ad esempio per "abcabcbb" deve ritornare "abc"
// ad esempio per "bbbbb" deve ritornare "b"
// ad esempio per "pwwkew" deve ritornare "wke"


function findLongestSubstring(str) {
    let current = ''
    let longest = ''

    for (let i = 0; i < str.length; i++) {
        current += str[i];

        if(current.indexOf(str[i]) || str.indexOf(str[i + 1]) == undefined){
            if(current.length > longest.length){
                longest = current
                current = ''
                i = longest.lastIndexOf(str[i])
            }
        }
    }

    return longest
}

console.log(findLongestSubstring("pwwkewabk"))