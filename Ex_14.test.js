const { findAreaOfBinaryMatrix } = require("./Ex_14.js");
const bMatrix = [
  [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
];

const secondBMatrix = [
  [1, 0, 0, 1, 1, 1],
  [1, 0, 1, 1, 0, 1],
  [0, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 1, 1],
];

const thirdBMatrix = [
  [1, 0, 0, 1, 1, 1],
  [1, 0, 1, 1, 0, 1],
  [0, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 1, 1],
];

const fourthBMatrix = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

test("Find greatest area in a binary matrix", () => {
  expect(findAreaOfBinaryMatrix(bMatrix)).toBe(22);
  expect(findAreaOfBinaryMatrix(secondBMatrix)).toBe(8);
  expect(findAreaOfBinaryMatrix(thirdBMatrix)).toBe(8);
  expect(findAreaOfBinaryMatrix(fourthBMatrix)).toBe(0);
});
