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
  traverse() {
    console.log(this.value);
    this.children.forEach((child) => {
      child.traverse();
    });
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
  //   console.log(findNodesAtSameDepth(q).includes(firstNode, secondNode));
  while (q.length > 0) {
    const x = q.shift();
    q.push(...x.children);
    i++;
    if (i === n) {
      i = 0;
      n = q.length;
      if (hasNodes(findNodesAtSameDepth(q), firstNode, secondNode)) return true;
      //   console.log(findNodesAtSameDepth(q));
    }
  }
  return false;
}

const t = new Tree(0);
t.insertChild(1);
const t2 = t.insertChild(2);
const t3 = t.insertChild(3);
t.insertChild(5);
const t7 = t.insertChild(7);
t2.insertChild(1);
const t25 = t2.insertChild(5);
t3.insertChild(0);
const t73 = t7.insertChild(3);
t25.insertChild(3);
const t255 = t25.insertChild(5);
t25.insertChild(9);
t73.insertChild(3);
const t730 = t73.insertChild(0);
t255.insertChild(6);
t730.insertChild(9);
t730.insertChild(4);
console.log(isSameLevel(t, 1, 1));
console.log(isSameLevel(t, 3, 3));

module.exports = {
  Tree,
  isSameLevel,
};
