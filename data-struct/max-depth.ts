/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0
    }


    const recursive = (node: TreeNode) => {
        if (node === null) {
            return 0
        }
        let left = recursive(node.left);
        let right = recursive(node.right);

        return Math.max(left,right)+1

    }
 
    return recursive(root);
};