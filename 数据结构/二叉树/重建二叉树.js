let pretree = [1,2,4,7,3,5,6,8],
    middletree = [4,7,2,1,5,3,8,6];

const buildtree = (pretree,middletree)=>{
    let root = pretree.shift();
    let rootIndex = middletree.indexOf(root);
    let preLeftTree = pretree.splice(0,rootIndex);
    let preRightTree = pretree;
    let midLeftTree = middletree.slice(0,rootIndex);
    let midRightTree = middletree.slice(rootIndex+1);
    let node={};
    node.value = root;
    node.left = buildtree(preLeftTree,midLeftTree);
    node.right = buildtree(preRightTree,midRightTree);
    return node;
}