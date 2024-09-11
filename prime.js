function isPrime(n) {
    if (n <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

module.exports = isPrime;

// console.log(isPrime('1')); // false
// console.log(isPrime('2')); // true
// console.log(isPrime('3')); // true
// console.log(isPrime('4')); // false
// console.log(isPrime('5')); // true
// console.log(isPrime('6')); // false
// console.log(isPrime('7')); // true
// console.log(isPrime('8')); // false
// console.log(isPrime('9')); // false
// console.log(isPrime('10')); // false