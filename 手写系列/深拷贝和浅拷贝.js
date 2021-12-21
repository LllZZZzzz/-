// 浅拷贝 不论数组还是对象都只拷贝一层
let arr = [0, 1, { name: 123 }];
// 手写
const checkedType = (target) => {
    const res = Object.prototype.toString.call(target).slice(8, -1);
    return res;
}
const copy = (target) => {
    const type = checkedType(target);
    const res = type == 'Object' ? {} : [];
    for (const key in target) {
        if (Object.hasOwnProperty.call(target, key)) {
            res[key] = target[key];
        }
    }
    return res;
};
// Object.assign
// Array.from arr.concat [...arr] arr.slice()
const newArr = arr.slice();
newArr[2].name = 456;
newArr[0] = 456;


// 深拷贝
// 手写
const deepClone = (target) => {
    let res;
    let type = checkedType(target);
    if (type == 'Object') {
        res = {};
    } else if (type == 'Array') {
        res = [];
    } else {
        return target;
    }
    for (const key in target) {
        if (Object.hasOwnProperty.call(target, key)) {
            res[key] = deepClone(target[key]);
        }
    }
    return res;
}
let arr2 = [0, 1, { name: 123 }];
let newArr2 = deepClone(arr2);
newArr2[2].name = 456;
console.log(arr2, newArr2);
// JSON.parse(JSON.stringify)