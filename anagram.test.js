const anagrams = require('./anagram');

test('should return true for anagrams with same case', () => {
    expect(anagrams('listen', 'silent')).toBe(true);
});

test('should return false for non-anagrams', () => {
    expect(anagrams('hello', 'world')).toBe(false);
});

test('should return true for anagrams with different cases', () => {
    expect(anagrams('Listen', 'Silent')).toBe(true);
});

test('should return true for anagrams with spaces and punctuation', () => {
    expect(anagrams('The Morse Code', 'Here come dots')).toBe(true);
});

test('should return true for anagrams of single letters', () => {
    expect(anagrams('a', 'A')).toBe(true);
});

test('should return false for one empty string and one non-empty string', () => {
    expect(anagrams('', 'test')).toBe(false);
});

test('should return true for empty strings', () => {
    expect(anagrams('', '')).toBe(true);
});