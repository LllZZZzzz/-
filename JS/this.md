- #### this
    - this永远指向最后调用它的那个对象
    - 普通函数中this的指向是this执行时的上下文
    - 箭头函数中this的指向是this定义时的上下文
    - this是和执行上下文绑定的，也就是说每个执行上下文中都有this.
- #### 执行上下文
        - 全局执行上下文
        - 函数执行上下文
        - eval执行上下文
        > 注意：这里是浏览器中的this node中的this是不一样的
        
    - 全局执行上下文中的this
        - window
        > 注意 如果把var 变成let、const，则变量不会被绑定到window上
        ```
        let a = 10;
        const b = 10;
        function foo(){
            console.log(this.a);//undefined
            console.log(this.b);//undefined
        }
        foo();
        ```
    - 函数执行上下文中的this
        - 通过call/apply/bind改变this
        ```
        this.myName = 'jsliang';
        let foo = function() {
        this.myName = 'zhazhaliang';
        }
        foo.call(foo);
        console.log(window.myName); // jsliang
        console.log(foo.myName); // zhazhaliang
        ```
        - 通过对象调用方法设置
        ```
        let myObj = {
            name: 'jsliang',
            showThis: function() {
                console.log(this.name);
            },
        };
        let foo = myObj.showThis;
        foo(); // ？
        // let foo = myObj.showThis; 这只是一个定义，真正调用的是foo(),这里的this是指向window的，而window.name是当前 window 的名称，它是 window.open() 打开新网页这个方法的第二个参数的值。window.open('xxx','lz的网页')；那么window.name = 'lz的网页';
        ```
        - 通过构造函数中设置
        ```
        this.name = 'jsliang';
        let Foo = function() {
            this.name = 'zhazhaliang';
        }
        let foo = new Foo();
        console.log(foo.name); // 'zhazhaliang'？
        console.log(window.name); // 'jsliang'
        ```
- #### this设计缺陷和应对方案
        - 嵌套函数中的this不会从外层函数中继承
            1. 解决方法 使用that保存this
            2. 解决方法 使用箭头函数
        - 普通函数中this指向全局对象 window
            1. 解决方法 使用严格模式 
                a. 严格模式中函数的this为undefined "use strict"; 
                b. 严格模式下禁止this关键字指向全局对象

        