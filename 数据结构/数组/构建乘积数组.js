function multiply(array){
    const res = [];
    for(let i =0;i<array.length;i++){
        array.forEach((item,index) => {
            if(index!==i){
                res[i] = result[i]*item
            }
        });
    }
}