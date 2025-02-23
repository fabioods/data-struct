const inOrder = [9, 3, 15, 20, 7];
const postOrder = [9, 15, 7, 20, 3];

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function buildTree(inOrder, postOrder) {
  if (inOrder.length === 0 || postOrder.length === 0) {
    return null;
  }
  const rootValue = postOrder.pop();
  const root = new TreeNode(rootValue);
  const rootIndex = inOrder.indexOf(rootValue);
  root.right = buildTree(inOrder.slice(rootIndex + 1), postOrder);
  root.left = buildTree(inOrder.slice(0, rootIndex), postOrder);
  return root;
}
