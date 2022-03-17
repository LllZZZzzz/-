function reOrderArray(array){
    if(Array.isArray(array)){
        let start = 0,end=array.length-1;
        while(start<end){
            while(array[end]%2==0){end--};
            while(array[start]%2==1){start++};
            if(start<end){
                [array[start], array[end]] = [array[end], array[start]]
            }
        }
    }
    return array;
}