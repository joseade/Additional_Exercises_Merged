class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const tree = new Node(
  1,
  new Node(2, new Node(3), new Node(4, new Node(5))),
  new Node(2, new Node(4, null, new Node(5)), new Node(3))
);

const isSymmetric = function (root) {
  if (root === null) return true;
  const helper = function (leftSub, rightSub) {
    if (leftSub === null && rightSub === null) return true;
    if (leftSub === null || rightSub === null) return false;
    return (
      leftSub.value === rightSub.value &&
      helper(leftSub.left, rightSub.right) &&
      helper(leftSub.right, rightSub.left)
    );
  };
  return helper(root.left, root.right);
};

console.log(isSymmetric(tree));

module.exports = {
  Node,
  isSymmetric,
};
