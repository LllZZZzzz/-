const reg = /java/g;
let str = 'javascript is fun then java';
console.log(reg.exec(str),reg.exec(str));
console.log(reg.test(str));
console.log(str.search(reg));
console.log(str.replace(reg,123));
console.log(str.match(reg));
console.log(str.split(reg));
console.log(str)

