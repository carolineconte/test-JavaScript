//(ex1)da 0 a 10 per 3 volte
// for(let i = 0; i < 3; i++){
//     for(let start = 0; start <= 10; start++){
//         console.log(start);
//     }
// }

//(ex2)
let k = 0
let str = ''

for (let i = 0; i <= 10; i++) {

    str += i
    if (i == 10 && k < 3) {
    
        i = 0
        k++
       
    }

}

console.log(str)




