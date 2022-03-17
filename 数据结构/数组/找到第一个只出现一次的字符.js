// 方法一 时间复杂度O(n)、空间复杂度O(n)
const arr = [0,0,1,2,2,1,2,3,4,3,4,5,6,8,7,6,7];
let obj = {},res;
arr.forEach((item)=>{
    if(obj[item]){
        obj[item]=obj[item]+1;
    }else{
        obj[item] = 1;
    };
});
Object.keys(obj).some((item)=>{
    if(obj[item]==1){
        res = item;
        return true;
    }
})
// 方法二 时间复杂度为O(n^2)，空间复杂度为0 比较indexof和lastindex是否相等
arr.some((item)=>{
    if(arr.indexOf(item)==arr.lastIndexOf(item)){
        res = item;
        return true;
    }
})