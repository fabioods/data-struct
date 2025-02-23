class Nodo {
  left: Nodo | null;
  right: Nodo | null;
  value: number;

  constructor(value: any) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  root: Nodo | null;

  constructor() {
    this.root = null;
  }

  insert(data: any) {
    if (this.root === null) {
      this.root = new Nodo(data);
    } else {
      this.insertNode(this.root, data);
    }
  }

  insertNode(node: Nodo, data: number) {
    if (node.value > data) {
      if (node.left === null) {
        node.left = new Nodo(data);
      } else {
        this.insertNode(node.left, data);
      }
    } else {
      if (node.right === null) {
        node.right = new Nodo(data);
      } else {
        this.insertNode(node.right, data);
      }
    }
  }

  preOrder(): Nodo[] {
    let result: Nodo[] = [];
    this.preOrderSearch(this.root, result);
    return result;
  }

  private preOrderSearch(nodo: Nodo | null, result: Nodo[]) {
    if (nodo) {
      result.push(nodo);
      this.preOrderSearch(nodo.left, result);
      this.preOrderSearch(nodo.right, result);
    }
  }

  dfs(data: number): boolean {
    return this.dfsSearch(data, this.root);
  }

  private dfsSearch(data: number, nodo: Nodo | null): boolean {
    if (!nodo) {
      return false;
    }

    if (nodo.value === data) {
      return true;
    }

    if (this.dfsSearch(data, nodo.left)) return true;
    if (this.dfsSearch(data, nodo.right)) return true;

    return false;
  }

  bfs(data: number): boolean {
    return this.bfsSearch(data, this.root);
  }

  private bfsSearch(data: number, nodo: Nodo | null) {
    if (!nodo) {
      return false;
    }

    let queue = [nodo];
    while (queue) {
      console.log("queue ", queue);
      const element = queue.shift();
      if (!element) {
        return false;
      }

      if (element.value === data) {
        return true;
      }
      if (element.left) queue.push(element.left);
      if (element.right) queue.push(element.right);
    }

    return false;
  }
}

const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(8);
tree.insert(1);
tree.insert(7);
tree.insert(9);

const resultPreOrder = tree.preOrder();
console.log("result pre order ", resultPreOrder);
const searchDFS = tree.dfs(0);
console.log("result dfs search", searchDFS);
const searchBFS = tree.bfs(9);
console.log("result bfs search", searchBFS);
