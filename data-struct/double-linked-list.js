class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail; // conecto o novo nodo com o último nodo no final da lista
      this.tail.next = node; // conecto o último nodo com o novo nodo no final da lista
      this.tail = node; // atualizo o último nodo
    }
    this.size++;
  }

  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head; // conecto o novo nodo com o primeiro nodo no inicio da lista
      this.head.prev = node; // conecto o primeiro nodo com o novo nodo no inicio da lista
      this.head = node; // atualizo o primeiro nodo
    }
    this.size++;
  }

  pop() {
    if (!this.tail) return null;
    const elementToRemove = this.tail;
    if (this.tail === this.head) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
    return elementToRemove;
  }

  shift() {
    if (!this.head) return null;
    const elementToRemove = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
  }

  print() {
    let currentNode = this.head;
    let result = "";
    while (currentNode) {
      result += currentNode.value + " <-> ";
      currentNode = currentNode.next;
    }
    console.log(result + "null");
  }

  invert() {
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;
    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      currentNode.prev = nextNode;
    }
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.print(); // 5 <-> 10 <-> 20 <-> 30 <-> null
