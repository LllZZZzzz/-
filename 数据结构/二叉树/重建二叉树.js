// 根据前序和中序得出二叉树
let pretree = [1, 2, 4, 7, 3, 5, 6, 8],
    middletree = [4, 7, 2, 1, 5, 3, 8, 6];

const buildtree = (pretree, middletree) => {
    let root = pretree.shift();
    let node = {
        value: root,
        left: null,
        right: null
    };
    let rootIndex = middletree.indexOf(root);
    if (rootIndex !== 0) {
        let preLeftTree = pretree.slice(0, rootIndex);
        let midLeftTree = middletree.slice(0, rootIndex);
        node.left = buildtree(preLeftTree, midLeftTree);
    }
    if (rootIndex !== middletree.length - 1) {
        let preRightTree = pretree.slice(rootIndex);
        let midRightTree = middletree.slice(rootIndex + 1);
        node.right = buildtree(preRightTree, midRightTree);
    }
    return node;
};
const node = buildtree(pretree,middletree);
console.log(JSON.stringify(node))