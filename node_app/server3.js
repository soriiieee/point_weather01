//module import
var http = require("http");
var url = require("url");

//making server
// request = url を叩かれる
function start(route,handle){
    //start mathod1
    function onRequest(request,response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Requests"+pathname+"received");

        // return --> console.log("About to route a request for " + pathname));
        route(handle,pathname);

        //実際にサーバを作っている場面response
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }
    // start method2
    http.createServer(onRequest).listen(8888);
    console.log("server has started");
}


// 外部からファイルを用いる時に用いる文言
exports.start = start;
//callback function calling NOW!

