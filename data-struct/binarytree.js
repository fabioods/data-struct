class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    if (this.root === null) {
      this.root = new Node(data);
    } else {
      this.insertNode(this.root, data);
    }
  }

  insertNode(node, data) {
    if (node.value > data) {
      if (node.left === null) {
        node.left = new Node(data);
      } else {
        this.insertNode(node.left, data);
      }
    } else {
      if (node.right === null) {
        node.right = new Node(data);
      } else {
        this.insertNode(node.right, data);
      }
    }
  }

  search(data) {
    return this.searchNode(this.root, data);
  }

  searchNode(node, data) {
    if (node === null) {
      return false;
    }
    if (node.value === data) {
      return true;
    }
    if (data < node.value) {
      return this.searchNode(node.left, data);
    }
    return this.searchNode(node.right, data);
  }

  preOrder() {
    let result = [];
    this.preOrderNode(this.root, result);
    return result;
  }

  preOrderNode(node, result) {
    if (node) {
      result.push(node.value);
      this.preOrderNode(node.left, result);
      this.preOrderNode(node.right, result);
    }
  }

  inOrder() {
    let result = [];
    this.inOrderNode(this.root, result);
    return result;
  }

  inOrderNode(node, result) {
    if (node) {
      this.inOrderNode(node.left, result);
      result.push(node.value);
      this.inOrderNode(node.right, result);
    }
  }

  postOrder() {
    let result = [];
    this.postOrderNode(this.root, result);
    return result;
  }

  postOrderNode(node, result) {
    if (node) {
      this.postOrderNode(node.left, result);
      this.postOrderNode(node.right, result);
      result.push(node.value);
    }
  }
}

const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(8);
tree.insert(1);
tree.insert(4);
tree.insert(7);
tree.insert(9);

console.log(tree.search(3)); // true
console.log(tree.search(10)); // false
console.log(tree.preOrder()); // [5, 3, 1, 4, 8, 7, 9]
console.log(tree.inOrder()); // [1,3,4,5,7,8,9]
console.log(tree.postOrder()); // [1,4,3,7,9,8,5]
