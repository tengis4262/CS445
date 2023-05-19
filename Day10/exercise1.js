const isPrime = num => new Promise((resolve, reject) => {
    setTimeout(function() {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++)
            if (num % i === 0) reject({ prime: false });
        resolve({ prime: num > 1 });
    }, 500);
});

const isPrimeAsync = async num => {
    try {
        const result = await isPrime(num);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};


console.log('start');
isPrimeAsync(7)
console.log('end');

// Output:
// start
// end
// { prime: true }