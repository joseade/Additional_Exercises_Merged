const { findAreaOfBinaryMatrix } = require("./Ex_14.js");
const bMatrix = [
  [1, 0, 0, 1, 1, 1],
  [1, 0, 1, 1, 0, 1],
  [0, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 1, 1],
];

test("Find greatest area in a binary matrix", () => {
  expect(findAreaOfBinaryMatrix(bMatrix)).toBe(8);
});
