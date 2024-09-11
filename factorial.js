function factorial(n) {
    if (n < 0) {
        throw Error('Factorial is not defined for negative numbers');
    }
    if (n === 0) {
        // console.log(`1`); 
        return 1;        
    }

    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    // console.log(result); 
    return result;
}

module.exports = factorial;

factorial(4); 