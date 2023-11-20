const repeatString = function(str, rep) {
  if (rep < 0) return "ERROR";
  let repeatedStr = ""
  for (let i = 0; i < rep; i++) {
    repeatedStr += str;
  }
  return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
