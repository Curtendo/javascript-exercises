const add = function(a, b) {
  return (a + b);
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(numbers) {
  // let total = 0;
	// numbers.forEach(number => total += number);
  // return total;
  return (numbers.reduce((total, number) => total + number, 0));
};

const multiply = function(numbers) {
  // let total = 1;
  // for (let i = 0; i < numbers.length; i ++) {
  //   total *= numbers[i];
  // }
  // return total;
  return (numbers.reduce((product, number) => product * number, 1));
};

const power = function(a, b) {
	return (a ** b);
};

const factorial = function(num) {
  let total = 1;
	for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
