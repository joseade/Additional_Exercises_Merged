const { flattenIterative, flattenRecursive } = require("./Ex_09.js");

test("Flatten an array", () => {
  expect(
    flattenIterative([1, 2, 3, [4, 5, [6, [[7]], 8]], [9, 10]])
  ).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  expect(
    flattenRecursive([1, 2, 3, [4, 5, [6, [[7]], 8]], [9, 10]])
  ).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
