class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

const node7 = new Node(7, null);
const node2 = new Node(2, node7);
const node5 = new Node(5, node2);
const node9 = new Node(9, node5);

// 7 -> 2 -> 5 -> 9
// 2 -> 5 -> 7 -> 9

function findMiddle(head) {
  let slow = head;
  let fast = head;
  let prev = null;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;
  return slow;
}

function merge(list1, list2) {
  let dummy = new Node();
  let current = dummy;

  while (list1 && list2) {
    if (list1.value < list2.value) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  current.next = list1 || list2;
  return dummy.next;
}

function mergeSort(head) {
  if (!head || !head.next) return head;

  let middle = findMiddle(head);
  let left = mergeSort(head);
  let right = mergeSort(middle);
  return merge(left, right);
}

function printList(head) {
  let current = head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

console.log(mergeSort(node9));
printList(mergeSort(node2));
