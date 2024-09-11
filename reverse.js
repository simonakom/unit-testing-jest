function reverseString(string) {
    if (string == null){
        throw Error ("string is null")
    }
    return string.split('').reverse().join('');
}
module.exports = reverseString;


// const original = "Hello";
// const reverse = reverseString(original);
// console.log(reverse);  