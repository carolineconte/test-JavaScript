//(ex4) 012345678910 109876543210 012345678910

for (let i = 0; i < 3; i++) { // define quantidade de vezes que a linha sera estampada
    let num = "";
    if (i % 2 == 0) { // linhas pares crescentes
        for (let start = 0; start <= 10; start++) { 
            num = num + start
        }
    } else { // linhas impares decrescente
        for (let k = 10; k >= 0; k--) {
            num = num + k
        }
    }
    console.log(num);
}