// 冒泡+递归
// 时间复杂度O(n^2) 空间复杂度O(n)
const sort = stack => {
    const _sort = () => {
     if(stack.length<=1) return stack;
        let num=stack.pop();
        if(num<stack[stack.length-1]){
            let temp=stack.pop();
            stack.push(num);
            num=temp;
            _sort();
        }else{
            _sort();
        }
        stack.push(num);
    }
    let index=stack.length;
    while(index>0){
        _sort();   //每一次排序完栈底元素最小 
        index--;
    }
    return stack;
}
console.log(sort([1, 5, 4, 3, 2, 4, 8]));