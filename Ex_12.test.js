const { Node, isSymmetric } = require("./Ex_12.js");

const tree = new Node(
  1,
  new Node(2, new Node(3), new Node(4, new Node(5))),
  new Node(2, new Node(4, null, new Node(5)), new Node(3))
);
test("Determine if a tree is a symmetric", () => {
  expect(isSymmetric(tree)).toBeTruthy();
});
