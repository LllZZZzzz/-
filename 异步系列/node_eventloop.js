
setTimeout(()=>{
    console.log(1);
    new Promise((resolve)=>{
        setTimeout(()=>resolve(2))
    }).then((res)=>console.log(res))
},0);
setTimeout(()=>{
    console.log(3)
    Promise.resolve(4).then((res)=>console.log(res))
},0);
