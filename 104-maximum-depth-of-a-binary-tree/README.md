# 104. Maximum Depth of Binary Tree

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

## Solution O(n)
* Find the deepest leaf by recursively comparing the max depth of each child tree, adding 1 to the depth of the child tree with the greatest depth
* If the child tree is empty, return zero
* Best/Worst case: visits every node in tree
