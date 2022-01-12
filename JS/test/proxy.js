let person = {
    name:'lz',
    age:18,
    money:10000000
}
person = new Proxy(person,{
    set:(target,key,value)=>{
        if(key=='age'&&value>18){
            value=18;
        }
        if(key=='money'&&value<100000){
            try{
                throw '钱太少啦太少啦';
            }catch{
            }finally{
                console.log('跑路跑路')
            }
        }
        return Reflect.set(target, key, value);
    },
    get:(target,key)=>{
        return key+':'+target[key]
    }
});
person.money=9;
console.log(person)