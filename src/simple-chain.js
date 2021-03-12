const CustomError = require("../extensions/custom-error");

const chainMaker = {
  str: [],
  addLink(value) {
    this.str.push(`( ${value} )`);
    return this;
  },
  getLength() {
    return this.str.length;
  },
  removeLink(position) {
    this.str.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.str.reverse();
    return this;
  },
  finishChain() {
    str = this.str.join("~~");
    delete this.str;
    return str;
  },
};

module.exports = chainMaker;
