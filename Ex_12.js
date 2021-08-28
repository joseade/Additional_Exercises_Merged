class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

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

module.exports = {
  Node,
  isSymmetric,
};
