// 根据前序和中序得出后序
let pretree = [1, 2, 4, 7, 3, 5, 6, 8],
    middletree = [4, 7, 2, 1, 5, 3, 8, 6];
const getLaterTree = (pretree,middletree)=>{
    let leftRoot=[],rightRoot=[],root = pretree.shift();
    let rootIndex = middletree.indexOf(root);
    if(rootIndex!==0){
        let middleLeftTree = middletree.slice(0,rootIndex);
        let preLeftTree = pretree.slice(0,rootIndex);
        leftRoot = getLaterTree(preLeftTree,middleLeftTree);
    }
    if(rootIndex!==middletree.length-1){
        let middleRightTree = middletree.slice(rootIndex+1);
        let preRightTree = pretree.slice(rootIndex);
        rightRoot = getLaterTree(preRightTree,middleRightTree);
    }
    let arr = [...leftRoot,...rightRoot,root];
    return arr;
};
console.log(getLaterTree(pretree,middletree))