function anagrams(word1, word2) {
    if (word1.length != word2.length) return false;
    return word1.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('') == word2.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('')
}

module.exports = anagrams;

// console.log(anagrams('listen', 'silent')); // true
// console.log(anagrams('hello', 'world'));   // false
// console.log(anagrams('The Morse Code', 'Here come dots')); // true 