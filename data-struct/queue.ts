import { Queue } from '@typescript-package/queue';

// Initialize the new `Queue`.
let queue = new Queue(
  10,
  1
);

console.log(queue.isEmpty());
console.log(queue.state)
