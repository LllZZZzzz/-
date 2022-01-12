const getWait = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            try {
                throw '错啦错啦'
            } catch (error) {
                reject(error)
            }
        },300)
    });
}
async function getData(){
    await getWait().then((res)=>{
        console.log(res);
   }).catch((error)=>console.log(error));
    console.log(123)
}
getData();
console.log(456)