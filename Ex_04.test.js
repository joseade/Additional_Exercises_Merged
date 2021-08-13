const { largeArray, largeArraySize } = require("./Ex_04.js");

test("Merge two sorted arrays", () => {
  expect(largeArray).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(largeArraySize).toBe(largeArray.length);
});
