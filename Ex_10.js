const getList = (str) => {
  if ((str.match(/\(/g) || []).length !== (str.match(/\)/g) || []).length) {
    throw new Error("Invalid Sintax");
  }
  if ((str.match(/[^0-9A-Za-z\(\),]/g) || []).length > 0) {
    throw new Error("Invalid Sintax");
  }
  if ((str.match(/,/g) || []).length % 2 !== 0) {
    throw new Error("Invalid Sintax");
  }

  const adjacencyList = new Map();
  const arr = Array.from(str);
  const q = [];
  let k = 0;
  while (k < arr.length) {
    if (arr[k] === "(") {
      let i = k + 1;
      for (; i < arr.length; i++) {
        if (arr[i] === ",") {
          const node = arr.slice(k + 1, i).join("");
          q.push(node);
          adjacencyList.set(node, []);
          break;
        }
        if (arr[i] === ")") {
          const node = arr.slice(k + 1, i).join("");
          q.push(node);
          adjacencyList.set(node, [null, null]);
          break;
        }
      }
      k = i;
    }
    if (arr[k] === "," && arr[k + 1] === ",") {
      adjacencyList.get(q[q.length - 1]).push(null);
    }
    if (arr[k] === ")") {
      if (q.length > 0) {
        const c = q.pop();
        if (q.length > 0) {
          adjacencyList.get(q[q.length - 1]).push(c);
        }
        if (adjacencyList.get(c).length < 2) {
          adjacencyList.get(c).push(null);
        }
      }
    }

    k++;
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
  // re = new RegExp(`[^(]`);
  // const root = tree.match(re)[0];
  const root = adjacencyList.keys().next().value;

  switch (order) {
    case "infix":
      return inorderTraversal(root, adjacencyList);
    case "prefix":
      return preorderTraversal(root, adjacencyList);
    case "postfix":
      return postorderTraversal(root, adjacencyList);
  }
};

// const bTree = "(AAA,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";
// console.log(bTree.length);
const bTree = "(A,(B),(B),(B),(B))";

console.log(getList(bTree));
module.exports = {
  printTree,
};
