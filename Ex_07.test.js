const { longestRunOfTwoNumbers } = require("./Ex_07.js");

test("Largest run", () => {
  expect(longestRunOfTwoNumbers("1212223311212223")).toBe("1121222");
  expect(longestRunOfTwoNumbers("111")).toBe("111");
  expect(longestRunOfTwoNumbers("1234567899")).toBe("899");
  expect(longestRunOfTwoNumbers("12111111111")).toBe("12111111111");
  expect(longestRunOfTwoNumbers("000009834")).toBe("000009");
});
