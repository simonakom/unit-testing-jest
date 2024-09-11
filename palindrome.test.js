const isPalindrome = require('./palindrome');

test('checks if "kayak" is a palindrome', () => {
    expect(isPalindrome("kayak")).toBe(true);
});

test('checks if "hello" is a palindrome', () => {
    expect(isPalindrome("hello")).toBe(false);
});

test('checks if 12321 is a palindrome', () => {
    expect(isPalindrome(12321)).toBe(true);
});

test('checks if 12345 is a palindrome', () => {
    expect(isPalindrome(12345)).toBe(false);
});

test('checks if an empty string is a palindrome', () => {
    expect(isPalindrome("")).toBe(true);
});

test('checks if a single character "a" is a palindrome', () => {
    expect(isPalindrome("a")).toBe(true);
});

test('checks if null string is not a palindrome', () => {
    expect(isPalindrome(null)).toBe(false);
});