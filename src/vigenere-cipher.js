const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(
    type = true,
    arrVin = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ]
  ) {
    this.type = type;
    this.arrVin = arrVin;
  }
  encrypt(str, key) {
    if (!str || !key) throw new Error();
    str = str.toUpperCase().split("");
    key = key.toUpperCase().split("");
    let res = [];
    for (let i = 0; i < str.length; i++) {
      if (key.length < str.length) {
        key.push(key[i % key.length]);
      }
    }
    for (let i = 0; i < str.length; i++) {
      if (this.arrVin.indexOf(str[i]) === -1) {
        key.splice(i, 0, str[i]);
        res.push(str[i]);
      } else {
        let strN;
        let keyN;
        for (let j = 0; j < this.arrVin.length; j++) {
          if (str[i] === this.arrVin[j]) {
            strN = j;
          }
          if (key[i] === this.arrVin[j]) {
            keyN = j;
          }
        }
        res.push(this.arrVin[(strN + keyN) % 26]);
      }
    }
    if (this.type) return res.join("");
    else return res.reverse().join("");
  }
  decrypt(str, key) {
    if (!str || !key) throw new Error();
    str = str.toUpperCase().split("");
    key = key.toUpperCase().split("");
    let res = [];
    for (let i = 0; i < str.length; i++) {
      if (key.length < str.length) {
        key.push(key[i % key.length]);
      }
    }
    for (let i = 0; i < str.length; i++) {
      if (this.arrVin.indexOf(str[i]) === -1) {
        key.splice(i, 0, str[i]);
        res.push(str[i]);
      } else {
        let strN;
        let keyN;
        for (let j = 0; j < this.arrVin.length; j++) {
          if (str[i] === this.arrVin[j]) {
            strN = j;
          }
          if (key[i] === this.arrVin[j]) {
            keyN = j;
          }
        }
        res.push(this.arrVin[(26 + strN - keyN) % 26]);
      }
    }
    if (this.type) return res.join("");
    else return res.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
