const reverseString = function(string) {
    // Split the string at the last character and add to return variable
    let reverse = "";
    for (let cutPoint = -1; cutPoint >= -string.length; cutPoint--) {
        reverse += string.substr(cutPoint, 1);
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
