function type(target,type){
    let targetType = Object.prototype.toString.call(target).toLowerCase().match(/\[object (\S*)\]/)[1];
    return type === undefined ? targetType : targetType === type;
}

export default type;