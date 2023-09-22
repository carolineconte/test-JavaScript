
// function reduce(ac, val) {
//     if(val % 2 === 0) ac.push(val);
//     return ac
// }

// function loop(n) {
//     if(n == 0) return
//     console.log(n)
//     n--
//     loop(n)
// };
// loop(10)


// //La somma di tutti gli elementi di un array espressa con una definizione ricorsiva e': 
// function sum(arr, i) {
//     if (i == arr.length) return 0 

//     return arr[i] + sum(arr, i + 1)
// }

// console.log(sum([1, 2, 3, 4, 5], 0))

//palindrome

function isPalindrome(arr, sx, dx) {
    if (sx >= dx) return true

    return (arr[sx] == arr[dx]) && isPalindrome(arr, sx + 1, dx - 1)

}

console.log(isPalindrome([], 0, 0)) // true
console.log(isPalindrome([1, 2, 2, 1], 0, 3)) // true
console.log(isPalindrome([1, 2, 3, 1, 1], 0, 4)) // false
