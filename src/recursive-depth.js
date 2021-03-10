const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, acc = 1) {
    let count = acc;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let res = this.calculateDepth(arr[i], acc + 1);
        if (res > count) count = res;
      }
    }
    return count;
  }
};
