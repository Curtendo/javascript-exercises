const sumAll = function(min, max) {
    // Check for non numbers
    if (typeof min !== "number" || typeof max !== "number") return "ERROR";
    // Check for negative numbers
    if (min < 0 || max < 0) return "ERROR";

    // Check if min is more than max and swap
    if (min > max) [min, max] = [max, min];

    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
