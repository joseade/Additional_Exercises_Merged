const { longestRunOfTwoNumbers } = require("./Ex_07.js");

test("Largest run", () => {
  expect(longestRunOfTwoNumbers("1212223311212223")).toBe("1121222");
  expect(longestRunOfTwoNumbers("111")).toBe("111");
});
