const { printTree } = require("./Ex_10.js");
const bTree = "(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";

test("Traversing nodes in prefix, infix, and postfix order", () => {
  expect(printTree(bTree)).toBe("D-B-E-A-H-F-I-C-G-J");
  expect(printTree(bTree, "prefix")).toBe("A-B-D-E-C-F-H-I-G-J");
  expect(printTree(bTree, "postfix")).toBe("D-E-B-H-I-F-J-G-C-A");
  expect(printTree("(AA9z)")).toBe("AA9z");
  expect(printTree("(AA9z,(F),(1j8))")).toBe("F-AA9z-1j8");
  expect(() => printTree("(A,,,)")).toThrow();
  expect(() => printTree("(A,,,)(")).toThrow();
  expect(() => printTree("(A))")).toThrow();
  expect(() => printTree("(A)--")).toThrow();
  expect(() => printTree("(A,(B),(C),(D))")).toThrow();
  expect(() => printTree("(((A")).toThrow();
});
