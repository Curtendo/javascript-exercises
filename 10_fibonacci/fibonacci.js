const fibonacci = function(n) {
    if (n < 0)
        return "OOPS";
    
    let sum = 1;
    let prev1 = 1;
    let prev2 = 1;

    for (let i = 2; i < n; i++) {
        sum = prev1 + prev2;
        prev2 = prev1;
        prev1 = sum;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
