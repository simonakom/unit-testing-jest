const reverseString = require('./reverse');

test('reverses the string "Hello" to "olleH"', () => {
    expect(reverseString('Hello')).toBe('olleH');
});

test('reverses the string "JavaScript" to "tpircSavaJ"', () => {
    expect(reverseString('JavaScript')).toBe('tpircSavaJ');
});

test('reverses an empty string to an empty string', () => {
    expect(reverseString('')).toBe('');
});

test('reverses a single character string "A" to "A"', () => {
    expect(reverseString('A')).toBe('A');
});

test('null string should throw an error', () => {
    expect(() => {reverseString(null);}).toThrow();
});
