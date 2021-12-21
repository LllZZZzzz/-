// 新建一个this去执行构造函数 并把this返回
// 如果传的不是函数 则报错
// 如果构造函数返回一个对象或者方法 则返回这个 否则返回this
function myNew(fn, ...args) {
    // 如果fn不是函数
    if (Object.prototype.toString.call(fn).slice(8, -1) !== 'Function') {
        throw '错啦错啦 第一个参数必须是方法体';
    }
    let obj = {};
    // Object.create创建一个以传入对象为__proto__的新对象
    obj.__proto__ = Object.create(fn.prototype);
    const res = fn.apply(obj, args);
    // 如果fn执行后返回函数或对象
    if (Object.prototype.toString.call(res).slice(8, -1) == 'Function' || Object.prototype.toString.call(res).slice(8, -1) == 'Object') {
        return res;
    }
    return obj;
}
function Parent(name) {
    this.name = name;
};
Parent.prototype = {age:123}
console.log(myNew(Parent,1).__proto__.__proto__)