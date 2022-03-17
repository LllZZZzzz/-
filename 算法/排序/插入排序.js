// 时间复杂度O(n^2) 空间复杂度O(1)
function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let target = i;
        for(let j = i-1;j>=0;j--){
            if(arr[target]<arr[j]){
                [arr[target],arr[j]] = [arr[j],arr[target]];
                target = j;
            }
        }
    }
    return arr;
};
function insertionSort (arr){
    if(Object.prototype.toString.call(arr).slice(8,-1)=='Arrray'&&arr.length){
        for(let i=1;i<arr.length;i++){
            let target = i;
            for(let j=i-1;j>=0;j--){
                if(arr[j]<arr[target]){
                    [arr[j],arr[target]] = [arr[target],arr[j]];
                    target = j;
                }
            }
        }
    }
    return arr;
}

 function insortionSort (arr){
    if(Object.prototype.toString.call(arr).slice(8,-1)=='Arrray'&&arr.length){
        for(let i=1;i<arr.length;i++){
            let target = i;
            for(let j=i-1;j>=0;j--){
                if(arr[j]>arr[i]){
                    [arr[j],arr[i]] = [arr[i],arr[j]];
                    target = j;
                }
            }
        }
    }
    return arr;
 }