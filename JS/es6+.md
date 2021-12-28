ES6
- 箭头函数
- map set
- Promise
- class
- symbol
ES7
- **
ES8
- async/await
- Object.entries
ES9
- for await of
- Promise.finally
ES10
- Array.flat
- Array.flatMap
- BigInt
- Object.fromEntries
ES11
- promise.allSettled
- ?.和??
ES12
- promise.any node15.0+才支持 有一个成功就返回
- ||=和&&=
- 数字分隔符


ES6
- let const 有变量提升但是有暂时性死区
- 默认参数
- 扩展运算符=三点运算符（数组）
- 剩余参数
- 模板字符串
- Object.keys()
- 箭头函数 没有this 不能作为构造函数new 没有arguments 没有原型对象
- Array forEach map filter some every reduce find findIndex from
- 对象属性同名简写·
- promise ‘承诺’ promise.all promise.race promise.any
- class class也是function 语法糖 static extend
- 解构赋值（数组、对象）
- for(数组)  for in(对象/数组) for of(interator)
- set 不重复 虽然NaN!==NaN但是还是会被去重 new Set([]) Set.has() Set.add()
- Map与object相比 最大的好处就是key不受限制 new Map([[k,v],[k,v]])二维数组 map.set map.get map.delete
- symbol独一无二的值 所以可以作为对象唯一的key
- 属性表达式
- Object.create()

ES7
- includes 和nidexOf相似 但是最大的区别是 是否能找到 NaN
- 求幂运算符Math.pow(3,2)==3**2

ES8
- object.values
- object.entries 对象转换为键值对数组
- async await 以同步的方式展示异步  promise实际还是异步去解决回调地狱

ES9
- promise.finally

ES10
- Array flat flatMap==Map完了之后flat
- BigInt 新数据类型
- fromEntries 键值对转换为对象
- trimStart trimEnd

ES11
- Promise.allSettled 与Promise.all类似
- ?. ?? ??=可选链和双问号空值赋值运算符 
    - 双问号：let num = a??b;当a为null或者undefined的时候赋值b
    - 空值赋值运算符： c??=b;当b为null或者undefined的时候赋值给c

ES12
- Promise.any 有一个成功则返回这个成功的结果
- 数字分隔符_ const num = 1_000_000;
- ||=和&&=

js简写技巧

- 同时声明多个变量时，可简写成一行
    let a,b=10;
- 使用||为变量指定默认值
- 使用解构赋值交换两个变量
    let x=1,y=2;
    [x,y]=[y,x]
- 使用repeat()方法简化重复一个字符串
    - '哈哈哈'.repeat(100)
- 双星号代替Math.pow()
- 双波浪线代替Math.floor()