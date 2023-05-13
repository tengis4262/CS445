function fibonacci(n) {
    if (n == 0 || n == 1) {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}




let cache = new Map(); //global

function fibonacci2(n) {
    if(cache.has(n)){
        return cache.get(n);
    } else {
        if (n == 0 || n == 1) { 
            cache.set(n, n);
            return n;
        }
        let temp = fibonacci2(n - 1) + fibonacci2(n - 2);
        cache.set(n, temp);
        return temp;
    }
}

let label2 = 'Memoization fib';
console.time(label2);
console.log(fibonacci2(55));
console.timeEnd(label2);

let label = 'fib';
console.time(label);
console.log(fibonacci(55));
console.timeEnd(label);
