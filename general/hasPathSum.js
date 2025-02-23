class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function hasPathSum(root, sum) {
  if (!root) {
    return false;
  }

  if (!root.right && !root.left) {
    return sum === root.value;
  }

  return (
    hasPathSum(root.left, sum - root.value) ||
    hasPathSum(root.right, sum - root.value)
  );
}

const dois = new TreeNode(2, null, null);
const sete = new TreeNode(7, null, null);
const um = new TreeNode(1, null, null);
const treze = new TreeNode(13, null, null);
const onze = new TreeNode(11, sete, dois);
const quatro = new TreeNode(4, onze, null);
const oito = new TreeNode(8, treze, quatro);
const root = new TreeNode(5, quatro, oito);

const sum = 22;
console.log(hasPathSum(root, sum)); // true
