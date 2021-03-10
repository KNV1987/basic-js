const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(str) {
  let n0 = Number(str);
  let t;
  if (typeof str === "string" && !isNaN(n0) && n0 > 0 && n0 < 15.1) {
    let k = 0.693 / HALF_LIFE_PERIOD;
    t = Math.ceil(Math.log(MODERN_ACTIVITY / n0) / k);
    return t;
  }
  return false;
};
