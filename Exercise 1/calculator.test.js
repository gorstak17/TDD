const myFunctions = require("./calculator");

test("addition of 2 and 3 to equal 5", () => {
  expect(myFunctions.addCalculator(2, 3)).toBe(5);
});

test("substraction of 5 and 3 is equal to 2", () => {
  expect(myFunctions.addSubstraction(5, 3)).toBe(2);
});

test("Multiplication of 5 and 3 is equal to 15", () => {
  expect(myFunctions.addMultiplication(5, 3)).toBe(15);
});

test("Dividing of 15 and 3 is equal to 5", () => {
  expect(myFunctions.addDividing(15, 3)).toBe(5);
});
const numbers = [1, 2, 3];

test("array of few numbers", () => {
  expect(myFunctions.addFewNumbers(numbers)).toBe(6);
});

test("Handling error that will occur when one of function parameters is type of string", () => {
  expect(() => {
    myFunctions.addMultiplication("string", 2);
  }).toThrow("ErrorByReference");
});
