const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (Array.isArray(arr)) {
    let arr1 = arr
      .filter((el) => typeof el === "string")
      .map((el) => {
        el = el.replace(/\s+/g, "").toUpperCase();
        return el[0];
      });
    return arr1.sort().join("");
  }
  return false;
};
