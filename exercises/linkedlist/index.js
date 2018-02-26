// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

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

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let pointer = this.head;
    while (pointer) {
      pointer = pointer.next;
      counter++;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let pointer = this.head;
    let last = null;
    while (pointer) {
      last = pointer;
      pointer = pointer.next;
    }
    return last;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
    }
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(record) {
    let node = this.getLast();
    if (!node) {
      node = this.insertFirst(record);
      return;
    }
    node.next = new Node(record);
  }

  getAt(num) {
    let counter = 0;
    let node = this.head;
    if (!node) {
      return null;
    }
    while (counter < num) {
      if (!node.next) {
        return null;
      }
      node = node.next;
      counter++;
    }
    return node;
  }

  removeAt(num) {
    if (num < 0 || !this.head) {
      return;
    }
    if (num === 0) {
      this.removeFirst();
      return;
    }

    const previous = this.getAt(num - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
    return;
  }

  insertAt(data, num) {
    if (num <= 0 || !this.head) {
      this.insertFirst(data);
      return;
    }
    const previous = this.getAt(num - 1);
    if (!previous || !previous.next) {
      this.insertLast(data);
      return;
    }
    previous.next = new Node(data, previous.next);
    return;
  }

  forEach(func) {
    let node = this.head;
    while (node) {
      func(node);
      node = node.next;
    }
    return;
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
