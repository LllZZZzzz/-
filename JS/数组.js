// Es6
// Array.form
// 将类数组转换成数组
function test() {
    console.log([].slice.call(arguments),'-----test1')
    console.log(Array.isArray(Array.from(arguments)),'-----test1')
}
test(1)
// 兼容性写法
function toArray() {
    return Array.from?Array.from(arguments):[].slice.call(arguments)
}
// Array.of
// 将一组值转换成数组
console.log(Array.of(1,2,3),'-----test2')
// copyWithin()
const test3=[1,2,3,4,5,6]
console.log(test3.copyWithin(0,1,3),'-----test3')
// find()和findIndex();
const test4 = [1, 2, 3, 4, 5, 6];
console.log(test4.find((item) => {
    if (item == 1) return true
}), '--------test4');
console.log(test4.findIndex((item) => {
    if (item == 1) return true
}), '--------test4');
// fill();
// 填充
console.log(new Array(10).fill('test5'))

// ES7
// includes()
// 推荐使用这个代替indexOf()因为indexOf会对NaN造成误判.
console.log([1,2,3].includes(1),'-------------test6')


// 之后陆续补充

