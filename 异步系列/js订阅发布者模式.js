const descriptor = Object.create(null);
descriptor.subscribe = {};
const utils = Object.create(null);
utils.type = (target,type) => {
    return Object.prototype.toString.call(target).slice(8, -1) == type;
}
const morse = {
    publish(action) {
        if (utils.type(action, 'Object')&&action.type) {
            descriptor.subscribe[action.type].forEach(fn => fn(action.payload));
        }
    },
    subscribe(action,cb) {
        if (action) {
            if (!utils.type(descriptor.subscribe[action], 'Array')) {
                descriptor.subscribe[action] = [cb]
            } else if(!descriptor.subscribe[action].includes(cb)){
                descriptor.subscribe[action].push(cb)
            }
        };
        return () => {
            this.unsubscribe(action, cb);
        }
    },
    unsubscribe(action,cb) {
        if (action) {
            if (!utils.type(descriptor.subscribe[action], 'Array')) {
                let index = descriptor.subscribe[action].indexOf(cb);
                // splice改变原数组
                descriptor.subscribe[action].splice(index, 1);
            }
        };
    }
}
const unsubscribe = morse.subscribe('add', () => {
    console.log(123)
});
morse.publish({
    type: 'add',
    payload: {
        
    }
})