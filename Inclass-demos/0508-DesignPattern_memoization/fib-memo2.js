const fib = (function () { 
    let cache = new Map(); //global

    function fibonacci(n) {
        if (cache.has(n)) {
            return cache.get(n);
        } else {
            if (n == 0 || n == 1) {
                cache.set(n, n);
                return n;
            }
            let temp = fibonacci(n - 1) + fibonacci(n - 2);
            cache.set(n, temp);
            return temp;
        }
    }

    return fibonacci;
})();

//IEFE: Immediately Excutued Function Expression

let label2 = 'Memoization fib';
console.time(label2);
console.log(fib(55));
console.timeEnd(label2);
