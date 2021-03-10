const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    let arr1 = [...arr];
    for (let id = 0; id < arr.length; id++) {
      if (arr1[id] === "--discard-next") {
        delete arr1[id];
        delete arr1[id + 1];
      }
      if (arr1[id] === "--discard-prev") {
        delete arr1[id];
        delete arr1[id - 1];
      }
      if (arr1[id] === "--double-next") {
        id !== arr1.length - 1
          ? arr1.splice(id, 1, arr1[id + 1])
          : arr1.splice(id, 1);
      }
      if (arr1[id] === "--double-prev") {
        id > 0 ? arr1.splice(id, 1, arr1[id - 1]) : arr1.splice(id, 1);
      }
    }
    return arr1.filter((el) => el !== undefined);
  }
  throw new Error();
};
