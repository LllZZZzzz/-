function findPath(root,targetNum){
    const result = [];
    if(root){
        FindPathCore(root,targetNum,[],0,result);
    };
    return result;
};
function FindPathCore(node,targetNum,stack,sum,result){
    stack.push(node.val);
    sum+=node.val;
    if(!node.left&&!node.right&&sum==targetNum){
        result.push(stack.slice(0));
    }
    if(node.left){
        FindPathCore(node.left,targetNum,stack,sum,result);
    }
    if(node.right){
        FindPathCore(node.right,targetNum,stack,sum,result);
    }
    stack.pop();
}