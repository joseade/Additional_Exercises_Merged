const getList = (str) => {
  const adjacencyList = new Map();
  const arr = Array.from(str);
  const q = [];
  for (let [index, char] of arr.entries()) {
    if (char === "(" && arr[index + 2] === ")") {
      adjacencyList.set(arr[index + 1], [null, null]);
      q.push(arr[index + 1]);
      continue;
    }
    if (char === ")") {
      if (q.length > 0) {
        const c = q.pop();
        if (q.length > 0) {
          adjacencyList.get(q[q.length - 1]).push(c);
        }
        // } else {
        //   adjacencyList.get(c).push(null);
        // }
        if (adjacencyList.get(c).length < 2) {
          adjacencyList.get(c).push(null);
        }
      }
    }
    if (char === "," && arr[index + 1] === ",") {
      adjacencyList.get(q[q.length - 1]).push(null);
    }
    if (char === "(") {
      adjacencyList.set(arr[index + 1], []);
      q.push(arr[index + 1]);
    }
  }
  return adjacencyList;
};

function inorderTraversal(root, adjacencyList) {
  let result = [];
  function helper(node) {
    if (node) {
      const [left, right] = adjacencyList.get(node);
      helper(left);
      result.push(node);
      helper(right);
    }
  }
  helper(root);
  return result.join("-");
}

function preorderTraversal(root, adjacencyList) {
  let result = [];
  function helper(node) {
    if (node) {
      const [left, right] = adjacencyList.get(node);
      result.push(node);
      helper(left);
      helper(right);
    }
  }
  helper(root);
  return result.join("-");
}

function postorderTraversal(root, adjacencyList) {
  let result = [];
  function helper(node) {
    if (node) {
      const [left, right] = adjacencyList.get(node);
      helper(left);
      helper(right);
      result.push(node);
    }
  }
  helper(root);
  return result.join("-");
}

const printTree = (tree, order = "infix") => {
  const adjacencyList = getList(tree);
  re = new RegExp(`[^(]`);
  const root = tree.match(re)[0];

  switch (order) {
    case "infix":
      return inorderTraversal(root, adjacencyList);
    case "prefix":
      return preorderTraversal(root, adjacencyList);
    case "postfix":
      return postorderTraversal(root, adjacencyList);
  }
};

module.exports = {
  printTree,
};
