// 思路:只处理左半边括号
// 时间复杂度O(n)
const isValid = (s)=>{
    const stack = [];
    const res = s.split('').every((item) => {
        if (item == '(') {
            stack.push(')')
        } else if (item == '[') {
            stack.push(']')
        } else if (item == '{') {
            stack.push('}')
        } else if (stack.pop() !== item) {
            return false;
        }
        return true;
     });
     return !stack.length&&res
}