const repeatString = function(string, num) {
    // Create variable result to return finished string
    let result = "";
    
    if (num < 0) {
        result = "ERROR"; 
    }

    // Loop number of times
    for (let i = 0; i < num; i++) {
        // Add string to result
        result += string;
    }
    
    // Return result
    return result;
};

// Do not edit below this line
module.exports = repeatString;
