const { LinkedList, Node, findInitialNode } = require("./Ex_16.js");

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

test("Finding the node at the beginning of a loop ", () => {
  expect(findInitialNode(ll).data).toBe(3);
  expect(findInitialNode(ll).next.data).toBe(3);
});
