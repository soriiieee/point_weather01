var http = require("http");//imoport
var fs = require("fs"); //iport
var ejs = require("ejs");


/// main server making
var server = http.createServer(); //server instance
server.on("request",doRequest); //serverできたタイミングでdoRequest function 
server.listen(1234); //port numbaer 1234
console.log("server running");

var hello = 
///// sub routine
function doRequest(req,res){
    //read template file
    var nn = Math.floor(Math.random()*3);
    fs.readFile(
        // /callback finction
        "./hello.html",// file name
        "UTF-8", //character
        function(err,data){ //callback
            //initial dataset
            var title = ["pageA","pageB","pageC"];
            var content = ["sample","test","production"];
            //
            var data2 = data.
                replace(/@title@/g, title[nn]).
                replace(/@content@/g, content[nn]);
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.write(data2);
            res.end();
        });
}