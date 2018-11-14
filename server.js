var http = require("http");
var url= require("url");
// 发送函数或者是匿名函数，请求完成回进行回调
function start(route,handle){
    function onRequest (request,response){
        // var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        // 直接将 request对象传递给请求路由的方式
        route(handle, pathname, response, request);
        //这里调用了router.js类里面的route方法,并不是使用了router.js因为exports 输出的是route
        // response.writeHead(200, {"Content-Type": "text/plain"});
        // var content = route(handle,pathname);
        // response.write(content);
        // response.end();
        
        // require.setEncoding("utf-8") //设置了接收数据的编码格式为UTF-8

         //然后注册了“data”事件的监听器，用于收集每次接收到的新数据块，并将其赋值给postData 变量
        // require.addListener("data", function(postDataChunk){
        //     postData += postDataChunk;
        //     console.log("Received POST data chunk '"+postDataChunk + "'.");
        // });
        //我们将请求路由的调用移到end事件处理程序中，以确保它只会当所有数据接收完毕后才触发，并且只触发一次
        // require.addListener("end",function(){
        //     //我们同时还把POST数据(postData)传递给请求路由，因为这些数据，请求处理程序会用到。
        //     route(handle, pathname, response, postData );
        // });
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}
exports.start = start;

