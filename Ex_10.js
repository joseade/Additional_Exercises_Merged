const getList = (str) => {
  if ((str.match(/\(/g) || []).length !== (str.match(/\)/g) || []).length) {
    throw new Error("Invalid Sintax");
  }
  if ((str.match(/[^0-9A-Za-z\(\),]/g) || []).length > 0) {
    throw new Error("Invalid Sintax");
  }

  if ((str.match(/(,,,)+/g) || []).length > 0) {
    throw new Error("Invalid Sintax");
  }

  if ((str.match(/(,,,)+/g) || []).length > 0) {
    throw new Error("Invalid Sintax");
  }

  if ((str.match(/(\(\))/g) || []).length > 0) {
    throw new Error("Invalid Sintax");
  }

  if ((str.match(/(\(\()+/g) || []).length > 0) {
    throw new Error("Invalid Sintax");
  }

  const adjacencyList = new Map();
  const arr = Array.from(str);
  const q = [];
  let k = 0;
  while (k < arr.length) {
    if (arr[k] === "(") {
      k++;
    }
    let node = "";
    while (arr[k] !== ")" && arr[k] !== ",") {
      node = node + arr[k];
      k++;
    }
    if (node !== "") {
      if (arr[k] === ")") {
        adjacencyList.set(node, [null, null]);
      } else {
        adjacencyList.set(node, []);
      }
      q.push(node);
    }

    if (arr[k] === "," && arr[k + 1] === ",") {
      adjacencyList.get(q[q.length - 1]).push(null);
    }

    if (arr[k] === ")") {
      if (q.length > 0) {
        const c = q.pop();
        if (q.length > 0) {
          adjacencyList.get(q[q.length - 1]).push(c);
          if (adjacencyList.get(q[q.length - 1]).length > 2) {
            throw new Error("Invalid Sintax");
          }
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

module.exports = {
  printTree,
};
