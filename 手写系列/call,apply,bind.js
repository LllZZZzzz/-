// function app(...arg) {
//     console.log(arg)
// };
// app.call(this,1,2,3)
// app.bind(this,1,2,3)(4,5)
// app.apply(this, [1, 2, 3])
// call
Function.prototype.myCall = function (contentThis) {
    const fn = this;
    contentThis.fn = fn;
    let params = arguments[1];
    let res = contentThis.fn(...params);
    delete contentThis.fn;
    return res;
}
Function.prototype.myApply = function (contentThis) {
    const fn = this;
    contentThis.fn = fn;
    let params = Array.from(arguments).slice(1);
    let res = contentThis.fn(...params);
    delete contentThis.fn;
    return res;
}
Function.prototype.myBind = function (contentThis,...args) {
    const fn = this;
    let otherArgs = args;
    return function (...args) { 
        fn.apply(contentThis, [...otherArgs, ...args]);
    };
}
function a(a,b,c) {
    console.log(a,b,c)
}
var obj = { name: 123 }
a.bind(obj,1)(2)
