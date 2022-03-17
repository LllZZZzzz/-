// 平均时间复杂度：O(n^2) 空间复杂度 O(1)
function bubbleSort (arr){
    if(Object.prototype.toString.call(arr).splice(8,-1)=='Array'&&arr.length){
        for(let i=0;i<arr.length-1;i++){
            for(let j = 0;j<arr.length-1-i;j++){
                if(arr[j]>a[j+1]){
                    [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                }
            }
        }
    }
    return arr;
}

function bubbleSort (arr){
    if(Object.prototype.toString.call(arr).slice(8,-1)=='Array'&&arr.length){
        for(let i=0;i<arr.length-1;i++){
            for(let j=0;j<arr.length-1-i;j++){
                if(arr[j]>arr[j+1]){
                    [arr[j+1],arr[j]]=[arr[j],arr[j+1]];
                }
            }
        }
    }
    return arr;
}

 function bubbleSort (arr){
     if(Object.prototype.toString.bind(arr).slice(8,-1)=='Arrary'&&arr.length){
        for(let i=0;i<arr.length-1;i++){
            for(let j=0;j<arr.length-1-i;j++){
                if(arr[j]>arr[j+1]){
                    [arr[j],arr[j+1]] = [arr[j+1],arr[j]] ;
                }
            }
        }
     }
     return arr;
 }