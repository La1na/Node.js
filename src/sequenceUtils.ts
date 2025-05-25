export function generateFibonacci(limit: number): number[] {
  const result: number[] = [0, 1];
  while (result[result.length - 1] + result[result.length - 2] <= limit) {
    result.push(result[result.length - 1] + result[result.length - 2]);
  }
  return result;
}

export function generatePrimeNumbers(limit: number): number[] {
  const primes: number[] = [];
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }
  return primes;
}
