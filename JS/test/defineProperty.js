let obj = {};
Object.defineProperty(obj,'name',{
    value : 37,//value和set不可共存
    writable : true,
    enumerable : true,//是否可枚举
    configurable : true//描述符是否够被改变以及该属性是否能被删除
});
delete obj.name;
for (const key in obj) {
    console.log(key)
}
