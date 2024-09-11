function isPalindrome(word) {
    if (word == null) {
        return false
    }
    const formattedInput = word.toString().toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedInput = formattedInput.split('').reverse().join('');
    return formattedInput === reversedInput;
}
module.exports = isPalindrome;

// console.log(isPalindrome("kayak"));                         
// console.log(isPalindrome("hello"));     