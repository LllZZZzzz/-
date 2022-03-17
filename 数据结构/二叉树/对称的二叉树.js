// 判断两个树是否对称
// 相同根的 左子树左节点和右子树的右节点相同
const Node = function(val,left,right){
    this.val = val;
    this.left = left;
    this.right = right;
};
const Tree = function(root){
    this.root = root;
};
Tree.prototype = {
    insert(data){
        let node = new Node(data);
        if(!this.root){
            this.root  = node;
            return;
        }
        let current = this.root;
        while(current){
            if(current.data>data){
                if(!current.left){
                    current.left = node;
                    return;
                }
            }
            if(current.data<data){
                if(!current.right){
                    current.right = node;
                    return;
                }
            }
        }
    }
}
const isSymmetrical = (root)=>{
    return symmetricTree(root,root);
}
const symmetricTree = (node1,node2)=>{
    if(!node1&&!node2){return true;}
    if(!node1||!node2){return false;}
    if(node1.val!==node2.val){return false;}
    return symmetricTree(node1.left,node2.right)&&symmetricTree(node1.right,node2.left);
}
const tree =  new Tree(1);