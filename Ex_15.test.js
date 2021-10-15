const { findIndexOfBalancing } = require("./Ex_15.js");

const firstArray = [1, 2, 3, 4, 9, 9, 2, 7, 10, 13];
const secondArray = [1, 3, 9];
const thirdArray = [1, 5, 2, 2, 1, 1];

test("Finding the index of an array that balances the left and right sum", () => {
  expect(findIndexOfBalancing(firstArray)).toBe(6);
  expect(findIndexOfBalancing(secondArray)).toBe(-1);
  expect(findIndexOfBalancing(thirdArray)).toBe(1);
});
