// sort这个可能让我手写实现
const minNumber = (arrNum)=>{
    arrNum.sort((a,b)=>{
        return (''+a+b)-(''+b+a);
    });
    console.log(arrNum)
};
minNumber([1,2,3,11]);
