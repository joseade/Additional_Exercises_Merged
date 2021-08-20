class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(data) {
    this.head = new Node(data, this.head);
    this.size += this.size;
  }

  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }
}

function isPalindrome(linkedList) {
  const arr = linkedList.toArray();
  const reverse = [...arr].reverse();

  return arr.join("") === reverse.join("");
}

const ll = new LinkedList();
ll.insert(400);
ll.insert(200);
ll.insert(200);
ll.insert(400);

console.log(isPalindrome(ll));

module.exports = {
  LinkedList,
  Node,
  isPalindrome,
};
