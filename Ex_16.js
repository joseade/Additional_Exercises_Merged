class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

const hasLoop = function (list) {
  let tortoise = list.head;
  let hare = list.head;
  while (hare.next && hare.next.next) {
    tortoise = tortoise.next;
    hare = hare.next.next;
    if (tortoise === hare) return hare;
  }
  return false;
};

function findInitialNode(list) {
  const nodeInsideLoop = hasLoop(list);
  if (!nodeInsideLoop) return false;

  let head = list.head;
  let tail = nodeInsideLoop;

  while (head !== tail) {
    head = head.next;
    tail = tail.next;
  }
  return tail;
}

module.exports = {
  LinkedList,
  Node,
  findInitialNode,
};
