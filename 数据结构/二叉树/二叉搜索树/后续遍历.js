const VerifySquenceOfBST =(sequence)=>{
    if(sequence&&sequence.length){
        let root = sequence.pop();
        for(var i = 0;i<sequence.length;i++){
            if(sequence[i]>root){
                break;
            };
        }
        for(let j = i;j<sequence.length;j++){
            if(sequence[j]<root){
                return false;
            }
        }
        let left,right = true;
        left = VerifySquenceOfBST(sequence.splice(0,i));
        right = VerifySquenceOfBST(sequence.splice(i));
        return left&&right
    }
    return true;
};

console.log(VerifySquenceOfBST([0,5,1,4,7,8,9]))