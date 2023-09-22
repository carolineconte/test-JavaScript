// diminuir o numero de entrada ate dar zero

function convertToRoman(num) {

    const simboliRomani = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const valoriCorrispondenti = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    let risultato = "";

    let i = 0
    for (let rom of simboliRomani) {
        while (num >= valoriCorrispondenti[i]) {
            num -= valoriCorrispondenti[i];
            risultato += rom;
        }
        i++
    }
    return risultato;
}

// Esempi di utilizzo:
console.log(convertToRoman(2));    // "II"
console.log(convertToRoman(12));   // "XII"
console.log(convertToRoman(27));   // "XXVII"
console.log(convertToRoman(4));    // "IV"
console.log(convertToRoman(9));    // "IX"
console.log(convertToRoman(3999)); // "MMCMXCIX"
