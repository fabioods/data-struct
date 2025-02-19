class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
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
      this.head = node; // atualizo o primeiro nodo
    }
    this.size++;
  }

  pop() {
    if (!this.head) return null;
    let current = this.head;
    let prev = null;
    while (current.next) {
      prev = current;
      current = current.next;
    }

    if (prev) {
      prev.next = null;
      this.tail = prev;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.size--;
    return current;
  }

  shift() {
    if (!this.head) return null;
    const elementToRemove = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.size--;
    return elementToRemove;
  }

  print() {
    let currentNode = this.head;
    let result = "";
    while (currentNode) {
      result += currentNode.value + " -> ";
      currentNode = currentNode.next;
    }
    console.log(result + "null");
  }

  invert() {
    let current = this.head;
    let prev = null;
    let next = null;
    while (current) {
      next = current.next; // salvo a referência para o próximo nodo
      current.next = prev; // inverto a referência para o nodo anterior
      prev = current; // atualizo o nodo anterior
      current = next; // atualizo o nodo atual
    }
    this.tail = this.head; // atualizo o último nodo
    this.head = prev; // atualizo o primeiro nodo
  }

  middleElement() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    console.log(slow.value);
    return slow.value;
  }

  hasCycles() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) return true;
    }
    return false;
  }
}

var reverseList = function (head) {
  let newList = null;
  while (head) {
    let nextNode = head.next;
    head.next = newList;
    newList = head;
    head = nextNode;
  }
  return newList;
};

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.append(40);
list.append(50);
list.append(60);
list.append(70);
list.append(80);
// list.pop();
// list.shift();
// list.invert();
// list.print(); // 5 <-> 10 <-> 20 <-> 30 <-> null
list.middleElement(); // 20
