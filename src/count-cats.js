const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let arr1 = [].concat(...arr);
  return arr1.reduce((acc, el) => {
    if (el === "^^") acc += 1;
    return acc;
  }, 0);
};
