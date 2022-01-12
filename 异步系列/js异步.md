- js单线程
    - 为什么js设计为单线程
        - 多线程操作dom的时候会发生混乱 即使之后出现的webworker也不允许操作dom
    - 为什么需要异步
        - 单线程 在涉及一些需要等待的程序时可以让下面的程序继续进行而不至于卡死
    - 实现异步的方式
        - 回调函数（promise）
        - 发布/订阅
        - async/await
- EventLoop
    - 事件循环是实现异步的基本原理
    - 为了保证js单线程对dom的操作不发生混乱 也要保证一些需要等待的程序不造成页面的卡死 所以有了EventLoop
    - 浏览器的eventLoop
        - 每次宏任务执行完之后执行一次微任务
        - script任务主体（遇到异步的任务则交给对应的异步线程 执行完毕则塞入任务队列）->是否有等待的微任务有的话则执行->GUI渲染->webwork->下一宏任务
    - Node的eventLoop
        - node的eventloop有6个阶段
        - 在每个任务的阶段（就算这个任务阶段有多个宏任务 也会把所有的宏任务执行完再去进行微任务 这就是和浏览器的区别）都会执行微任务
- requestAnimationFrame
    - 浏览器下次重绘制之前调用 保证了不同屏幕刷新频率的浏览器 的动画的流畅
    - requestAnimationFrame不是一个任务 不会进入eventloop 在主线程空闲是回调 不空闲也触发但是回调不执行
- webworker
    - 一个不允许操作dom的js分线程
    - 但是本质还是单线程 webWork只是浏览器提供的一个得力的api
    - 微任务->gui->webwork
    - 使用：const worker = new Worker('./index.js');
        worker.addEventListener('message', (res) => {
            console.log('index.html 收到数据：', res);
        });
        worker.postMessage('查房，这里是 index.html！');
        //  终止 Worker
        worker.terminate();
- 训练题 还没做。。。。
