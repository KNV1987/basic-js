const CustomError = require("../extensions/custom-error");

module.exports = function repeater(
  str,
  {
    addition = "",
    additionRepeatTimes,
    repeatTimes = 1,
    separator = "+",
    additionSeparator = "|",
  } = {}
) {
  str = "" + str;
  addition = "" + addition;
  if (typeof addition !== "string") String(addition);
  if (repeatTimes) {
    let addiionStr = addition.split();
    for (let i = 1; i < additionRepeatTimes; i++) {
      addiionStr.push(addition);
    }
    addiionStr = addiionStr.join(additionSeparator);
    let strRepeat = str + addiionStr;
    str = strRepeat.split();
    for (let j = 1; j < repeatTimes; j++) {
      str.push(strRepeat);
    }

    return str.join(separator);
  }
  return str;
};
