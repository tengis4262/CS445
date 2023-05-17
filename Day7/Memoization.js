const { getNameOfJSDocTypedef } = require("typescript");

let cache = new Map();

function fibonacci(n) {
    return (n == 0 || n == 1) ? n : fibonacci(n - 1) + fibonacci(n - 2)
}

function fac(n) {
    return (n <= 1) ? 1 : n * fac(n - 1)
}


console.log(fac(5))

console.log(fibonacci(6))
