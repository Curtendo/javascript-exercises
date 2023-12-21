const palindromes = function (string) {

    string = string.replace(/\W|_/g, '').toLowerCase();
    const reverseString = string.split("").reverse().join("");
    return (string === reverseString);
};

// Do not edit below this line
module.exports = palindromes;
