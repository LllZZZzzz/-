const test = (data) => {
    data.text = '葱葱葱葱葱葱';
};
const data = {
    name: '葱',
    age:'鸭'
}
test(data);
console.log(data);

const test2 = (data) => {
    // 这里的data存的是地址的备份 如果改变了 不会影响外面传入的值
    data = 1;
};
const data2 = {
    name: 'hahaha',
    text:'小猪崽子'
}
test2(data2);
console.log(data2)