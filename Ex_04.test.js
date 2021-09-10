const { mergeArrays } = require("./Ex_04.js");

test("Merge two sorted arrays", () => {
  let largeArray = [1, 3, 5, 7, 9].concat(new Array(5));
  let smallArray = [0, 2, 4, 6, 8];
  let largeArraySize = largeArray.length;
  mergeArrays(largeArray, smallArray);
  expect(largeArray).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(largeArraySize).toBe(largeArray.length);

  largeArray = [1, 3, 5, 7, 9].concat(new Array(3));
  smallArray = [-1, 2, 6];
  largeArraySize = largeArray.length;
  mergeArrays(largeArray, smallArray);
  expect(largeArray).toStrictEqual([-1, 1, 2, 3, 5, 6, 7, 9]);
  expect(largeArraySize).toBe(largeArray.length);

  largeArray = [0, 100].concat(new Array(3));
  smallArray = [-13, 8, 90];
  largeArraySize = largeArray.length;
  mergeArrays(largeArray, smallArray);
  expect(largeArray).toStrictEqual([-13, 0, 8, 90, 100]);
  expect(largeArraySize).toBe(largeArray.length);
});
