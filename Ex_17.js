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
    this.size += 1;
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
  let head = linkedList.head;
  const q = [head.data];
  while (head.next) {
    head = head.next;
    q.push(head.data);
  }

  head = linkedList.head;

  while (q.length > 0) {
    const last = q.pop();
    if (last !== head.data) {
      return false;
    }
    head = head.next;
  }
  return true;
}

module.exports = {
  LinkedList,
  Node,
  isPalindrome,
};
