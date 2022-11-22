const num1 = prompt("Insira um número");
const num2 = prompt("Insira outro número");
let res

res = num1 > num2
console.log("num1>num2:" +res)

res = num1 == num2
console.log("num1 == num2:" +res)

res = num1 % num2 === 0
console.log("num1 % num2 === 0:" +res)

res = num2 % num1 ===0
console.log("num2 % num1 ===0:" +res)