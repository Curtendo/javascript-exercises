const convertToCelsius = function(f) {
  let c = (f - 32) / 1.8;
  if (Number.isInteger(c)) return c;
  else return +c.toFixed(1);
};

const convertToFahrenheit = function(c) {
  let f = (c * 1.8) + 32; 
  if (Number.isInteger(f)) return f;
  else return +f.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
