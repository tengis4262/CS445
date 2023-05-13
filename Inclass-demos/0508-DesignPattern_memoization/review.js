function fibonacci(n) {
    if (n == 0 || n == 1) {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let label = 'fib';
console.time(label);
console.log(fibonacci(5));
console.timeEnd(label);