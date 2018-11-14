function route(handle, pathname, response, request) {
    console.log("About to route a request for " + pathname);
    if(typeof handle[pathname]=== 'function'){
        return handle[pathname](response, request);
    }else{
        console.log("No request handler found for " + pathname);
        response.writeHead(404,{"Content-Type": "text.plain"});
        response.write("404 Not found");
        response.end();
    }
}
//输出这个方法router你可以这么理解或许有点抽象。
exports.route = route;