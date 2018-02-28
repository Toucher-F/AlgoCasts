// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  // insert(data) {
  //   const newNode = new Node(data);
  //   let node = this;
  //   while (1) {
  //     if (newNode.data < node.data) {
  //       if (node.left === null) {
  //         node.left = newNode;
  //         return newNode;
  //       }
  //       node = node.left;
  //     } else {
  //       if (node.right === null) {
  //         node.right = newNode;
  //         return newNode;
  //       }
  //       node = node.right;
  //     }
  //   }
  // }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (data === this.data) {
      return this;
    } else if (data < this.data && this.left) {
      return this.left.contains(data);
    } else if (data < this.left) {
      return null;
    } else if (data > this.data && this.right) {
      return this.right.contains(data);
    } else if (data > this.data) {
      return null;
    }
  }
}

module.exports = Node;
