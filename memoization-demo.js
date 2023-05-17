function factorial(n, cache = {}) {
    if (n in cache) {
      return cache[n];
    }
    if (n === 0) {
      return 1;
    }
    const result = n * factorial(n - 1, cache);
    cache[n] = result;
    return result;
  }
  
  console.log(factorial(10)); // Output: 3628800
  


  function multiply(a, b, cache = {}) {
    const key = `${a}:${b}`;
    if (key in cache) {
      return cache[key];
    }
    const result = a * b;
    cache[key] = result;
    return result;
  }
  
  console.log(multiply(2, 3)); // Output: 6
  console.log(multiply(2, 3)); // Output: 6 (cached result)


  function fibonacci(n, cache = {}) {
    if (n in cache) {
      return cache[n];
    }
    if (n <= 2) {
      return 1;
    }
    const result = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
    cache[n] = result;
    return result;
  }
  
  console.log(fibonacci(40)); // Output: 102334155
  