// // 前端实现
// <script rc='http://localhost:8080/api/jsonp?id=1&cb=jsonpCallBack' type='text/javascript'></script>
// <script type="text/javascript">
//     window.jsonpCallBack = function(res) {
//         console.log(res);
//     }
// </script>
// 后端
// const Koa = require('koa');
// const app = new Koa();
// const items = [{ id: 1, title: 'title1' }, { id: 2, title: 'title2' }]

// app.use(async (ctx, next) => {
//   if (ctx.path === '/api/jsonp') {
//     const { cb, id } = ctx.query;
//     const title = items.find(item => item.id == id)['title']
//     ctx.body = `${cb}(${JSON.stringify({title})})`;
//     return;
//   }
// })
// console.log('listen 8080...')
// app.listen(8080);
// 123
// 缺点：只能get请求
// 手写原理很简单就是创建一个script标签把url塞进去 并且在window上定义一个回调函数
function JSONP({
    url,params={},callback,callbackId='cb'
}){
    window[callbackId]=callback;
    const scriptDom = document.createElement('script');
    const newParams = Object.keys(params).map(item=>`${item}=${params.item}`).join('&');
    scriptDom.setAttribute('src',`${url}${newParams?`?${newParams}`:''}?${newParams}`);
    document.body.appendChild(scriptDom);
};
// withCredentials: true // 携带跨域cookie
