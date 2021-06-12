/**
 * A prime number is a whole number greater than 1 with exactly 
 * two divisors: 1 and itself. For example, 2 is a prime number 
 * because it is only divisible by 1 and 2. In contrast, 
 * 4 is not prime since it is divisible by 1, 2 and 4.
 * 
 * Rewrite sumPrimes so it returns the sum of all prime numbers 
 * that are less than or equal to num.
 */

function sumPrimes(num) {
  let sumOfAllPrimes = 0;
  for (let i = 2; i <= num; i++) {
    isPrime(i) && (sumOfAllPrimes += i);
  }
  return sumOfAllPrimes;
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

sumPrimes(10);
// should return a number
// should return 17, 1,2,3,5,7,

sumPrimes(977);
// should return 73156