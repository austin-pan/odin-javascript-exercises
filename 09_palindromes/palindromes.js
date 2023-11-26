const palindromes = function (str) {
  str = str.replaceAll(/\W|\s/gi, "").toLowerCase();
  let reverse = str.split("").reverse().join("");
  return str === reverse;
};

// Do not edit below this line
module.exports = palindromes;
