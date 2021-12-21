// 防抖
// 连续操作时只有最后一次操作生效
function debounce(fn) {
    let timer = null;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn();
        },500)
    }
}
// 节流
// 连续操作时在规定时间内只有第一次生效
function throttle(fn) {
    let timer = false;
    return function () {
        if (timer) { return; }
        timer = true;
        setTimeout(() => {
            fn();
            timer = false;
        },500)
    }
}