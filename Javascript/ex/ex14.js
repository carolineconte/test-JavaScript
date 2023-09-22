//soma pari e dispari
let arr = [1, 3, 4, 0, 7, 8, 12]
let par = 0
let impar = 0
let arrSize = arr.length

for (let i = 0; i < arrSize; i++) {
    if (arr[i] % 2 == 0) {
        par++
    } else {
        impar++
    }
}
console.log("par = " + par)
console.log("impar = " + impar)

// //agg in una variabile per pari e dispari

// let pari = []
// let dispari = []

// for (let k = 0; k< arrSize; k++) {
//     if (arr[k] % 2 == 0) {
//         pari.push(arr[k])
//     } else {
//         dispari.push(arr[k])
//     }
// }

// console.log("par = " + pari)
// console.log("impar = " + dispari)

//let arr = [1, 2, 3, 2, 3]


// 1)
//
// let i = 0
// let j = arr.length - 1
// let palindrome = true
// while (i <= j) {
//   if (arr[i] != arr[j]) {
//     palindrome = false
//     break
//   }

//   i++
//   j--
// }

// console.log(palindrome)

// 2)
//
// let startingFromLeft = []
// for (let i = 0; i < arr.length; i++) {
//   startingFromLeft.push(arr[i])
// }

// let startingFromRight = []
// for (let i = arr.length - 1; i >= 0; i--) {
//   startingFromRight.push(arr[i])
// }

// let palindrome = true
// for (i = 0; i < arr.length; i++) {
//   if (startingFromLeft[i] !== startingFromRight[i]) {
//     palindrome = false
//   }
// }
//
// console.log(palindrome)

// 2e)palindrome
//
// let startingFromLeft = []
// let startingFromRight = []
// for (let i = 0; i < arr.length; i++) {
//   startingFromLeft.push(arr[i])
//   startingFromRight.unshift(arr[i])
// }

// let palindrome = true
// for (i = 0; i < arr.length; i++) {
//   if (startingFromLeft[i] !== startingFromRight[i]) {
//     palindrome = false
//   }
// }

//console.log(palindrome)

// 3)
//
// let startingFromLeft = ""
// for (let i = 0; i < arr.length; i++) {
//   startingFromLeft += arr[i]
// }

// let startingFromRight = ""
// for (let i = arr.length - 1; i >= 0; i--) {
//   startingFromRight += arr[i]
// }

// console.log(startingFromLeft === startingFromRight)

// 4)
//
// let sx = arr.join('')
// let dx = arr.reverse().join('')
// console.log(sx === dx)