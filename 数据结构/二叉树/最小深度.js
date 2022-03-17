var minDepth = function (root) {
    return root?Math.min(minDepth(root.left), minDepth(root.right))+1:0
}