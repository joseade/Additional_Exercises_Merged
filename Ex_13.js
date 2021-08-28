class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  insertChild(value) {
    const newTree = new Tree(value);
    this.children.push(newTree);
    return newTree;
  }
}

function isSameLevel(tree, firstNode, secondNode) {
  const findNodesAtSameDepth = (arr) => {
    let nodes = [];
    for (let child of arr) {
      nodes.push(child.value);
    }
    return nodes;
  };
  const hasNodes = (arr, first, second) => {
    const res = arr.filter((e) => e === first || e === second);
    if (res.length === 2) return true;
    return false;
  };
  let q = [];
  q = [...tree.children];
  let n = q.length;
  let i = 0;
  if (hasNodes(findNodesAtSameDepth(q), firstNode, secondNode)) return true;
  while (q.length > 0) {
    const x = q.shift();
    q.push(...x.children);
    i++;
    if (i === n) {
      i = 0;
      n = q.length;
      if (hasNodes(findNodesAtSameDepth(q), firstNode, secondNode)) return true;
    }
  }
  return false;
}

module.exports = {
  Tree,
  isSameLevel,
};
