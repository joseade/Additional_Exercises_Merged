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
    if (tortoise === hare) return true;
  }
  return false;
};

const ll = new LinkedList();
const a = new Node(1);
const b = new Node(2);
const c = new Node(2);
const d = new Node(3);
const e = new Node(3);
const f = new Node(6);
const g = new Node(7);
const h = new Node(2);
const i = new Node(1);

ll.head = a;
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = i;
i.next = d;

function findInitialNode(list) {
  if (!hasLoop(list)) return false;

  const s = new Set();
  let current = list.head;
  let beginningNode;

  while (!s.has(current)) {
    s.add(current);
    current = current.next;
    beginningNode = current;
  }

  return beginningNode;
}

console.log(findInitialNode(ll));
module.exports = {
  LinkedList,
  Node,
  findInitialNode,
};
