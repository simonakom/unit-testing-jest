
const factorial = require('./factorial');

test('calculates the factorial of 0', () => {
    expect(factorial(0)).toBe(1);
});

test('calculates the factorial of 1', () => {
    expect(factorial(1)).toBe(1);
});

test('calculates the factorial of 5', () => {
    expect(factorial(5)).toBe(120);
});

test('calculates the factorial of 10', () => {
    expect(factorial(10)).toBe(3628800);
});

test('throws error for negative input', () => {
    expect(() => factorial(-1)).toThrow('Factorial is not defined for negative numbers');
});