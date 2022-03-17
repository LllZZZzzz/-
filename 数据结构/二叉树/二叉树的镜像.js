// 交换左树和右数
const mirror = (root)=>{
    if(!root){return null};
    let left = root.left;
    root.left = mirror(root.right);
    root.right = mirror(left);
    return root;
}
// 叶子节点 完全二叉树 满二叉树 高度（3-0） 深度（0-3） 层级（1-4)
// 链式存储 数组存储 完全二叉树比较适合数组存储 其他的会浪费空间
const Node = function(data,left=null,right=null){
    this.data = data;
    this.left = left;
    this.right = right;
}
const Tree = function(root){
    this.root = new Node(root);
}
Tree.prototype = {
    insert(data){
        const node = new Node(data);
        if(!this.root){
            this.root = node;
            return;
        }
        let current = this.root;
        while(current){
            if(current.data>data){
                if(!current.left){ current.left = node;return};
                current = current.left;
            }else{
                if(!current.right){current.right = node;return};
                current = current.right;
            }
        }
    },
    // 前序
    preOrder(current,preOrderArr=[]){
        // data left right
        if(current){
            preOrderArr.push(current.data);
            this.preOrder(current.left,preOrderArr);
            this.preOrder(current.right,preOrderArr);
        }
        return preOrderArr;
    },
    midOrder(current,midOrderArr=[]){
        // data left right
        if(current){
            this.midOrder(current.left,midOrderArr);
            midOrderArr.push(current.data);
            this.midOrder(current.right,midOrderArr);
        }
        return midOrderArr;
    },
    laterOrder(current,laterOrderArr=[]){
        // data left right
        if(current){
            this.laterOrder(current.left,laterOrderArr);
            laterOrderArr.push(current.data);
            this.laterOrder(current.right,laterOrderArr);
        }
        return midOrderArr;
    },
    // 非递归
    preOrder2(current){
        const preOrderArr=[];
        const left = [];
        while(current||left.length){
            while(current){
                preOrderArr.push(current);
                left.push(current);
                current = current.left;
            }
            current = left.pop().right;
            return preOrderArr;
        }
    },
    midOrder2(current){
        const midOrderArr = [];
        const left = [];
        while(current || midOrderArr.length){
            while(current){
                left.push(current);
                current = current.left;
            }
            current = left.pop();
            midOrderArr.push(current);
            current = current.right;
        }
    },
    laterOrder2(current){
        const midOrderArr = [];
        const left = [];
        const last = null;
        while(current||left.length){
            while(current){
                left.push(current);
                current = current.left;
            }
            current = current[left.length-1];
            if(!current.right|| current.right == last){
                current = left.pop();
                last = current.right;
                midOrderArr.push(current);
                current = null;
            }else{
                current = current.right
            }
        }
    },
    getMin(){
        let res = this.root;
        if(!res) return null;
        while(res.left){
            res = res.left;
        }
        return res.data;
    },
    getMax(){
        let res = this.root;
        if(!res) return null;
        while(res.right){
            res=res.right;
        }
        return res.data;
    },
    getDeep(node){
        let leftDeep = 0;
        let rightDeep = 0;
        if(!node){return 0};
        let rightroot = node;
        let leftroot = node;
        while(leftroot){
            leftroot = leftroot.left;
            if(leftroot){
                leftDeep++;
            };
        }
        while(rightroot){
            rightroot = rightroot.right;
            if(rightroot){
                rightDeep++;
            };
        }
        console.log((leftDeep-rightDeep)?leftDeep:rightDeep)
        return (leftDeep-rightDeep)?leftDeep:rightDeep
    }
}
const t = new Tree(3)
t.insert(4);
t.insert(2);
t.insert(1);
mirror(t.root)
console.log(t)
// t.getMax();
// t.getDeep();
