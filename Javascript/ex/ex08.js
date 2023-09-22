//(ex5) quadrato de numeri

let max = 8; // numero maximo
let maxInt = max; // conserva o maximo
let min = 1; // vaai ate 1
let num = "";


for (let i = min; i <= max; i++) {
    if (i == min) { // primeiro ciclo i tera valor igual ao minimo cria-se primeira linha sequencia crescente
        for (let start = min; start <= max; start++) {
            num = num + start;
        }
        console.log(num)
    }

    if (i == max) { // quando i alcanca o maximo cria-se a linha em ordem decrescente
        num = ""
        for (let end = max; end >= min; end--) {
            num = num + end;
        }
        console.log(num)
    }

    if (i > min && i < max) { // quando i e diferente de max e min cria-se as linhas intermediarias
        let row = "" + i; // linha sera zerada e adicionado o i 
        for (let j = 0; j < (max - 2); j++) { // adiciona ' ' de zero a (max  2) pois o primeiro e o ultimo espacos nao sao vazios
            row = row + " ";
        }
        row = row + (maxInt-i+1) // depois de adicionados os espacos adicinamos decrecente 
        console.log(row) 
    }
}