const { printTree } = require("./Ex_10.js");
const bTree = "(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";

test("Traversing nodes in prefix, infix, and postfix order", () => {
  expect(printTree(bTree)).toBe("D-B-E-A-H-F-I-C-G-J");
  expect(printTree(bTree, "prefix")).toBe("A-B-D-E-C-F-H-I-G-J");
  expect(printTree(bTree, "postfix")).toBe("D-E-B-H-I-F-J-G-C-A");
});
