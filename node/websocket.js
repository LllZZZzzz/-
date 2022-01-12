var ws = require("nodejs-websocket");
ws.createServer((connection)=>{
    // connection.on("close", function (code, reason) {
    //     console.log("关闭连接");
    // });
    // connection.on("error", function (code, reason) {
        // try {
        // } catch (error) {
        //     console.log('close异常', error)
        // }
    // });
}).listen(8001)