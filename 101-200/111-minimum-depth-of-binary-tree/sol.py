# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution(object):

    def minDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if not root:
            return 0
        if root.left and root.right:
            return 1 + min(self.minDepth(root.left), self.minDepth(root.right))
        if root.left:
            return 1 + self.minDepth(root.left)
        if root.right:
            return 1 + self.minDepth(root.right)
        return 1


class Solution(object):

    def minDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if not root:
            return 0

        depth = 1
        current = [root]

        while current:
            nxt = []
            for node in current:
                if not node.left and not node.right:
                    return depth
                if node.left:
                    nxt.append(node.left)
                if node.right:
                    nxt.append(node.right)
            depth += 1
            current = nxt

        return depth
