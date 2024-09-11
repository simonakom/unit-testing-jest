function fibonacci(n) {
    if (n < 0) throw Error("n cannot be negative");
    if (n === 0) return ''; 
    if (n === 1) return '0'; 

    let a = 0, b = 1;
    let fibonacciNumbers = [a, b];
    
    for (let i = 2; i < n; i++) {
        let next = a + b;
        fibonacciNumbers.push(next);
        a = b;
        b = next;
    }
    const result = fibonacciNumbers.join(', ');
    // console.log(result)
    return result;
}

module.exports = fibonacci;

fibonacci(3);
