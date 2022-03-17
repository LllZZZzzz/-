// 必须是有序数组
const binarySearch =(data,arr,start,end)=>{
    let mid = Math.floor((start+end)/2); 
    if(arr[mid]==data){
        return mid;
    }
    if(arr[mid]<data){
        return binarySearch(data,arr,mid+1,end);
    }
    if(arr[mid]>data){
        return binarySearch(data,arr,start,mid-1);
    }
};
console.log(binarySearch(5,[0,1,2,3,4,5,6,7,8,9,10],0,10))