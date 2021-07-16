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
// var a = [1, 2, 3];
// var res = a.every((item) => {
//     console.log(item)
//     if (item !== 1) {
//         console.log('进来了')
//         return false;
//     }
// });
// console.log(res)