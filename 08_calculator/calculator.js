const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(nums) {
  return nums.reduce((acc, num) => acc + num, 0);
};

const multiply = function(nums) {
  return nums.reduce((acc, num) => acc * num, 1);
};

const power = function(num, pow) {
  let res = 1;
  for (let i = 0; i < pow; i++) {
    res *= num;
  }
  return res;
};

const factorial = function(num) {
  let res = 1;
  for (let i = 2; i <= num; i++) {
    res *= i;
  }
  return res;
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
