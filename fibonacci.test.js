const fibonacci = require('./fibonacci');

test('generates first 0 Fibonacci numbers', () => {
    expect(fibonacci(0)).toBe('');
});

test('throws an error for negative input', () => {
    expect(() => fibonacci(-5)).toThrow('n cannot be negative');
});

test('generates first 1 Fibonacci number', () => {
    expect(fibonacci(1)).toBe('0');
});

test('generates first 2 Fibonacci numbers', () => {
    expect(fibonacci(2)).toBe('0, 1');
});

test('generates first 5 Fibonacci numbers', () => {
    expect(fibonacci(5)).toBe('0, 1, 1, 2, 3');
});

test('generates first 10 Fibonacci numbers', () => {
    expect(fibonacci(10)).toBe('0, 1, 1, 2, 3, 5, 8, 13, 21, 34');
});