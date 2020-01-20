var http = require("http"); //http module import

//イベント駆動
http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type": "text/plain"});
    response.write("helloWorld");
    response.end();
}).listen(8888); //8888ポートからのアクセスを受けるサーバ定義
