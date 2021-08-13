const { reverseBlocks } = require("./Ex_05.js");

test("Reversing blocks of an array", () => {
  expect(reverseBlocks([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toStrictEqual([
    2, 1, 0, 5, 4, 3, 8, 7, 6, 9,
  ]);
});
