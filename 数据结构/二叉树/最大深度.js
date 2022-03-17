const treeDepth = (root)=>{
    return root?Math.max(treeDepth(root.left),treeDepth(root.left))+1:0
}