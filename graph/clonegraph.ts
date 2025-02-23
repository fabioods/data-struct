class _Node {
  val: number;
  neighbors: _Node[];

  constructor(val?: number, neighbors?: _Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

class Clone {
  private visited = new Map<_Node, _Node>();

  cloneGraph(node: _Node | null): _Node | null {
    if (!node) return null;

    if (this.visited.has(node)) {
      return this.visited.get(node)!;
    }

    const clone = new _Node(node.val);
    this.visited.set(node, clone);

    // Cria a lista de vizinhos para o clone
    for (const n of node.neighbors) {
      clone.neighbors.push(this.cloneGraph(n)!);
    }

    return clone;
  }
}

const node1 = new _Node(1);
const node2 = new _Node(2);
const node3 = new _Node(3);
const node4 = new _Node(4);
const node5 = new _Node(5);

node1.neighbors.push(node2, node4);
node2.neighbors.push(node1, node3);
node3.neighbors.push(node2, node4);
node4.neighbors.push(node1, node3);

const clone = new Clone();
const cloneReturn = clone.cloneGraph(null);

console.log("cloned ", cloneReturn);
