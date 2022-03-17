// 每个子树的深度差不超过1
function IsBalance(root){
    return balance(root)!==-1;
}
function balance(node){
    if(!node){return 0};
    let left = balance(node.left);
    let right = balance(node.right);
    if(Math.abs(left-right)>1||left==-1||right==-1){
        return -1;
    }
    return Math.max(left,right)+1;
}