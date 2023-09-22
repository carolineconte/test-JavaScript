//C: date tre variabili a, b, c, stamparle in ordine dalla piu' grande alla piu' piccola

let a = 630;
let b = 450;
let c = 500;

if (a > b) {
    if (c > a) {
        console.log(c, a, b)
    }else if (b > c) {
        console.log(a, b, c)
    }else if (c > b) {
        console.log(a, c, b)
    }
}else if (b > a) {
    if (c > b) {
        console.log(c, b, a)
    }else if (a > c) {
        console.log(b, a, c)
    }else if (c > a) {
        console.log(b, c, a)
    }
}
