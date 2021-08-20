const bTree = "(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";
//const bTree = "(A,(B,(D),(E)),(C,(F),(G)))";
const getList = (str) => {
  const arr = Array.from(str);
  const adjacencyList = new Map();

  for (let [index, char] of arr.entries()) {
    if (char === ("(" || ")" || ",")) continue;
    if (index > 0 && arr[index - 1] === "(" && arr[index + 1] === ")") {
      adjacencyList.set(char, [null, null]);
      continue;
    }
    if (index > 0 && arr[index - 1] === "(") {
      let right = null;
      let re = new RegExp(`,\\(${char},\\(.\\),\\(.\\)\\)`, "gi");
      right = str.match(re);
      if (right) {
        right = right[0].slice(-3, -2);
      }
      if (!right) {
        re = new RegExp(`,\\(${char},,\\(.\\)\\)`, "gi");
        right = str.match(re);
        if (right) {
          right = right[0].slice(-3, -2);
        }
      }
      if (!right) {
        re = new RegExp(`\\(${char}.*?\\)\\),\\(.`, "gi");
        right = str.match(re);
        right = right[0].slice(-1);
      }

      if (arr[index + 3] !== ("(" || ")" || ",")) {
        adjacencyList.set(char, [arr[index + 3], right]);
        continue;
      }
      adjacencyList.set(char, [null, right]);
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

// console.log(printTree(bTree));
// console.log(printTree(bTree, "prefix"));
// console.log(printTree(bTree, "postfix"));

module.exports = {
  printTree,
};
