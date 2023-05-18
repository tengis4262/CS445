const isPrime = num => {
    return new Promise((resolve, reject) => {
      if (num < 2) {
        resolve(false);
      }
      
      for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) {
          resolve(false);
        }
      }
  
      resolve(true);
    });
  };
  
  console.log('start');
  isPrime(7)
    .then(res => console.log({ prime: res }))
    .catch(err => console.error(err));
  console.log('end');
  