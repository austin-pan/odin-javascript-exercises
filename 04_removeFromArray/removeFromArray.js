const removeFromArray = function(list) {
  let toRemove = Array.from(arguments);
  return list.filter(x => !toRemove.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
