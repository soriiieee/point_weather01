//module import
var http = require("http");

//making server
// request = url を叩かれる
function start(){
    //start mathod1
    function onRequest(request,response) {
        console.log("Requests received");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }
    // start method2
    http.createServer(onRequest).listen(8888);
    console.log("server is started");
}


// 外部からファイルを用いる時に用いる文言
exports.start = start;
//callback function calling NOW!

