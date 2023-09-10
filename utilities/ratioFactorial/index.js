let ratioOfTwoNumbers = require("../ratio/index");
let factorialOfNumbers = require("../factorial/index");

let ratioAndFactorial = (num1, num2, num3) => {
  let ratio = ratioOfTwoNumbers(num1, num2);
  let factorial = factorialOfNumbers(num3);
  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
