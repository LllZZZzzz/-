// 时间复杂度O(n)
const isValid = function(s){
    let stack = [];
    s.split('').forEach((item) => {
        let stack = [];
        console.log(stack)
        // if (item == '(') {
        //     stack.push(')')
        // } else if (item == '[') {
        //     stack.push(']')
        // } else if (item == '{') {
        //     stack.push('}')
        // } else if (stack.pop() !== item) {
        //     return false;
        // }
        // return !stack.length
    })
}
isValid('()')