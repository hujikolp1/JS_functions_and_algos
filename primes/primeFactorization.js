//======================================================================================================
// method 1 in O(N) time

function primeFactors(n) {
    const factors = [];
    let divisor = 2;
  
    while (n >= 2) {
      if (n % divisor === 0) {
        factors.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
    return factors;
  }
  
  const randomNumber = Math.floor(Math.random() * 10000);
  console.log('method 1 -> ', randomNumber)
  console.log(primeFactors(randomNumber).join(' '))
  console.log('-----------')

//======================================================================================================
// method 2 in O(N^2) time 

  function getPrimeFactors(integer) {
    const primeArray = [];
    let isPrime;
  
    // Find divisors starting with 2
    for (let i = 2; i <= integer; i++) {
      if (integer % i !== 0) continue;
  
      // Check if the divisor is a prime number
      for (let j = 2; j <= i / 2; j++) {
        isPrime = i % j !== 0;
      }
  
      if (!isPrime) continue;
      // if the divisor is prime, divide integer with the number and store it in the array
      integer /= i
      primeArray.push(i);
    }
  
    return primeArray;
  }
  
  console.log('method 2 -> ', randomNumber)
  console.log(getPrimeFactors(randomNumber).join(', '));
  console.log('-----------')

