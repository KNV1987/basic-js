const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let steps = Math.pow(2, disksNumber) - 1;
  let sec = Math.floor(steps / (turnsSpeed / 3600));
  return { turns: steps, seconds: sec };
};
