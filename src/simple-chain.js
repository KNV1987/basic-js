const CustomError = require("../extensions/custom-error");

const chainMaker = {
  str: [],
  getLength() {
    return this.str.length;
  },
  addLink(value) {
    value = String(value);
    this.str.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position % 10 !== 0 ||
      !this.str[position]
    )
      throw new Error();
    this.str.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.str.reverse();
    return this;
  },
  finishChain() {
    let res = this.str.join("~~");
    this.str = [];
    return res;
  },
};

module.exports = chainMaker;
